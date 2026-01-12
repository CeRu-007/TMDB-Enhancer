class DisneyPlusProvider extends LinkProvider {
  constructor() {
    super({
      name: 'disneyplus',
      label: chrome.i18n.getMessage('optionsProviderDisneyPlus'),
      iconUrl: 'https://www.disneyplus.com/favicon.ico',
      searchTemplate: 'https://www.disneyplus.com/search/{query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}