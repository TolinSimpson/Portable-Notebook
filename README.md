# 📝 Notebook - Private Note-Taking Application

A powerful, privacy-focused note-taking application that works completely offline. Built as a single HTML file with advanced features including encryption, rich text editing, and full responsiveness.

## ✨ Features

### 🔒 Privacy & Security
- **Complete Offline Operation** - No data ever leaves your device
- **AES-256 Encryption** - Password-protect your entire notebook
- **Privacy-Enhanced YouTube Embeds** - Uses `youtube-nocookie.com` for better privacy
- **No External Dependencies** - Everything works without internet connection

### 📝 Rich Text Editing
- **Advanced Toolbar** - Bold, italic, underline, strikethrough formatting
- **Headings** - H1, H2, H3 with automatic styling
- **Lists** - Bulleted and numbered lists
- **Code Blocks** - Syntax-highlighted code snippets
- **Blockquotes** - Styled quotations and citations
- **Tables** - Create and edit tables (up to 20×10 for performance)
- **Links & Images** - Insert hyperlinks and images
- **YouTube Videos** - Embed videos with privacy protection
- **Text Alignment** - Left, center, right alignment options

### 🗂️ Organization
- **Categories** - Organize notes into custom categories
- **Smart Search** - Search across note titles and content
- **Auto-Save** - Changes save automatically as you type
- **Note Management** - Create, edit, delete, and move notes between categories

### 📱 Responsive Design
- **Mobile-First** - Optimized for phones, tablets, and desktops
- **Touch-Friendly** - Designed for touch interfaces
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - ARIA labels and semantic HTML

### ♿ Accessibility
- **WCAG Compliant** - Follows web accessibility guidelines
- **High Contrast Support** - Adapts to system preferences
- **Reduced Motion** - Respects user motion preferences
- **Skip Links** - Quick navigation for keyboard users
- **Focus Management** - Clear visual focus indicators

## 🚀 Getting Started

### Installation
1. Download the `notebook.html` file
2. Open it in any modern web browser
3. Start taking notes immediately!

### First Use
1. **Create Your First Note** - Click "New Note" to get started
2. **Add Categories** - Organize your notes by creating custom categories
3. **Enable Encryption** - Check "Encrypt Notebook" for password protection
4. **Save Your Work** - Click "Save File" to download your updated notebook

## 💡 Usage Guide

### Creating & Editing Notes
- Click **"New Note"** to create a new note
- Use the **title field** at the top to name your note
- Use the **rich text toolbar** for formatting
- Notes **auto-save** as you type
- Change **categories** using the dropdown in the editor header

### Categories
- Add new categories using the input field in the sidebar
- Click on categories to filter notes
- Delete categories (notes move to "General")
- Notes are automatically counted per category

### Search
- Use the **search bar** in the header to find notes
- Searches both **titles and content**
- Results update in real-time as you type
- HTML tags are ignored in search results

### Encryption
- Toggle **"Encrypt Notebook"** in the header
- Set a **strong password** (minimum 4 characters)
- **All notes** in the notebook are encrypted together
- **Remember your password** - it cannot be recovered!

### Saving & Backup
- Click **"Save File"** to download your updated notebook
- **Replace the original file** to preserve your changes
- **Refresh the page** after replacing the file
- Create **regular backups** by saving to different locations

## 🔧 Technical Details

### File Structure
- **Single HTML File** - Everything contained in one file
- **Embedded Data** - Notes stored as JavaScript objects within the file
- **No External Resources** - Works completely offline

### Data Storage
```javascript
// Notes are stored in this format:
NOTES_DATA = {
  "Category Name": {
    "timestamp_id": {
      "title": "Note Title",
      "content": "HTML content",
      "lastModified": "ISO date string",
      "encrypted": boolean
    }
  }
}
```

### Encryption Method
- **Algorithm**: AES-256-GCM
- **Key Derivation**: PBKDF2 with 100,000 iterations
- **Salt & IV**: Randomly generated for each encryption
- **Storage**: Encrypted content is base64 encoded

### Browser Compatibility
- **Chrome/Edge**: 88+
- **Firefox**: 84+
- **Safari**: 14+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+

### Performance
- **Table Limits**: Maximum 20 rows × 10 columns
- **Auto-save Delay**: 1 second after typing stops
- **Memory Efficient**: Uses CSS Grid and Flexbox for layout
- **Lazy Loading**: YouTube embeds load only when needed

## 🎨 Customization

### Responsive Breakpoints
- **Desktop**: 1024px+ (3-column layout)
- **Tablet**: 768px-1024px (3-column layout, smaller sidebars)
- **Mobile**: Below 768px (single-column layout)
- **Small Mobile**: Below 480px (compact interface)

### CSS Custom Properties
The application uses consistent design tokens:
- **Primary Color**: `#3b82f6` (Blue)
- **Success Color**: `#10b981` (Green)
- **Warning Color**: `#f59e0b` (Amber)
- **Danger Color**: `#ef4444` (Red)

## 🔒 Security Notes

### Best Practices
1. **Use Strong Passwords** - Combine letters, numbers, and symbols
2. **Regular Backups** - Save copies in multiple locations
3. **Secure Storage** - Keep backup files in encrypted folders
4. **Browser Security** - Use updated browsers with security patches

### Privacy Features
- **No Analytics** - No tracking or data collection
- **No Network Requests** - Completely offline operation
- **Privacy-Enhanced Embeds** - YouTube videos use nocookie domain
- **Local Storage Only** - All data stays on your device

## 🆘 Troubleshooting

### Common Issues

**Q: My notes disappeared after refreshing**  
A: Download and save the file after making changes, then replace the original file.

**Q: I forgot my encryption password**  
A: Unfortunately, passwords cannot be recovered. Keep secure backups of unencrypted notebooks.

**Q: YouTube videos won't load**  
A: Ensure you have an internet connection for embeds, or check if the video ID is valid.

**Q: Mobile interface is too small**  
A: The app is responsive - try rotating your device or zooming in your browser.

**Q: Search not working properly**  
A: Search looks through note titles and text content (HTML tags are ignored automatically).

### Performance Tips
- **Limit Large Tables** - Keep tables under 20×10 for best performance
- **Regular Cleanup** - Delete unused notes and categories
- **Browser Cache** - Clear browser cache if the app seems slow
- **File Size** - Very large notebooks (1000+ notes) may load slowly

## 📄 License

This is a standalone application distributed as a single HTML file. You are free to:
- ✅ Use for personal or commercial purposes
- ✅ Modify the code for your needs
- ✅ Share with others
- ✅ Create derivative works

## 🤝 Contributing

Since this is a single-file application, contributions can be made by:
1. Modifying the HTML file directly
2. Testing thoroughly across different browsers
3. Ensuring all features work offline
4. Maintaining the single-file architecture

## 📞 Support

For issues or questions:
- Check the troubleshooting section above
- Ensure you're using a supported browser
- Test in a fresh browser profile to rule out extensions
- Verify the file isn't corrupted by re-downloading

---

**Version**: Production Release  
**File Size**: ~50KB (uncompressed)  
**Dependencies**: None (pure HTML/CSS/JavaScript)  
**Offline Capable**: ✅ Yes  
**Mobile Ready**: ✅ Yes  
**Encryption**: ✅ AES-256 