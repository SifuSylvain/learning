chrome.app.runtime.onLaunched.addListener(() => openMain());

var openMain = () => {
  chrome.app.window.create("index.html", {id: "main"});
}

chrome.app.window.get("main");
