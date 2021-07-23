const MEMBERSHIP_PROMPT_ID = "paywall-background-color";
const METERED_CONTENT_CLASSNAME = "meteredContent";

export function urlWithoutQueryParams(url) {
  if (!url) {
    return "";
  }
  return url.split("?")[0];
}

function hasMembershipPromptNew(document) {
  const article = document.getElementsByTagName("article")[0];
  if (!article) {
    return false;
  }
  const computedStyles = (document.defaultView || window).getComputedStyle(
    article.nextSibling
  );
  if (!computedStyles.background) {
    return false;
  }
  return computedStyles.background.indexOf("linear-gradient") > -1;
}

export function hasMembershipPrompt(document) {
  return (
    document.getElementById(MEMBERSHIP_PROMPT_ID) ||
    hasMembershipPromptNew(document)
  );
}

export function getMeteredContentElement(doc) {
  return (doc || document).getElementsByClassName(METERED_CONTENT_CLASSNAME)[0];
}
