class BingSearchProvider extends LinkProvider {
  constructor() {
    super({
      name: 'bingsearch',
      label: chrome.i18n.getMessage('optionsProviderBingSearch'),
      iconUrl: 'https://www.bing.com/favicon.ico',
      searchTemplate: 'https://www.bing.com/search?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}