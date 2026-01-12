class WikipediaProvider extends LinkProvider {
  constructor() {
    super({
      name: 'wikipedia',
      label: chrome.i18n.getMessage('optionsProviderWikipedia'),
      iconUrl: 'https://www.wikipedia.org/static/favicon/wikipedia.ico',
      searchTemplate: 'https://en.wikipedia.org/wiki/Special:Search?search={query}&go=Go',
      category: 'encyclopedia'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year} film` : title;
    return this.buildSearchUrl(query);
  }
}