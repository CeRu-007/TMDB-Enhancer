class GoogleSearchProvider extends LinkProvider {
  constructor() {
    super({
      name: 'googlesearch',
      label: chrome.i18n.getMessage('optionsProviderGoogleSearch'),
      iconUrl: 'https://www.google.com/favicon.ico',
      searchTemplate: 'https://www.google.com/search?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}