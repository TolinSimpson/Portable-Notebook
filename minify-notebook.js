const fs = require('fs');
const path = require('path');
const { minify: minifyHTML } = require('html-minifier-terser');
const UglifyJS = require('uglify-js');
const CleanCSS = require('clean-css');

async function minifyNotebook() {
    try {
        // Read the original file
        const inputFile = path.join(__dirname, 'notebook.html');
        const outputFile = path.join(__dirname, 'notebook-min.html');
        
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
        const jsRegex = /<script>([\s\S]*?)<\/script>/gi;
        const jsMatches = content.match(jsRegex);
        
        if (jsMatches) {
            const jsContent = jsMatches[0].replace(/<\/?script>/gi, '');
            const minifiedJS = UglifyJS.minify(jsContent, {
                compress: {
                    drop_console: false, // Keep console.error for debugging
                    drop_debugger: true,
                    pure_funcs: ['console.log'],
                    passes: 2
                },
                mangle: {
                    reserved: ['NOTES_DATA', 'CATEGORIES_DATA'] // Keep these for data integrity
                },
                output: {
                    comments: false
                }
            });
            
            if (minifiedJS.error) {
                console.error('JavaScript minification error:', minifiedJS.error);
                throw minifiedJS.error;
            }
            
            content = content.replace(jsRegex, `<script>${minifiedJS.code}</script>`);
        }
        
        // Minify HTML
        const minifiedHTML = await minifyHTML(content, {
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeTagWhitespace: true,
            useShortDoctype: true,
            minifyCSS: false, // Already done above
            minifyJS: false,  // Already done above
            caseSensitive: false,
            keepClosingSlash: false,
            removeAttributeQuotes: true,
            removeEmptyElements: false,
            sortAttributes: true,
            sortClassName: true
        });
        
        // Write minified file
        fs.writeFileSync(outputFile, minifiedHTML);
        
        // Calculate size reduction
        const originalSize = fs.statSync(inputFile).size;
        const minifiedSize = fs.statSync(outputFile).size;
        const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ Minification complete!`);
        console.log(`📄 Original size: ${(originalSize / 1024).toFixed(1)} KB`);
        console.log(`📄 Minified size: ${(minifiedSize / 1024).toFixed(1)} KB`);
        console.log(`📉 Size reduction: ${reduction}%`);
        console.log(`💾 Output: ${outputFile}`);
        
    } catch (error) {
        console.error('❌ Minification failed:', error);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    minifyNotebook();
}

module.exports = minifyNotebook; 