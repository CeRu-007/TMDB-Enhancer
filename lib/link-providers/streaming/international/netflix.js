class NetflixProvider extends LinkProvider {
  constructor() {
    super({
      name: 'netflix',
      label: chrome.i18n.getMessage('optionsProviderNetflix'),
      iconUrl: 'https://www.netflix.com/favicon.ico',
      searchTemplate: 'https://www.netflix.com/search?q={query}',
      category: 'streaming',
      subcategory: 'international'
    });
  }

  buildUrl(title, year = '') {
    const query = year ? `${title} ${year}` : title;
    const lang = navigator.language || 'en';
    let domain = 'www.netflix.com';
    
    if (lang.startsWith('zh')) {
      domain = 'www.netflix.com';
    } else if (lang.startsWith('ja')) {
      domain = 'www.netflix.com';
    } else if (lang.startsWith('ko')) {
      domain = 'www.netflix.com';
    }
    
    const template = this.searchTemplate.replace('www.netflix.com', domain);
    return template.replace('{query}', encodeURIComponent(query));
  }
}