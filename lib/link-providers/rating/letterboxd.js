class LetterboxdProvider extends LinkProvider {
  constructor() {
    super({
      name: 'letterboxd',
      label: chrome.i18n.getMessage('optionsProviderLetterboxd'),
      iconUrl: 'https://letterboxd.com/favicon.ico',
      searchTemplate: 'https://letterboxd.com/search/{query}/',
      category: 'rating'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}