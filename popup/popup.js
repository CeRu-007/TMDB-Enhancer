document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const optionsBtn = document.getElementById('optionsBtn');

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const message = chrome.i18n.getMessage(key);
      if (message) {
        if (element.tagName === 'TITLE') {
          document.title = message;
        } else {
          element.textContent = message;
        }
      }
    });
  }

  applyI18n();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];

    if (currentTab.url && currentTab.url.includes('themoviedb.org/movie')) {
      statusEl.textContent = chrome.i18n.getMessage('popupStatusActiveMovie');
      statusEl.className = 'status active';
    } else if (currentTab.url && currentTab.url.includes('themoviedb.org/tv')) {
      statusEl.textContent = chrome.i18n.getMessage('popupStatusActiveTV');
      statusEl.className = 'status active';
    } else if (currentTab.url && currentTab.url.includes('themoviedb.org')) {
      statusEl.textContent = chrome.i18n.getMessage('popupStatusVisitPage');
      statusEl.className = 'status inactive';
    } else {
      statusEl.textContent = chrome.i18n.getMessage('popupStatusNotOnTMDB');
      statusEl.className = 'status inactive';
    }
  });

  optionsBtn.addEventListener('click', () => {
    chrome.tabs.create({ url: 'options/options.html' });
  });
});