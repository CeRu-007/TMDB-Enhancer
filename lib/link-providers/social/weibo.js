class WeiboProvider extends LinkProvider {
  constructor() {
    super({
      name: 'weibo',
      label: chrome.i18n.getMessage('optionsProviderWeibo'),
      iconUrl: 'https://weibo.com/favicon.ico',
      searchTemplate: 'https://s.weibo.com/weibo/{query}',
      category: 'social'
    });
  }

  buildUrl(title, year = '') {
    return this.buildSearchUrl(title);
  }
}