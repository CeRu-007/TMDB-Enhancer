class CrunchyrollProvider extends LinkProvider {
  constructor() {
    super({
      name: 'crunchyroll',
      label: chrome.i18n.getMessage('optionsProviderCrunchyroll'),
      iconUrl: 'https://www.crunchyroll.com/favicon.ico',
      searchTemplate: 'https://www.crunchyroll.com/search?q={query}',
      category: 'streaming',
      subcategory: 'international'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}