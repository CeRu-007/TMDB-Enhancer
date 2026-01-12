class IMDbProvider extends LinkProvider {
  constructor() {
    super({
      name: 'imdb',
      label: chrome.i18n.getMessage('optionsProviderIMDb'),
      iconUrl: 'https://www.imdb.com/favicon.ico',
      searchTemplate: 'https://www.imdb.com/find?q={query}&s=tt&ttype=ft',
      category: 'rating'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}