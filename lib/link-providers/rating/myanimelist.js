class MyAnimeListProvider extends LinkProvider {
  constructor() {
    super({
      name: 'myanimelist',
      label: chrome.i18n.getMessage('optionsProviderMyAnimeList'),
      iconUrl: 'https://myanimelist.net/favicon.ico',
      searchTemplate: 'https://myanimelist.net/anime.php?q={query}'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}