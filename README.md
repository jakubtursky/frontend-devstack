# Frontend-devstack
Complex Front-end devstack for creating HTML, CSS, JS templates.

## Project structure
   
    .
    ├── assets                   # Assets - Images, webfonts, iconfonts, favicon
    │   ├── favicon              # Favicon of website
    │   ├── iconfonts            # icons generate from icomoon (old, actually used directly svg in html)
    │   ├── images               # Images used in website
    │   └── webfonts             # Folder for webfonts of website
    ├── dev                      # Development - PUG, SASS, JS
    │   ├── js                   # JS files
    │   ├── sass                 # Sass files
    │   └── template             # Pug files
    ├── public                   # Compiled files - production
    │   ├── css                  # Compiled minify css files
    │   ├── images               # Compiled, compress images
    │   ├── js                   # Compiled, contacted, minified JS files
    │   └── index.html           # Compiled html
    ├── LICENSE
    ├── package.json             # Initialization of node_modules
    ├── package-lock.json
    ├── gulpfile.js              # Tasks for automatization
    └── README.md
