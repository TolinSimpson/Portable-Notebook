# 📝 Portable Notebook

A lightweight, privacy-focused note-taking application that runs entirely in your browser. Fully responsive and optimized for desktop, tablet, and mobile devices. No servers, no tracking, just your notes stored locally in a single HTML file.

## ✨ Features

- 🔒 **Privacy First**: All data stays on your device - no cloud, no tracking
- 📱 **Mobile Optimized**: Responsive design that works perfectly on phones, tablets, and desktops
- 🎯 **Touch-Friendly**: Optimized interface for touch screens with appropriate button sizes
- 📁 **Smart Organization**: Create unlimited tags to organize your notes efficiently
- 🔍 **Instant Search**: Quickly find any note with real-time search across titles, content, and tags
- 🎨 **Rich Text Editor**: Format your notes with headings, lists, links, images, videos, and tables
- 🔐 **Encryption Support**: Password-protect your entire notebook with AES-256 encryption
- 💾 **Portable Format**: Single HTML file that works offline anywhere, on any device
- 📤 **Import/Export**: Backup and restore your notes easily in JSON format
- ⚡ **Auto-save**: Your changes are automatically saved as you type
- 🚀 **Optimized Performance**: Minified version is 20% smaller for faster loading

## 📱 Mobile Features

- **Responsive Layout**: Adapts seamlessly to any screen size
- **Touch Navigation**: Easy-to-use bottom navigation for mobile devices
- **Optimized Controls**: Buttons and inputs sized appropriately for touch interaction
- **Readable Typography**: Font sizes and spacing optimized for mobile reading
- **Efficient Toolbar**: Horizontally scrollable toolbar for text formatting
- **Mobile-First Design**: Built with mobile users in mind

## 🚀 Quick Start

1. Download `notebook.html` (development) or `notebook-min.html` (optimized)
2. Open the file in any modern web browser on desktop or mobile
3. Start taking notes immediately!

**Works on all devices:**
- 🖥️ Desktop computers
- 💻 Laptops
- 📱 Smartphones
- 📲 Tablets

## 🛠️ Development

### Prerequisites

- Node.js (for development and minification)
- A modern web browser

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/TolinSimpson/Portable-Notebook.git
   cd Portable-Notebook
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Minification Process

The project includes an automated minification process to optimize the notebook for production use. The minification script:

- Compresses JavaScript code
- Minifies CSS styles
- Optimizes HTML structure
- Removes comments and whitespace
- Preserves all functionality

To create a minified version:

```bash
npm run minify
```

This generates `notebook-min.html` with:
- **20.3% smaller file size** (from 42KB to 33.5KB)
- **Faster loading times** on all devices
- **Better mobile performance**
- **All features preserved**

### Development Workflow

1. Make changes to `notebook.html`
2. Test your changes across different screen sizes
3. Run `npm run minify` to create an optimized version
4. Test the minified version on mobile and desktop

## 📦 File Structure

- `notebook.html` - Development version (readable, commented, 42KB)
- `notebook-min.html` - Production version (minified, optimized, 33.5KB)
- `minify-notebook.js` - Minification script
- `package.json` - Project configuration and dependencies

## 🎯 Browser Support

**Desktop:**
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

**Mobile:**
- iOS Safari 12+
- Chrome Mobile 70+
- Samsung Internet 10+
- Firefox Mobile 65+

## 🔒 Security

- All data is stored locally in your browser
- Optional AES-256 encryption for sensitive notes
- No data is sent to external servers
- Works completely offline
- Regular security updates

## 📱 Mobile Usage Tips

- Use the bottom navigation to switch between Editor and Notes views
- Swipe horizontally on the toolbar to access all formatting options
- Tap and hold on notes for additional options
- Use pinch-to-zoom for better readability if needed
- All features work identically across desktop and mobile

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:

- Test changes on both desktop and mobile devices
- Ensure responsive design principles are maintained
- Verify minification process works correctly

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Updates

You can manually check for updates using the settings menu (⚙️).

## 📞 Support

For support, please open an issue on GitHub or contact the maintainer.

---

Made with ❤️ for privacy-conscious note-takers everywhere 📱💻 