class YoukuProvider extends LinkProvider {
  constructor() {
    super({
      name: 'youku',
      label: chrome.i18n.getMessage('optionsProviderYouku'),
      iconUrl: 'https://www.youku.com/favicon.ico',
      searchTemplate: 'https://so.youku.com/search_video/q_{query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}