# Frontend-devstack
Complex Front-end devstack for creating HTML, CSS, JS templates.


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
    │   │   └── app.scss            # App.scss for include all scss files
    │   ├── template                # Pug files
    │   │   ├── components          # All templates components
    |   |   |   ├── ...
    │   │   ├── layout              # Template for header & footer
    │   │   ├── main                # Template for head, scripts, template mixins
    │   │   ├── social              # Social templates - facebook, disqus, twitter
    │   └── └── index.pug           # Specific page
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


## Automatization with gulp tasks

### styles
    - compile sass, init sourcemaps, use autoprefixer, minify css, remove unused css

### scripts
    - concat script files, init sourcemaps, use babel compiler

### pug
    - compile pug files, pretty html files

### images
    - copy files, compress size, create responsive sizes

### webfonts, iconfonts, favicon
    - copy files to production folder

### validate
    - validate html & JS files

### download & concat resources
    - download & concat plugins
