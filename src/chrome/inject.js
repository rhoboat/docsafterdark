const js = document.createElement("script");
js.setAttribute("src", chrome.runtime.getURL("kix_app.js"));
js.id = "docs-payload";
// Insert js at end of body element
document.body.insertBefore(js, document.body.lastChild);

console.log("payload injected by inject.js");
