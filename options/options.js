document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const messageEl = document.getElementById('message');

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

  const defaultSettings = {
    enabledLinks: ['wikipedia', 'imdb', 'rottentomatoes', 'metacritic', 'letterboxd'],
    showExternalLinks: true,
    collapsedCategories: []
  };

  const allProviders = ['wikipedia', 'baidu', 'weibo', 'douban', 'imdb', 'rottentomatoes', 'metacritic', 'letterboxd', 'googlemovies', 'bangumi', 'tencentvideo', 'youku', 'iqiyi', 'mangotv', 'sohuvideo', 'tudou', 'netflix', 'crunchyroll', 'bilibili', 'justwatch', 'myanimelist', 'disneyplus', 'appletv', 'hulu', 'twitter', 'moegirl', 'baidusearch', 'googlesearch', 'bingsearch'];

  function loadSettings() {
    chrome.storage.sync.get(defaultSettings, (settings) => {
      allProviders.forEach(provider => {
        const checkbox = document.getElementById(provider);
        if (checkbox) {
          checkbox.checked = settings.enabledLinks.includes(provider);
        }
      });

      document.getElementById('showExternalLinks').checked = settings.showExternalLinks;

      const collapsedCategories = settings.collapsedCategories || [];
      collapsedCategories.forEach(category => {
        const categoryEl = document.querySelector(`[data-category="${category}"]`);
        if (categoryEl) {
          const content = categoryEl.querySelector('.provider-category-content');
          const toggle = categoryEl.querySelector('.provider-category-toggle');
          const icon = toggle.querySelector('.toggle-icon');
          content.classList.add('collapsed');
          icon.textContent = '▶';
        }
      });
    });
  }

  function saveSettings() {
    const enabledLinks = [];
    allProviders.forEach(provider => {
      const checkbox = document.getElementById(provider);
      if (checkbox && checkbox.checked) {
        enabledLinks.push(provider);
      }
    });

    const collapsedCategories = [];
    document.querySelectorAll('.provider-category-content.collapsed').forEach(content => {
      const categoryEl = content.closest('.provider-category');
      collapsedCategories.push(categoryEl.dataset.category);
    });

    const settings = {
      enabledLinks: enabledLinks,
      showExternalLinks: document.getElementById('showExternalLinks').checked,
      collapsedCategories: collapsedCategories
    };

    chrome.storage.sync.set(settings, () => {
      showMessage(chrome.i18n.getMessage('optionsMessageSaved'), 'success');

      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          if (tab.url.includes('themoviedb.org')) {
            chrome.tabs.sendMessage(tab.id, { action: 'reload' });
          }
        });
      });
    });
  }

  function resetSettings() {
    chrome.storage.sync.set(defaultSettings, () => {
      loadSettings();
      showMessage(chrome.i18n.getMessage('optionsMessageReset'), 'success');
    });
  }

  function showMessage(text, type) {
    messageEl.textContent = text;
    messageEl.className = `message ${type}`;

    setTimeout(() => {
      messageEl.className = 'message';
      messageEl.textContent = '';
    }, 3000);
  }

  saveBtn.addEventListener('click', saveSettings);
  resetBtn.addEventListener('click', resetSettings);

  document.querySelectorAll('.provider-category-header').forEach(header => {
    header.addEventListener('click', () => {
      const categoryEl = header.closest('.provider-category');
      const content = categoryEl.querySelector('.provider-category-content');
      const toggle = header.querySelector('.provider-category-toggle');
      const icon = toggle.querySelector('.toggle-icon');

      content.classList.toggle('collapsed');
      icon.textContent = content.classList.contains('collapsed') ? '▶' : '▼';
    });
  });

  loadSettings();
});