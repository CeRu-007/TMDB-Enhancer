class TMDBEnhancer {
  constructor() {
    this.adapter = null;
    this.linkProviders = [];
    this.init();
  }

  async init() {
    this.adapter = new TMDBAdapter();

    if (!this.adapter.detect()) {
      return;
    }

    this.registerLinkProviders();
    this.enhancePage();
  }

  registerLinkProviders() {
    const providers = [
      WikipediaProvider, BaiduProvider, WeiboProvider, DoubanProvider,
      IMDbProvider, RottenTomatoesProvider, MetacriticProvider, LetterboxdProvider,
      GoogleMoviesProvider, BangumiProvider, TencentVideoProvider, YoukuProvider,
      IQIYIProvider, MangoTVProvider, SohuVideoProvider, TudouProvider,
      NetflixProvider, CrunchyrollProvider, BilibiliProvider,
      JustWatchProvider, MyAnimeListProvider, DisneyPlusProvider, AppleTVProvider,
      HuluProvider, TwitterProvider, MoegirlProvider, BaiduSearchProvider,
      GoogleSearchProvider, BingSearchProvider
    ];
    this.linkProviders = providers.map(P => new P());
  }

  async enhancePage() {
    const title = this.adapter.extractTitle();
    const originalTitle = this.adapter.extractOriginalTitle();
    const year = this.adapter.extractYear();
    await this.injectExternalLinks(title, originalTitle, year);
  }

  async injectExternalLinks(title, originalTitle, year) {
    const searchTitle = originalTitle || title;
    const settings = await this.getSettings();
    const enabledProviders = this.getEnabledProviders(settings.enabledLinks);
    const links = enabledProviders.map(p => this.buildLink(p, searchTitle, year)).filter(l => l.url);

    if (links.length > 0) {
      this.adapter.injectLinks(links);
    }
  }

  async getSettings() {
    return new Promise(resolve => {
      chrome.storage.sync.get({ enabledLinks: ['wikipedia', 'imdb', 'rottentomatoes', 'metacritic', 'letterboxd'] }, resolve);
    });
  }

  getEnabledProviders(enabledLinks) {
    return this.linkProviders.filter(p => enabledLinks.includes(p.name));
  }

  buildLink(provider, title, year) {
    return {
      name: provider.name,
      label: provider.label,
      url: provider.buildUrl(title, year),
      iconHtml: provider.getIconHtml()
    };
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new TMDBEnhancer());
  } else {
    new TMDBEnhancer();
  }
}