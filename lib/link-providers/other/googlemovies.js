class GoogleMoviesProvider extends LinkProvider {
  constructor() {
    super({
      name: 'googlemovies',
      label: chrome.i18n.getMessage('optionsProviderGoogleMovies'),
      iconUrl: 'https://www.google.com/favicon.ico',
      searchTemplate: 'https://www.google.com/search?q={query}+movie',
      category: 'other'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year} movie` : `${title} movie`;
    return this.buildSearchUrl(query);
  }
}