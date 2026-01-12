class JustWatchProvider extends LinkProvider {
  constructor() {
    super({
      name: 'justwatch',
      label: chrome.i18n.getMessage('optionsProviderJustWatch'),
      iconUrl: 'https://www.justwatch.com/favicon.ico',
      searchTemplate: 'https://www.justwatch.com/search?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}