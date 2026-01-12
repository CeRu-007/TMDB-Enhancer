class BilibiliProvider extends LinkProvider {
  constructor() {
    super({
      name: 'bilibili',
      label: chrome.i18n.getMessage('optionsProviderBilibili'),
      iconUrl: 'https://www.bilibili.com/favicon.ico',
      searchTemplate: 'https://search.bilibili.com/all?keyword={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}