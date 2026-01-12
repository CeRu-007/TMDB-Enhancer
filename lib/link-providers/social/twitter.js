class TwitterProvider extends LinkProvider {
  constructor() {
    super({
      name: 'twitter',
      label: chrome.i18n.getMessage('optionsProviderTwitter'),
      iconUrl: 'https://twitter.com/favicon.ico',
      searchTemplate: 'https://twitter.com/search?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}