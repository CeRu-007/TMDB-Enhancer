class MangoTVProvider extends LinkProvider {
  constructor() {
    super({
      name: 'mangotv',
      label: chrome.i18n.getMessage('optionsProviderMangoTV'),
      iconUrl: 'https://www.mgtv.com/favicon.ico',
      searchTemplate: 'https://so.mgtv.com/so?k={query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}