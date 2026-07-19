class TVDBProvider extends LinkProvider {
  constructor() {
    super({
      name: 'tvdb',
      label: chrome.i18n.getMessage('optionsProviderTVDB'),
      iconUrl: 'https://www.thetvdb.com/favicon.ico',
      searchTemplate: 'https://thetvdb.com/search?q={query}',
      category: 'other'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}
