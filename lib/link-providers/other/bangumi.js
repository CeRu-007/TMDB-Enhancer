class BangumiProvider extends LinkProvider {
  constructor() {
    super({
      name: 'bangumi',
      label: chrome.i18n.getMessage('optionsProviderBangumi'),
      iconUrl: 'https://bgm.tv/img/favicon.ico',
      searchTemplate: 'https://bgm.tv/subject_search/{query}?cat=all',
      category: 'other'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}