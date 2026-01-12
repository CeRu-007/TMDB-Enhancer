class RottenTomatoesProvider extends LinkProvider {
  constructor() {
    super({
      name: 'rottentomatoes',
      label: chrome.i18n.getMessage('optionsProviderRottenTomatoes'),
      iconUrl: 'https://www.rottentomatoes.com/favicon.ico',
      searchTemplate: 'https://www.rottentomatoes.com/search?search={query}',
      category: 'rating'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}