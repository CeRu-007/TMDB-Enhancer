class BangumiProvider extends LinkProvider {
  constructor() {
    super({
      name: 'bangumi',
      label: chrome.i18n.getMessage('optionsProviderBangumi'),
      iconUrl: 'https://bgm.tv/favicon.ico',
      searchTemplate: 'https://bgm.tv/search/subject/{query}',
      category: 'other'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}