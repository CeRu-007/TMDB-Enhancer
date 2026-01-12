class BaiduProvider extends LinkProvider {
  constructor() {
    super({
      name: 'baidu',
      label: chrome.i18n.getMessage('optionsProviderBaidu'),
      iconUrl: 'https://www.baidu.com/favicon.ico',
      searchTemplate: 'https://baike.baidu.com/item/{query}',
      category: 'encyclopedia'
    });
  }

  buildUrl(title, year = '') {
    return this.buildSearchUrl(title);
  }
}