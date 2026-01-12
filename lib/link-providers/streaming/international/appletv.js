class AppleTVProvider extends LinkProvider {
  constructor() {
    super({
      name: 'appletv',
      label: chrome.i18n.getMessage('optionsProviderAppleTV'),
      iconUrl: 'https://tv.apple.com/favicon.ico',
      searchTemplate: 'https://tv.apple.com/search?term={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}