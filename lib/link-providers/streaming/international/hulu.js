class HuluProvider extends LinkProvider {
  constructor() {
    super({
      name: 'hulu',
      label: chrome.i18n.getMessage('optionsProviderHulu'),
      iconUrl: 'https://www.hulu.com/favicon.ico',
      searchTemplate: 'https://www.hulu.com/search?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}