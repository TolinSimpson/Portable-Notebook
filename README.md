# 📝 Portable Notebook

A lightweight, portable notebook application that runs entirely in your browser. No installation required - just download and open the HTML file!

## ✨ Features

- 📝 Rich text editing with formatting options
- 🔒 Optional encryption for your notes
- 📂 Category-based organization
- 💾 Auto-save functionality
- 🔄 Import/Export capabilities
- 🌐 Update checking
- 📱 Responsive design
- 🚀 Fast loading and performance

## 🚀 Getting Started

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

Made with ❤️ by Tolin Simpson 