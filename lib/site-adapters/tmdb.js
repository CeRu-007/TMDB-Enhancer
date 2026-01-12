class TMDBAdapter extends SiteAdapter {
  constructor() {
    super();
    this.name = 'TMDB';
    this.urlPattern = /themoviedb\.org\/(movie|tv)\/\d+/;
    this.currentType = '';
    this.currentId = '';

    this.extractors = {
      title: () => this.extractTitle(),
      originalTitle: () => this.extractOriginalTitle(),
      type: () => this.extractType(),
      id: () => this.extractId(),
      year: () => this.extractYear()
    };
  }

  detect() {
    const match = window.location.pathname.match(/\/(movie|tv)\/(\d+)/);
    if (match) {
      this.currentType = match[1];
      this.currentId = match[2];
      return true;
    }
    return false;
  }

  extractTitle() {
    const selectors = [
      '.header .title h2',
      'h2',
      '.title h2 a',
      '.header .title .tagline'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element.textContent.trim();
      }
    }
    return document.title.split('—')[0].trim();
  }

  extractOriginalTitle() {
    const selectors = [
      '.header .title .original_title',
      '.header .title .tagline',
      'meta[property="og:title"]'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent || element.content;
        return text ? text.trim() : '';
      }
    }
    return this.extractTitle();
  }

  extractType() {
    return this.currentType;
  }

  extractId() {
    return this.currentId;
  }

  extractYear() {
    const selectors = [
      '.header .info .release',
      '.header .title .release',
      'span[class*="release"]'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        const match = element.textContent.match(/(\d{4})/);
        if (match) {
          return match[1];
        }
      }
    }

    const title = this.extractTitle();
    const match = title.match(/\((\d{4})\)$/);
    return match ? match[1] : '';
  }

  getInjectionPoint() {
    const selectors = [
      '.header .title h2',
      'h2',
      '.header .title'
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) {
        return element;
      }
    }
    return null;
  }

  createLinksContainer(links) {
    if (!links || links.length === 0) return null;

    const container = DOMHelper.createElement('div', 'tmdb-enhancer-links');

    const linksHTML = links.map(link => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer"
         class="tmdb-enhancer-link" data-provider="${link.name}">
        ${link.iconHtml || ''}
        <span>${link.label}</span>
      </a>
    `).join('');

    container.innerHTML = `<div class="tmdb-enhancer-links-inner">${linksHTML}</div>`;
    return container;
  }
}