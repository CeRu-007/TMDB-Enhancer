class TencentVideoProvider extends LinkProvider {
  constructor() {
    super({
      name: 'tencentvideo',
      label: chrome.i18n.getMessage('optionsProviderTencentVideo'),
      iconUrl: 'https://v.qq.com/favicon.ico',
      searchTemplate: 'https://v.qq.com/x/search/?q={query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}