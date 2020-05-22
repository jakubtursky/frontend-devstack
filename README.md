# Frontend-devstack
Complex Front-end devstack for creating HTML, CSS, JS templates.

## Demo
<a href="https://jakubtursky.sk/devstack/menu.html" target="_blank" title="Devstack" style="font-size: 20px; font-weight: 700;">Live demo</a>

## Frontend-devstack usage
- in console run "npm install" for install node_modules listed in package.json
- in console run "gulp" for default task

## Project structure
   
    .
    ├── assets                      # Assets - Images, webfonts, iconfonts, favicon
    │   ├── favicon                 # Favicon of website
    │   ├── iconfonts               # icons generate from icomoon (old, actually used directly svg in html)
    │   ├── images                  # Images used in website
    │   └── webfonts                # Folder for webfonts of website
    ├── dev                         # Development - PUG, SCSS, JS
    │   ├── js                      # JS files
    │   │   ├── components          # JS components - accordion, tabs, modal, navigation, google-map, select, range-slider,...
    │   │   ├── parts               # JS parts - small js scripts
    │   │   └── core.js             # Core.js for include all scripts files
    │   ├── sass                    # Sass files
    │   │   ├── base                # Default css settings
    │   │   ├── components          # Styles for components
    |   |   |   ├── ...
    │   │   ├── helpers             # Scss Helpers - class, form, animate, typography, print, variables, fonts, debug, mixins,...
    |   |   |   ├── ...
    │   │   ├── layout              # Styles for header, footer & content
    │   │   ├── overrides           # Overides of used libraries
    │   └── └── app.scss            # App.scss for include all scss files
    │   ├── template                # Pug files
    │   │   ├── components          # All templates components
    |   |   |   ├── ...
    │   │   ├── layout              # Template for header & footer
    │   │   ├── main                # Template for head, scripts, template mixins
    │   │   ├── social              # Social templates - facebook, disqus, twitter
    │   └── └── index.html          # Specific page
    ├── public                      # Compiled files - production
    │   ├── css                     # Compiled minify css files
    │   ├── images                  # Compiled, compress images
    │   ├── js                      # Compiled, concated, minified JS files
    │   └── index.html              # Compiled html
    ├── LICENSE
    ├── package.json                # Initialization of node_modules packages
    ├── package-lock.json
    ├── gulpfile.js                 # Tasks for automatization
    └── README.md


## Automatization with gulp
```javascript
// define simple tasks
// images
exports.images = images;
exports.imagesMinifyClassic = imagesMinifyClassic;
exports.imagesMinifyTiny = imagesMinifyTiny;
exports.imagesResize = imagesResize;

// fonts
exports.webfonts = webfonts;
exports.iconfonts = iconfonts;

// scripts
exports.scriptsDevelopment = scriptsDevelopment;
exports.scriptsProduction = scriptsProduction;
exports.babelCompile = babelCompile;

// styles
exports.stylesDevelopment = stylesDevelopment;
exports.stylesProduction = stylesProduction;
exports.unusedStyles = unusedStyles;

// jade
exports.jade = jade;

// download, concat resources
exports.downloadStyles = downloadStyles;
exports.concatStyles = concatStyles;
exports.downloadScripts = downloadScripts;
exports.concatScripts = concatScripts;

// validate
exports.htmlValidate = htmlValidate;
exports.jsValidate = jsValidate;

// define complex tasks
exports.production = production;
exports.download = download;
exports.test = test;
exports.build = build;
exports.watch = watch;
exports.default = watch;
```