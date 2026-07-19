class CrunchyrollProvider extends LinkProvider {
  constructor() {
    super({
      name: 'crunchyroll',
      label: chrome.i18n.getMessage('optionsProviderCrunchyroll'),
      iconHtml: '<svg viewBox="0 0 1024 1024" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M125.152 574.592c-0.896-10.656-1.408-23.04-1.408-35.552 0-248.608 201.536-450.144 450.144-450.144s450.144 201.536 450.144 450.144v1.504V512c0-282.752-229.248-512-512-512s-512 229.248-512 512 229.248 512 512 512h34.144c-235.168-17.152-419.648-211.52-420.992-449.28v-0.128z m694.048 22.752h-0.608a164.256 164.256 0 0 1-57.408-318.208l1.12-0.384a332.544 332.544 0 0 0-165.312-39.808h0.32c-197.952 0-358.4 160.448-358.4 358.4s160.448 358.4 358.4 358.4c197.952 0 358.4-160.448 358.4-358.4a277.184 277.184 0 0 0-6.016-70.08l0.32 1.824a145.856 145.856 0 0 1-131.232 68.256h0.352z" fill="#F47521"/></svg>',
      searchTemplate: 'https://www.crunchyroll.com/search?q={query}',
      category: 'streaming',
      subcategory: 'international'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    return this.buildSearchUrl(query);
  }
}