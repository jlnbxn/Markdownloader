import { useState } from "react";
import { BaseStyles } from "@primer/components";
import { Readability } from "@mozilla/readability";
import TurndownService from "turndown";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Input from "./components/Input";
import ArticleWrapper from "./components/ArticleWrapper";
import { getMeteredContentElement } from "./utils";

function App() {
  const [simplifiedArticle, setSimplifiedArticle] = useState({ __html: "" });
  const [articleTitle, setArticleTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [siteName, setSiteName] = useState("");
  const [value, setValue] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    serializer: (el) => {
      const headings = el.querySelectorAll("h2, h3");
      for (let x of headings) {
        let title = x.innerText.toLowerCase().replace(/ |\?|:/g, "_");
        x.setAttribute("id", title);
      }
      return el.innerHTML;
    },
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      const response = await getArticleContent(value);
      setSimplifiedArticle(response);
      await getBlobs();
      stripIframes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleExample = async (e) => {
    const example =
      "https://medium.com/hackernoon/boost-your-productivity-using-markdown-b8a84fc2a089";
    try {
      setIsLoading(true);
      const response = await getArticleContent(example);
      setSimplifiedArticle(response);
      await getBlobs();
      stripIframes();
    } catch (error) {
      console.log(error);
    }
  };

  const stripIframes = () => {
    const iFrame = document.querySelectorAll("iframe");
    console.log(iFrame);
    for (let x of iFrame) {
      x.parentNode.removeChild(x);
    }
  };

  const getRedirectUrl = async (value) => {
    const responseStream = await fetch("/.netlify/functions/getRedirectUrl", {
      method: "POST",
      body: value,
    }).then((res) => res.json());
    return responseStream;
  };

  const getArticleContent = async (url) => {
    let parser = new DOMParser();
    setSiteUrl(url);

    try {
      let response = await fetch(`/cors-proxy/${url.replace('https://', '')}`);
      let responseStream = await response.text();
      let doc = parser.parseFromString(responseStream, "text/html");

      // Medium.com specific
      const articleContent = getMeteredContentElement(doc);
      if (articleContent) {
        responseStream = await fetch("/.netlify/functions/getMeteredContent", {
          method: "POST",
          body: value,
        }).then((res) => res.json());
        doc = parser.parseFromString(responseStream, "text/html");
      }

      if (response.status === 409) {
        const response = await fetch(
          "/.netlify/functions/getContent",
          {
            method: "POST",
            body: value,
          }
        );
        responseStream = await response.json();
      }

      let reader = new Readability(doc, options);
      let article = reader.parse();

      setArticleTitle(article.title);
      setAuthor(article.byline);
      setSiteName(article.siteName);
      return { __html: article.content };
    } catch (error) {
      const responseStream = await getRedirectUrl(url);
      const doc = parser.parseFromString(responseStream, "text/html");
      let reader = new Readability(doc, options);
      let article = reader.parse();
      setArticleTitle(article.title);
      setAuthor(article.byline);
      setSiteName(article.siteName);
      return { __html: article.content };
    }
  };

  const getBlobs = async () => {
    var images = document.querySelectorAll("img");
    for (let img of images) {
      try {
        const blob = await fetch(`/cors-proxy/${img.src.replace('https://', '').replace('http://', '')}`).then((res) =>
          res.blob()
        );
        const objectURL = URL.createObjectURL(blob);
        img.setAttribute("data-orgsrc", img.src);
        img.src = objectURL;
        img.srcset = "";
        img.removeAttribute("height");
        img.removeAttribute("width");
      } catch (error) {
        try {
          console.log(error);
          const proxiedImageUrl = await fetch(
            "/.netlify/functions/getProxiedImageUrl",
            {
              method: "POST",
              body: img.src,
            }
          ).then((res) => res.json());
          img.setAttribute("data-orgsrc", proxiedImageUrl);
          const blob = await fetch(`/cors-proxy/${proxiedImageUrl.replace('https://', '')}`).then(
            (res) => res.blob()
          );
          const objectURL = URL.createObjectURL(blob);
          img.src = objectURL;
          img.srcset = "";
          img.removeAttribute("height");
          img.removeAttribute("width");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const getMarkDown = () => {
    const images = document.querySelectorAll("img");
    for (let x of images) {
      if (x.parentElement.tagName === "A") {
        x.parentElement.outerHTML = x.parentElement.innerHTML;
      }
    }
    let turndownService = new TurndownService();
    function cleanAttribute(attribute) {
      return attribute ? attribute.replace(/(\n+\s*)+/g, "\n") : "";
    }
    turndownService.addRule("image", {
      filter: ["img"],
      replacement: function (content, node) {
        var alt = cleanAttribute(node.getAttribute("alt"));
        var src = node.getAttribute("data-mdsrc") || "";
        var title = cleanAttribute(node.getAttribute("title"));
        var titlePart = title ? ' "' + title + '"' : "";
        return src ? `![${alt}](${src + titlePart})` : "";
      },
    });

    var markdown = turndownService.turndown(
      document.getElementById("readability-page-1")
    );

    return new Blob([markdown], { type: "text/csv" });
  };

  const getTextbundle = async () => {
    let zip = new JSZip();
    let folder = zip.folder("/assets");
    const images = document.querySelectorAll("img");
    for (let img of images) {
      const imageUrl = `/cors-proxy/${img.dataset.orgsrc.replace('https://', '')}`;
      const filename = imageUrl.substr(imageUrl.lastIndexOf("/"));
      const filenameDecoded = decodeURI(filename);
      const blob = await fetch(imageUrl).then((res) => res.blob());
      const imageFile = new File([blob], filenameDecoded);
      img.setAttribute("data-mdsrc", `assets${filenameDecoded}`);
      folder.file(filenameDecoded, imageFile);
    }
    let markdown = getMarkDown();
    const markdownFile = new File([markdown], "text.md");
    zip.file(`${articleTitle}.md`, markdownFile);
    zip.generateAsync({ type: "blob" }).then(function (blob) {
      saveAs(blob, `${articleTitle}.zip`);
    });
  };

  return (
    <>
      <BaseStyles>
        {simplifiedArticle.__html.length < 1 ? (
          <Input
            onSubmit={handleSubmit}
            value={value}
            setParentValue={setValue}
            isLoading={isLoading}
            handleExample={handleExample}
          />
        ) : (
          <ArticleWrapper
            article={simplifiedArticle}
            close={() => {
              setSimplifiedArticle({ __html: "" });
              setValue("");
            }}
            title={articleTitle}
            author={author}
            siteName={siteName}
            siteUrl={siteUrl}
            getTextbundle={() => getTextbundle()}
            setIsLoading={() => setIsLoading(false)}
          />
        )}
      </BaseStyles>
    </>
  );
}

export default App;
