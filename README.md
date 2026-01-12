# TMDB Enhancer

一个增强 TMDB (The Movie Database) 网站功能的浏览器扩展。

**语言**: [English](README_EN.md) | 简体中文

## ✨ 功能特性

### 1. 外部链接快速访问
在电影和电视剧页面自动添加快捷链接，方便访问其他平台：

**百科网站：**
- **Wikipedia** - 查看维基百科条目
- **百度百科** - 访问中文百科全书

**评分网站：**
- **IMDb** - 国际电影数据库
- **Rotten Tomatoes** - 烂番茄影评
- **Metacritic** - Metacritic 评分
- **Letterboxd** - Letterboxd 影评社区
- **豆瓣** - 获取中文影评

**流媒体平台：**
- **Netflix** - Netflix
- **Crunchyroll** - Crunchyroll 动画平台
- **腾讯视频** - 腾讯视频
- **优酷** - 优酷
- **爱奇艺** - 爱奇艺
- **芒果TV** - 芒果TV
- **搜狐视频** - 搜狐视频
- **土豆视频** - 土豆视频

**其他：**
- **微博** - 查看社交媒体讨论
- **Google 电影** - Google 电影信息
- **番组计划** - Bangumi 动漫数据库

### 2. 多语言支持
支持多语言界面，自动适配 TMDB 的语言设置。

### 3. 自定义设置
通过设置页面自定义功能：
- 选择显示哪些外部链接

## 🚀 安装方法

### 开发模式安装

1. 克隆或下载此项目到本地
2. 打开 Chrome/Edge 浏览器，访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择 `tmdb-enhancer` 文件夹
6. 扩展安装完成！

## 📖 使用说明

### 自动增强功能

1. 访问任意 TMDB 电影或电视剧页面
2. 扩展会自动在标题下方显示外部链接

### 设置页面

1. 点击浏览器工具栏中的扩展图标
2. 点击"Settings"按钮
3. 自定义你想要的功能

## 🏗️ 项目结构

```
tmdb-enhancer/
├── manifest.json                 # 扩展配置文件
├── _locales/                     # 多语言支持
│   ├── en/messages.json
│   └── zh_CN/messages.json
├── background/                   # 后台服务
│   └── service-worker.js
├── content/                      # 内容脚本
│   ├── tmdb.js                   # TMDB 专用逻辑
│   ├── styles.css                # 样式文件
│   └── utils/                    # 工具函数
│       ├── dom-helper.js         # DOM 操作辅助
│       └── fetch-helper.js       # API 请求辅助
├── lib/                          # 核心库
│   ├── site-adapters/            # 站点适配器（模块化）
│   │   ├── base.js               # 适配器基类
│   │   └── tmdb.js               # TMDB 适配器
│   └── link-providers/           # 链接提供商
│       ├── base.js               # 提供商基类
│       ├── wikipedia.js
│       ├── baidu.js
│       ├── weibo.js
│       └── douban.js
├── popup/                        # 弹出页面
│   ├── popup.html
│   └── popup.js
├── options/                      # 设置页面
│   ├── options.html
│   └── options.js
└── icons/                        # 扩展图标
```

## 🔧 技术实现

### Manifest V3
使用最新的 Chrome 扩展标准，确保安全性和性能。

### 模块化设计
- **Site Adapter Pattern**: 站点适配器模式，方便未来支持其他网站
- **Link Provider Pattern**: 链接提供商模式，易于添加新的外部链接

### DOM 操作
使用 MutationObserver 动态监听页面变化，确保内容正确注入。

## 🎨 UI 设计

所有增强功能都遵循 TMDB 的设计规范：
- 使用 TMDB 的蓝色主题 (#032541)
- 保持与原网站一致的圆角和间距
- 响应式设计，支持移动端
- 平滑的过渡动画效果

## 🌐 支持的网站

目前支持：
- ✅ TMDB 电影页面 (`themoviedb.org/movie/*`)
- ✅ TMDB 电视剧页面 (`themoviedb.org/tv/*`)

未来可以轻松扩展支持其他电影数据库网站。

## 🔄 更新日志

### v1.0.0 (2025-01-13)
- ✨ 初始版本发布
- ✅ 添加外部链接功能（Wikipedia、百度百科、微博、豆瓣）
- ✅ 多语言支持
- ✅ 自定义设置页面

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📝 许可

MIT License

## 📧 联系方式

如有问题或建议，请提交 Issue。

## 🙏 致谢

- TMDB (The Movie Database) 提供的 API
- Chrome 扩展开发社区

---

**享受更好的 TMDB 体验！** 🎬📺