const CONTEXT_MENU_ID = "SEARCH_STORYGRAPH";

function openStoryGraph(info) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  chrome.tabs.create({
    url: "https://app.thestorygraph.com/browse?search_term=" + info.selectionText,
  });
}

chrome.contextMenus.create({
  title: "Search on TheStoryGraph",
  contexts: ["selection"],
  id: CONTEXT_MENU_ID,
});

chrome.contextMenus.onClicked.addListener(openStoryGraph);
