class DoubanProvider extends LinkProvider {
  constructor() {
    super({
      name: 'douban',
      label: chrome.i18n.getMessage('optionsProviderDouban'),
      iconUrl: 'https://www.douban.com/favicon.ico',
      searchTemplate: 'https://search.douban.com/movie/subject_search?search_text={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}