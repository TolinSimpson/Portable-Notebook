const fs = require('fs');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier-terser');
const UglifyJS = require('uglify-js');
const CleanCSS = require('clean-css');

async function minifyNotebook() {
    const inputFile = 'notebook-dev.html';
    const outputFile = 'notebook.html';
    
    try {
        console.log('🚀 Starting minification process...');
        
        // Read the original file
        let content = fs.readFileSync(inputFile, 'utf8');
        
        // Extract and minify CSS
        const cssRegex = /<style>([\s\S]*?)<\/style>/gi;
        const cssMatches = content.match(cssRegex);
        
        if (cssMatches) {
            const cssContent = cssMatches[0].replace(/<\/?style>/gi, '');
            const minifiedCSS = new CleanCSS({
                level: 2,
                format: false
            }).minify(cssContent);
            
            content = content.replace(cssRegex, `<style>${minifiedCSS.styles}</style>`);
        }
        
        // Extract and minify JavaScript
        const jsRegex = /<script>([\s\S]*?)<\/script>/;
        const jsMatch = content.match(jsRegex);
        
        if (jsMatch) {
            const originalJs = jsMatch[1];
            console.log('📄 Minifying JavaScript...');
            
            // Configure UglifyJS with very conservative settings to preserve functionality
            const uglifyOptions = {
                mangle: {
                    reserved: [
                        // Core function names that must be preserved for HTML event handlers
                        'generateUpdatedHTML', 'encryptText', 'decryptText', 'unlockNotebook',
                        'downloadUpdatedFile', 'saveCurrentNote', 'selectNote', 'createNewNote',
                        'addCategory', 'deleteCategory', 'selectCategory', 'updateCategoryList',
                        'updateNoteList', 'updateCategorySelect', 'changeNoteCategory',
                        'deleteCurrentNote', 'toggleEncryption', 'toggleFormat', 'formatHeading',
                        'execCommand', 'updateToolbarState', 'clearFormatting', 'insertLineBreak',
                        'toggleCodeFormat', 'toggleQuoteFormat', 'createLink', 'insertImage',
                        'insertYouTubeVideo', 'insertTable', 'deriveKey', 'scheduleAutoSave',
                        'setSaveStatus', 'updateWordCount', 'init', 'setupEventListeners',
                        'handleEditorKeydown', 'handleEditorKeypress', 'toggleMenu',
                        'checkForUpdates', 'compareVersions', 'exportNotes', 'importNotes',
                        'showAbout', 'closeAboutModal', 'cleanupFormatting',
                        
                        // Critical data variables that are referenced throughout
                        'notes', 'categories', 'notesToSave', 'NOTES_DATA', 'CATEGORIES_DATA',
                        'currentNote', 'currentCategory', 'searchQuery', 'autoSaveTimer',
                        'pendingChanges', 'encryptionEnabled', 'encryptionKey', 'notebookUnlocked',
                        'REPO_BASE_URL', 'CURRENT_VERSION',
                        
                        // Template variables for replacement functionality
                        'newNotesData', 'htmlContent', 'notesDataRegex'
                    ]
                },
                compress: {
                    // Very conservative compression settings
                    drop_console: false,
                    drop_debugger: true,
                    pure_funcs: [],
                    keep_fargs: true,  // Keep function arguments
                    unsafe_comps: false,
                    unsafe_math: false,
                    unsafe_proto: false,
                    unsafe_regexp: false,
                    unsafe_undefined: false,
                    collapse_vars: false,  // Don't collapse variables
                    reduce_vars: false,    // Don't reduce variables
                    join_vars: false,      // Don't join variable declarations
                    sequences: false,      // Don't use comma operator
                    properties: false,     // Don't optimize property access
                },
                output: {
                    comments: function(node, comment) {
                        // Preserve NOTES DATA comments which are critical for template replacement
                        const commentText = comment.value || '';
                        return commentText.includes('NOTES DATA') || 
                               commentText.includes('END NOTES DATA');
                    },
                    beautify: false
                }
            };
            
            const minifiedJS = UglifyJS.minify(originalJs, uglifyOptions);
            
            if (minifiedJS.error) {
                console.error('❌ UglifyJS error:', minifiedJS.error);
                throw minifiedJS.error;
            }
            
            // Replace the JavaScript in the content
            content = content.replace(jsRegex, `<script>${minifiedJS.code}</script>`);
            console.log('✅ JavaScript minified successfully');
        }
        
        console.log('📄 Minifying HTML...');
        
        // Minify HTML while preserving essential structure
        const htmlMinifyOptions = {
            removeComments: true,
            removeCommentsFromCDATA: true,
            removeCDATASectionsFromCDATA: true,
            collapseWhitespace: true,
            conservativeCollapse: false,
            preserveLineBreaks: false,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeOptionalTags: false,
            removeIgnored: false,
            removeEmptyElements: false,
            lint: false,
            keepClosingSlash: false,
            caseSensitive: false,
            minifyJS: false, // We already minified JS separately
            minifyCSS: {
                level: 2
            }
        };
        
        const minifiedHtml = await minifyHTML(content, htmlMinifyOptions);
        
        // Write the minified content
        fs.writeFileSync(outputFile, minifiedHtml);
        console.log('✅ HTML minified successfully');
        
        // Get file sizes for comparison
        const originalSize = fs.statSync(inputFile).size;
        const minifiedSize = fs.statSync(outputFile).size;
        const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
        
        console.log('\n🎉 Minification completed successfully!');
        console.log(`📦 Original size: ${(originalSize / 1024).toFixed(1)} KB`);
        console.log(`📦 Minified size: ${(minifiedSize / 1024).toFixed(1)} KB`);
        console.log(`📊 Size reduction: ${reduction}%`);
        console.log(`💾 Output: ${outputFile}`);
        
    } catch (error) {
        console.error('❌ Minification failed:', error.message);
        console.error(error.stack);
        process.exit(1);
    }
}

// Run the minification
minifyNotebook();

module.exports = minifyNotebook; 