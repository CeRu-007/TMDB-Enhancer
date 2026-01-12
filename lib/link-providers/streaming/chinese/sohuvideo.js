class SohuVideoProvider extends LinkProvider {
  constructor() {
    super({
      name: 'sohuvideo',
      label: chrome.i18n.getMessage('optionsProviderSohuVideo'),
      iconUrl: 'https://tv.sohu.com/favicon.ico',
      searchTemplate: 'https://so.tv.sohu.com/mts?wd={query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}