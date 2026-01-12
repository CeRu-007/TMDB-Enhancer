class TudouProvider extends LinkProvider {
  constructor() {
    super({
      name: 'tudou',
      label: chrome.i18n.getMessage('optionsProviderTudou'),
      iconUrl: 'https://www.tudou.com/favicon.ico',
      searchTemplate: 'https://so.tudou.com/isearch.action?kw={query}',
      category: 'streaming',
      subcategory: 'chinese'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}