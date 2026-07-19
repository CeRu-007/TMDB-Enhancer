# TMDB Enhancer

A browser extension that enhances TMDB (The Movie Database) website functionality.

## ✨ Features

### 1. Quick External Links Access
Automatically adds quick links on movie and TV show pages for easy access to other platforms:

**Encyclopedia Sites:**
- **Wikipedia** - View Wikipedia entries
- **Baidu Baike** - Access Chinese encyclopedia

**Rating Sites:**
- **IMDb** - International Movie Database
- **Rotten Tomatoes** - Rotten Tomatoes reviews
- **Metacritic** - Metacritic ratings
- **Letterboxd** - Letterboxd review community
- **Douban** - Get Chinese reviews

**Streaming Platforms:**
- **Netflix** - Netflix
- **Crunchyroll** - Crunchyroll anime platform
- **Tencent Video** - Tencent Video
- **Youku** - Youku
- **iQIYI** - iQIYI
- **Mango TV** - Mango TV
- **Sohu Video** - Sohu Video
- **Tudou** - Tudou Video

**Others:**
- **Weibo** - Check social media discussions
- **Google Movies** - Google movie information
- **Bangumi** - Bangumi anime database
- **TVDB** - TV show database

### 2. Multi-language Support
Supports multiple language interfaces, automatically adapts to TMDB language settings.

### 3. Custom Settings
Customize features through settings page:
- Choose which external links to display

## 🏗️ Project Structure

```
tmdb-enhancer/
├── manifest.json                 # Extension configuration
├── _locales/                     # Multi-language support (17 languages)
│   ├── en/messages.json
│   ├── zh_CN/messages.json
│   ├── zh_TW/messages.json
│   ├── zh_HK/messages.json
│   ├── de/messages.json
│   ├── es/messages.json
│   ├── fr/messages.json
│   ├── it/messages.json
│   ├── ja/messages.json
│   ├── ko/messages.json
│   ├── pt-BR/messages.json
│   ├── ru/messages.json
│   ├── id/messages.json
│   ├── ms/messages.json
│   ├── th/messages.json
│   ├── vi/messages.json
│   └── fil/messages.json
├── background/                   # Background service
│   └── service-worker.js
├── content/                      # Content scripts
│   ├── tmdb.js                   # TMDB specific logic
│   ├── styles.css                # Styles
│   └── utils/                    # Utility functions
│       ├── dom-helper.js         # DOM operation helpers
│       └── fetch-helper.js       # API request helpers
├── lib/                          # Core library
│   ├── site-adapters/            # Site adapters (modular)
│   │   ├── base.js               # Adapter base class
│   │   └── tmdb.js               # TMDB adapter
│   └── link-providers/           # Link providers (18 providers)
│       ├── base.js               # Provider base class
│       ├── wikipedia.js
│       ├── baidu.js
│       ├── weibo.js
│       ├── douban.js
│       ├── imdb.js
│       ├── rottentomatoes.js
│       ├── metacritic.js
│       ├── letterboxd.js
│       ├── googlemovies.js
│       ├── bangumi.js
│       ├── tencentvideo.js
│       ├── youku.js
│       ├── iqiyi.js
│       ├── mangotv.js
│       ├── sohuvideo.js
│       ├── tudou.js
│       ├── netflix.js
│       └── crunchyroll.js
├── popup/                        # Popup page
│   ├── popup.html
│   └── popup.js
├── options/                      # Settings page
│   ├── options.html
│   └── options.js
└── icons/                        # Extension icons
```

## 🔧 Technical Implementation

### Manifest V3
Uses the latest Chrome extension standard, ensuring security and performance.

### Modular Design
- **Site Adapter Pattern**: Site adapter pattern for easy future support of other websites
- **Link Provider Pattern**: Link provider pattern for easy addition of new external links

### DOM Manipulation
Uses MutationObserver to dynamically monitor page changes, ensuring correct content injection.

## 🎨 UI Design

All enhancement features follow TMDB design specifications:
- Uses TMDB blue theme (#032541)
- Maintains consistent rounded corners and spacing with the original website
- Responsive design, supports mobile
- Smooth transition animations

## 🌐 Supported Websites

Currently supports:
- ✅ TMDB movie pages (`themoviedb.org/movie/*`)
- ✅ TMDB TV show pages (`themoviedb.org/tv/*`)

Can be easily extended to support other movie database websites in the future.

## 🔄 Changelog

### v1.1.0 (2026-01-13)
- ✨ Added 14 new external link providers
- ✨ Multi-language support extended to 17 languages
- ✨ Added Traditional Chinese (Hong Kong), Indonesian, Malay, Thai, Vietnamese, Filipino translations

### v1.0.0 (2025-01-12)
- ✨ Initial release
- ✅ Added external links feature (Wikipedia, Baidu Baike, Weibo, Douban)
- ✅ Multi-language support (Chinese, English)
- ✅ Custom settings page

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📝 License

MIT License

## 📧 Contact

For questions or suggestions, please submit an Issue.

## 🙏 Acknowledgments

- TMDB (The Movie Database) for providing the API
- Chrome extension development community

---

**Enjoy a better TMDB experience!** 🎬📺