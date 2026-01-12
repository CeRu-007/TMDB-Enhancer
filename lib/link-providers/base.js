class LinkProvider {
  constructor(config) {
    this.name = config.name;
    this.label = config.label;
    this.iconUrl = config.iconUrl;
    this.iconHtml = config.iconHtml;
    this.urlTemplate = config.urlTemplate;
    this.searchTemplate = config.searchTemplate;
    this.category = config.category || 'other';
    this.subcategory = config.subcategory || '';
  }

  buildUrl(title, year = '') {
    if (this.urlTemplate) {
      return this.urlTemplate.replace('{title}', encodeURIComponent(title)).replace('{year}', year);
    }
    return '';
  }

  buildSearchUrl(query) {
    if (this.searchTemplate) {
      return this.searchTemplate.replace('{query}', encodeURIComponent(query));
    }
    return this.buildUrl(query);
  }

  getIconHtml() {
    if (this.iconHtml) {
      return this.iconHtml;
    }
    if (this.iconUrl) {
      return `<img src="${this.iconUrl}" alt="${this.name}" width="16" height="16" style="vertical-align: middle;">`;
    }
    return '';
  }
}