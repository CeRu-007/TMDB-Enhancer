class IQIYIProvider extends LinkProvider {
  constructor() {
    super({
      name: 'iqiyi',
      label: chrome.i18n.getMessage('optionsProviderIQIYI'),
      iconUrl: 'https://www.iqiyi.com/favicon.ico',
      searchTemplate: 'https://so.iqiyi.com/so/q_{query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}