"use strict";

// PATHs
const public_path = "./public/";
const assets_path = "assets/";
const dev_path = "dev/";

// GENERAL
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const gulpif = require("gulp-if");
const sourcemaps = require("gulp-sourcemaps");
const lazypipe = require("lazypipe");
const plumber = require("gulp-plumber");

// SASS
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");

// HTML
const pug = require("gulp-pug");
const pugInheritance = require("gulp-pug-inheritance");
const changed = require("gulp-changed");
const cached = require("gulp-cached");
const filter = require("gulp-filter");

// OTHER
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");
const del = require("del");
const path = require("path");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const log = require("fancy-log");

// -------------------------------------
//   Task: Jade
// -------------------------------------
function jade() {
  return gulp
    .src(dev_path + "template/**/**/*.pug")
    .pipe(plumber(plumber_options))
    .pipe(changed(public_path, { extension: ".html" }))
    .pipe(gulpif(true, cached("jade")))
    .pipe(
      pugInheritance({
        basedir: "" + dev_path + "template/",
        extension: ".pug",
        skip: "node_modules",
      })
    )
    .pipe(
      filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      })
    )
    .pipe(
      pug({
        pretty: "\t",
      })
    )
    .pipe(gulp.dest(public_path))
    .pipe(connect.reload());
  //.pipe(browserSync.reload({stream:true}))
  // .pipe(notify('Jade task complete!'))
}

// -------------------------------------
//   Task: Scripts
// -------------------------------------
const jsTasksConcatProd = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(concat, "app.js", { newLine: "\n\n" })
  .pipe(uglify)
  .pipe(sourcemaps.write, "./");

function scriptsProduction() {
  return gulp
    .src(["dev/js/**"])
    .pipe(plumber(plumber_options))
    .pipe(jsTasksConcatProd())
    .pipe(gulp.dest("public/js"))
    .pipe(connect.reload());
}

// -------------------------------------
//   Task: Scripts
// -------------------------------------
const jsTasksConcatDev = lazypipe()
  .pipe(sourcemaps.init)
  .pipe(concat, "app.js", { newLine: "\n\n" })
  .pipe(sourcemaps.write, "./");

function scriptsDevelopment() {
  return gulp
    .src(["dev/js/**"])
    .pipe(plumber(plumber_options))
    .pipe(jsTasksConcatDev())
    .pipe(gulp.dest("public/js"))
    .pipe(connect.reload());
}

// -------------------------------------
//   Task: Styles Production
// -------------------------------------

const postcssPluginsProd = [
  autoprefixer({
    overrideBrowserslist: ["last 10 versions"],
  }),
  //mqpacker()
];

function stylesProduction() {
  return (
    gulp
      .src(dev_path + "sass/app.scss")
      .pipe(plumber(plumber_options))
      // .pipe(plumber({
      //     errorHandler: notify.onError({
      //         title: "Style problem",
      //         message:"Error: <%= error.message %>"
      //     })p
      // }))
      .pipe(sourcemaps.init())
      .pipe(
        sass({ outputStyle: "expanded", indentType: "tab", indentWidth: 1 })
      )
      //.pipe(sourcemaps.write({includeContent: false}))
      //.pipe(sourcemaps.init({loadMaps: true}))
      .pipe(postcss(postcssPluginsProd))

      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(public_path + "css/"))
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(gulp.dest(public_path + "css/"))
      .pipe(connect.reload())
  );
  //.pipe(browserSync.reload({
  //  stream: true
  //}))
  // .pipe(notify('Styles task complete!'));
}

// -------------------------------------
//   Task: Styles Development
// -------------------------------------

const postcssPluginsDev = [
  autoprefixer({
    overrideBrowserslist: ["last 10 versions"],
  }),
];

function stylesDevelopment() {
  return (
    gulp
      .src(dev_path + "sass/app.scss")
      .pipe(plumber(plumber_options))
      // .pipe(plumber({
      //     errorHandler: notify.onError({
      //         title: "Style problem",
      //         message:"Error: <%= error.message %>"
      //     })p
      // }))
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(postcss(postcssPluginsDev))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(public_path + "css/"))
      .pipe(connect.reload())
  );
}

// -------------------------------------
//   Task: Assets - iconfonts
// -------------------------------------
function iconfonts() {
  return gulp
    .src(assets_path + "iconfonts/**/*")
    .pipe(gulp.dest(public_path + "fonts/iconfonts"));
}

// -------------------------------------
//   Task: Assets - webfonts
// -------------------------------------
function webfonts() {
  return gulp
    .src(assets_path + "webfonts/**/*")
    .pipe(gulp.dest(public_path + "fonts/webfonts"));
}

// -------------------------------------
//   Task: Assets - favicon
// -------------------------------------
function favicon() {
  return gulp
    .src(assets_path + "favicon/**/*")
    .pipe(gulp.dest(public_path + "favicon"));
}

// -------------------------------------
//   Task: Assets - Images
// -------------------------------------
function images() {
  return gulp
    .src(assets_path + "images/**/*.*")
    .pipe(gulp.dest(public_path + "images"));
}

// -------------------------------------
//   Task: Browser sync
// -------------------------------------

function browserSync() {
  // browserSync.init({
  //   server: {
  //       baseDir: 'public',
  //       routes: {
  //           "/bower_components": "bower_components"
  //       }
  //   },
  // })
  //browserSync({
  //	proxy: 'http://localhost/HTML_FW2/public',
  //	port: 8080,
  //});
  connect.server({
    root: "public",
    livereload: true,
    port: 4000,
  });
}

// -------------------------------------
//   Task: Clean public
// -------------------------------------
function clean() {
  return del(public_path);
}

// -------------------------------------
//   Error catch
// -------------------------------------
const plumber_options = {
  errorHandler: function (err) {
    console.log(err.toString());
    this.emit("end");
  },
};

// -------------------------------------
//   Main tasks
// -------------------------------------

// Watch files
function watchFiles() {
  //gulp.watch(dev_path + 'sass/**/*.scss', gulp.series(styles));
  gulp.watch(dev_path + "sass/**/*.scss", stylesDevelopment);
  gulp.watch(dev_path + "js/**/*.js", gulp.series(scriptsDevelopment));
  gulp.watch(dev_path + "template/**/*.pug", jade);
  gulp.watch(assets_path + "images/**/*.*", images, browserSync.reload);
  gulp.watch(assets_path + "iconfonts/**/*.*", iconfonts, browserSync.reload);
  gulp.watch(assets_path + "webfonts/**/*.*", webfonts, browserSync.reload);
}

// define complex tasks
const production = gulp.series(
  clean,
  stylesProduction,
  jade,
  scriptsProduction,
  images,
  iconfonts,
  webfonts,
  favicon
);
const build = gulp.series(
  clean,
  gulp.parallel(
    stylesDevelopment,
    jade,
    scriptsDevelopment,
    images,
    iconfonts,
    webfonts
  )
);
const watch = gulp.parallel(watchFiles, browserSync);

// define simple tasks
// images
exports.images = images;

// fonts
exports.webfonts = webfonts;
exports.iconfonts = iconfonts;

// scripts
exports.scriptsDevelopment = scriptsDevelopment;
exports.scriptsProduction = scriptsProduction;

// styles
exports.stylesDevelopment = stylesDevelopment;
exports.stylesProduction = stylesProduction;

// jade
exports.jade = jade;

// complex
exports.production = production;
exports.build = build;
exports.watch = watch;
exports.default = watch;
