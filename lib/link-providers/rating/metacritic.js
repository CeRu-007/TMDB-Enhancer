class MetacriticProvider extends LinkProvider {
  constructor() {
    super({
      name: 'metacritic',
      label: chrome.i18n.getMessage('optionsProviderMetacritic'),
      iconUrl: 'https://www.metacritic.com/favicon.ico',
      searchTemplate: 'https://www.metacritic.com/search/{query}/',
      category: 'rating'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}