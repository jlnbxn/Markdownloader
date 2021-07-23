import { useEffect, useRef } from "react";
import { DownloadIcon, ListUnorderedIcon } from "@primer/octicons-react";
import { Button, Box, ButtonPrimary } from "@primer/components";
import UseToc from "../hooks/useToc";

const ArticleWrapper = ({
  article,
  close,
  title,
  author,
  siteName,
  getTextbundle,
  setIsLoading,
  siteUrl,
}) => {

  const navRef = useRef(null);
  const [toc, active] = UseToc(navRef)

  useEffect(() => setIsLoading(), [setIsLoading]);

  return (
    <div className="container-lg clearfix new-discussion-timeline px-3 px-md-4 px-lg-5 mt-3">

      <nav className="file-navigation mb-3 d-flex flex-items-start">
        <Button onClick={() => close()}>Go Home</Button>
        <div className="flex-auto"></div>
        <ButtonPrimary onClick={() => getTextbundle()}>
          <DownloadIcon size={16} /> Download
        </ButtonPrimary>
      </nav>

      <Box className="Box md js-code-block-container Box--responsive">
        <div
          className="d-flex js-sticky js-position-sticky top-0 border-top-0 border-bottom p-2 flex-items-center flex-justify-between color-bg-primary rounded-top-2"
          ref={navRef}
          style={{ position: "sticky", zIndex: "90", top: "0px !important" }}
        >
          <div className="d-flex flex-items-center">
            <details className="details-reset details-overlay">
              <summary role="button" className="btn btn-octicon m-0 mr-2 p-2">
                <ListUnorderedIcon
                  size={16}
                  className="octicon octicon-list-unordered"
                />
              </summary>
              <div className="SelectMenu">
                <div
                  className="SelectMenu-modal rounded-3 mt-1"
                  style={{ maxHeight: "340px" }}
                >
                  <div
                    className="SelectMenu-list SelectMenu-list--borderless p-2"
                    style={{ overscrollBehavior: "contain" }}
                  >
                    {toc &&
                      toc.map((item, index) => (
                        <a
                          className={`filter-item py-1 ${index === 0 ? "text-emphasized" : ""
                            }`}
                          style={
                            item.tagName === "H1"
                              ? { paddingLeft: "12px" }
                              : item.tagName === "H1"
                                ? { paddingLeft: "24px" }
                                : item.tagName === "H3"
                                  ? { paddingLeft: "36px" }
                                  : {}
                          }
                          role="menuitem"
                          {...(active === item.hash
                            ? { "aria-current": "page" }
                            : {})}
                          href={"#" + item.hash}
                          key={index}
                        >
                          {item.title}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </details>

            <h2 className="Box-title">
              <a
                className="Link--primary"
                href={`#${title.toLowerCase().replace(/ |\?|:/g, "_")}`}
              >
                {title}.md
              </a>
            </h2>
          </div>
        </div>
        <div className="Box-body">
          <article
            className="markdown-body entry-content container-lg"
            id="content"
          >
            <h1 id={title.toLowerCase().replace(/ |\?|:/g, "_")}>{title}</h1>
            <div dangerouslySetInnerHTML={article} />
          </article>
        </div>
      </Box>
    </div>
  );
}

export default ArticleWrapper;
