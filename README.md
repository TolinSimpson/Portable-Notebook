# 📝 Portable Notebook

A lightweight, privacy-focused note-taking application that runs entirely in your browser. No servers, no tracking, just your notes stored locally in a single HTML file.

## ✨ Features

- 🔒 Privacy First: All data stays on your device - no cloud, no tracking
- 📱 Responsive Design: Works perfectly on desktop, tablet, and mobile
- 📁 Smart Organization: Create unlimited categories to organize your notes
- 🔍 Instant Search: Quickly find any note with real-time search
- 🎨 Rich Text Editor: Format your notes with headings, lists, links, images, and more
- 🔐 Encryption Support: Password-protect your entire notebook with AES-256 encryption
- 💾 Portable Format: Single HTML file that works offline anywhere
- 📤 Import/Export: Backup and restore your notes easily
- ⚡ Auto-save: Your changes are automatically saved as you type
- 🎯 Keyboard Shortcuts: Efficient text formatting with familiar shortcuts

## 🚀 Quick Start

1. Download `notebook.html` or `notebook-min.html`
2. Open the file in any modern web browser
3. Start taking notes!

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

This will generate `notebook-min.html` with:
- ~55% smaller file size
- Faster loading times
- All features preserved

### Development Workflow

1. Make changes to `notebook.html`
2. Test your changes in the browser
3. Run `npm run minify` to create an optimized version
4. Test the minified version to ensure everything works

## 📦 File Structure

- `notebook.html` - Development version (readable, commented)
- `notebook-min.html` - Production version (minified)
- `minify-notebook.js` - Minification script
- `package.json` - Project configuration and dependencies

## 🔒 Security

- All data is stored locally in your browser
- Optional encryption for sensitive notes
- No data is sent to external servers
- Regular security updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Updates

The notebook automatically checks for updates when opened. You can also manually check for updates using the menu.

## 📞 Support

For support, please open an issue on GitHub or contact the maintainer.

---

Made with ❤️ for privacy-conscious note-takers 