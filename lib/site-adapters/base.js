class SiteAdapter {
  constructor() {
    this.name = 'Base';
    this.urlPattern = null;
    this.extractors = {};
    this.linkProviders = [];
  }

  detect() {
    return this.urlPattern ? this.urlPattern.test(window.location.href) : false;
  }

  extractData() {
    return {};
  }

  getInjectionPoint() {
    return null;
  }

  getLinkProviders() {
    return this.linkProviders;
  }

  addLinkProvider(provider) {
    this.linkProviders.push(provider);
  }

  extractTitle() {
    return this.extractors.title ? this.extractors.title() : '';
  }

  extractOriginalTitle() {
    return this.extractors.originalTitle ? this.extractors.originalTitle() : '';
  }

  extractType() {
    return this.extractors.type ? this.extractors.type() : '';
  }

  extractId() {
    return this.extractors.id ? this.extractors.id() : '';
  }

  extractYear() {
    return this.extractors.year ? this.extractors.year() : '';
  }

  injectLinks(links) {
    const injectionPoint = this.getInjectionPoint();
    if (!injectionPoint) {
      console.warn('No injection point found');
      return false;
    }

    const container = this.createLinksContainer(links);
    if (container) {
      DOMHelper.insertAfter(container, injectionPoint);
      return true;
    }
    return false;
  }

  createLinksContainer(links) {
    return null;
  }
}