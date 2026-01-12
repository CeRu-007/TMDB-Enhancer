class BaiduSearchProvider extends LinkProvider {
  constructor() {
    super({
      name: 'baidusearch',
      label: chrome.i18n.getMessage('optionsProviderBaiduSearch'),
      iconUrl: 'https://www.baidu.com/favicon.ico',
      searchTemplate: 'https://www.baidu.com/s?wd={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}