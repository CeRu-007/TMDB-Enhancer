class MoegirlProvider extends LinkProvider {
  constructor() {
    super({
      name: 'moegirl',
      label: chrome.i18n.getMessage('optionsProviderMoegirl'),
      iconUrl: 'https://zh.moegirl.org.cn/favicon.ico',
      searchTemplate: 'https://zh.moegirl.org.cn/index.php?search={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}