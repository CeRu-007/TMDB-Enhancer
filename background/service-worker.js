chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('TMDB Enhancer extension installed');
  } else if (details.reason === 'update') {
    console.log('TMDB Enhancer extension updated');
  }
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes('themoviedb.org')) {
    chrome.tabs.sendMessage(tab.id, { action: 'refresh' });
  } else {
    chrome.tabs.create({
      url: 'https://www.themoviedb.org'
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSettings') {
    chrome.storage.sync.get({
      enabledLinks: ['wikipedia', 'baidu', 'weibo', 'douban']
    }, (result) => {
      sendResponse(result);
    });
    return true;
  }

  if (request.action === 'saveSettings') {
    chrome.storage.sync.set(request.settings, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});