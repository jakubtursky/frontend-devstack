"use strict";

// PATHs
const public_path = "./public/";
const assets_path = "assets/";
const dev_path = "dev/";


// GENERAL
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const lazypipe = require('lazypipe');
const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');

// SASS
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const postcss = require("gulp-postcss");
//const mqpacker = require('css-mqpacker');
const purgecss = require('gulp-purgecss')

// HTML
const htmlhint = require('gulp-htmlhint');
//const jade = require('gulp-jade');
//const jadeInheritance = require('gulp-jade-inheritance');
const pug = require('gulp-pug');
const pugInheritance = require('gulp-pug-inheritance');
const changed = require('gulp-changed');
const cached = require('gulp-cached');
const filter = require('gulp-filter');

// JS
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

// IMAGES
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const jimp = require("gulp-jimp-resize");
const tinypng = require('gulp-tinypng-compress');

const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGiflossy = require('imagemin-giflossy');



// OTHER
const autoprefixer = require('autoprefixer');
//const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const del = require('del');
const path = require('path');
const downloadResources = require("gulp-download-stream");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const log = require('fancy-log');


// -------------------------------------
//   Task: Jade
// -------------------------------------
function jade(){
  return gulp
	.src(dev_path + 'template/**/**/*.pug')
	.pipe(plumber(plumber_options))
	.pipe(changed(public_path, {extension: '.html'}))
	.pipe(gulpif(true, cached('jade')))
	.pipe(pugInheritance({basedir: '' + dev_path + 'template/' , extension: '.pug', skip:'node_modules' }))
	.pipe(filter(function (file) {
		return !/\/_/.test(file.path) && !/^_/.test(file.relative);
	}))
	.pipe(pug({
		pretty: '\t'
	}))
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
	.pipe(concat, 'app.js', { newLine: '\n\n' })
	.pipe(uglify)
	.pipe(sourcemaps.write, './');

function scriptsProduction(){
	return gulp
		.src(['dev/js/**'])
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(plumber(plumber_options))
		.pipe(jsTasksConcatProd())
		.pipe(gulp.dest('public/js'))
		.pipe(connect.reload());
}

// -------------------------------------
//   Task: Scripts
// -------------------------------------
const jsTasksConcatDev = lazypipe()
	.pipe(sourcemaps.init)
	.pipe(concat, 'app.js', { newLine: '\n\n' })
	.pipe(sourcemaps.write, './');

function scriptsDevelopment(){
	return gulp
		.src(['dev/js/**'])
		//.pipe(babel({
		//	presets: ['@babel/env']
		//}))
		.pipe(plumber(plumber_options))
		.pipe(jsTasksConcatDev())
		.pipe(gulp.dest('public/js'))
		.pipe(connect.reload());
}

// -------------------------------------
//   Task: Babel
// -------------------------------------
function babelCompile(){
	return gulp
		.src(public_path + 'js/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest(public_path + 'js/'))
}

// -------------------------------------
//   Task: Styles Production
// -------------------------------------

const postcssPluginsProd = [
	autoprefixer({
		browsers: ['last 10 versions'],
	}),
	//mqpacker()
];

function stylesProduction(){
	return gulp
		.src(dev_path + 'sass/app.scss')
		.pipe(plumber(plumber_options))
		// .pipe(plumber({
		//     errorHandler: notify.onError({
		//         title: "Style problem", 
		//         message:"Error: <%= error.message %>"
		//     })p
		// }))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded', indentType: 'tab', indentWidth : 1}))
		//.pipe(sourcemaps.write({includeContent: false}))
		//.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(postcss(postcssPluginsProd))



		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(public_path + 'css/'))
		.pipe(minifycss())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(public_path + 'css/'))
		.pipe(connect.reload());
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
		browsers: ['last 10 versions'],
	})
];

function stylesDevelopment(){
	return gulp
		.src(dev_path + 'sass/app.scss')
		.pipe(plumber(plumber_options))
		// .pipe(plumber({
		//     errorHandler: notify.onError({
		//         title: "Style problem", 
		//         message:"Error: <%= error.message %>"
		//     })p
		// }))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(postcss(postcssPluginsDev))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(public_path + 'css/'))
		.pipe(connect.reload());
}


// -------------------------------------
//   Task: Remove unused styles
// -------------------------------------

const classWhitelist = [
	'is-active',
	'is-disabled', 
	'is-opened',
	'is-loading',
	'is-selected',
	'is-project-open',
	'is-last',
	'is-empty',
	'is-collapse',
	'is-animated',
	'is-scrolling-section',
	'end-animation',
	'slick-initialized',
	'slick-slider',
	'slick-active',
	'slick-current',
	'slick-list',
	'slick-track',
	'slick-slide',
	'slick-arrows',
	'slick-prev',
	'slick-next',
	'slick-disabled',
	'slick-dots',
	'has-error'
]

function unusedStyles(){
	return gulp
		.src(public_path + 'css/{app, app.min}.css')
		.pipe(
			purgecss({
				content: [public_path + '*.html'],
				whitelist: classWhitelist,
				whitelistPatterns: [/^js/],
			})
		)
		.pipe(gulp.dest(public_path + 'css/'))
}


// -------------------------------------
//   Task: Assets - iconfonts
// -------------------------------------
function iconfonts(){
	return gulp.src(assets_path + 'iconfonts/**/*')
	.pipe(gulp.dest(public_path + 'fonts/iconfonts'))
}

// -------------------------------------
//   Task: Assets - webfonts
// -------------------------------------
function webfonts(){
	return gulp
		.src(assets_path + 'webfonts/**/*')
		.pipe(gulp.dest(public_path + 'fonts/webfonts'))
}

// -------------------------------------
//   Task: Assets - favicon
// -------------------------------------
function favicon(){
	return gulp
		.src(assets_path + 'favicon/**/*')
		.pipe(gulp.dest(public_path + 'favicon'))
}

// -------------------------------------
//   Task: Assets - Images
// -------------------------------------
function images(){
	return gulp
		.src(assets_path + 'images/**/*.*')
		.pipe(gulp.dest(public_path + 'images'));
}

// -------------------------------------
//   Task: Assets - Images compress
// -------------------------------------
function imagesMinifyClassic(){
	return gulp
		.src(assets_path + 'images/**/*.{png,jpg,jpeg,gif,svg}')
		//.pipe(cached(imagemin({optimizationLevel: 7, progressive: true, interlaced: true})))
		//.pipe(imagemin([
		//	imagemin.gifsicle({interlaced: true}),
		//	imagemin.jpegtran({progressive: true}),
		//	imagemin.optipng({optimizationLevel: 7}),
		//	imagemin.svgo({
		//		plugins: [
		//			{removeViewBox: true},
		//			{cleanupIDs: false}
		//		]
		//	})
		//]))
		.pipe(cached(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                floyd: 1,
                quality: [0.5, 0.5] //lossy settings
            }),
            imageminZopfli({
                more: true
                // iterations: 50 // very slow but more effective
            }),
            //gif
            // imagemin.gifsicle({
            //     interlaced: true,
            //     optimizationLevel: 3
            // }),
            //gif very light lossy, use only one of gifsicle or Giflossy
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: 3, //keep-empty: Preserve empty transparent frames
                lossy: 2
            }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            //imagemin.jpegtran({
            //    progressive: true
            //}),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 50
            })
        ])))
		.pipe(gulp.dest(public_path + 'images'))
}

// -------------------------------------
//   Task: Assets - Images compress TinyPNG
// -------------------------------------
function imagesMinifyTiny(){
	return gulp
		.src(assets_path + 'images/**/*.+(png|jpg|jpeg|)')
		.pipe(tinypng({
		    key: 'HOaATsDRiKqZcFOJPIQaKaG4I96GVTag',
		    summarise: true,
		    log: true
		}))
		.pipe(gulp.dest(public_path + 'images'))
}


// -------------------------------------
//   Task: Assets - Images compress
// -------------------------------------
function imagesResize(){
	return gulp
		.src(assets_path + 'images/*.{png,jpg,bmp}')
		.pipe(jimp({
			sizes: [
				{"suffix": "md", "width": 960},
				{"suffix": "sm", "width": 480}
			]
		}))
		.pipe(gulp.dest(public_path + 'images'))
}

// -------------------------------------
//   Task: Assets - svg
// -------------------------------------
function svg(){
	return gulp
		.src(assets_path + '/images/icons/*.svg')
		.pipe(svgmin(function (file) {
			const prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix + '-',
						minify: true
					}
				}]
			}
		}))
		.pipe(svgstore())
		.pipe(gulp.dest(public_path + '/images/icons/'));
}


// -------------------------------------
//   Task: HTML Validate
// -------------------------------------
function htmlValidate(){
	return gulp
		.src(public_path + "*.html")
		.pipe(htmlhint())
		.pipe(htmlhint.failReporter())
}

// -------------------------------------
//   Task: JS Validate
// -------------------------------------
function jsValidate(){
	return gulp
		.src(public_path + 'js/app.js')
		.pipe(jshint())
    	.pipe(jshint.reporter('default'));
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
		root: 'public',
		livereload: true
	})
}


// -------------------------------------
//   Task: Clean public
// -------------------------------------
function clean(){
	return del(public_path);
}


// -------------------------------------
//   Task: Download scripts
// -------------------------------------
function downloadScripts(){
	return downloadResources([
			"http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/shave/2.5.3/jquery.shave.min.js",
			"https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
		])
		.pipe(gulp.dest('public/js/plugins'));
}


// -------------------------------------
//   Task: Concat scripts
// -------------------------------------
function concatScripts(){
	return gulp
		.src([
			'public/js/plugins/jquery.min.js',
			'public/js/plugins/slick.min.js', 
			'public/js/plugins/select2.min.js',
			'public/js/plugins/aos.js',
			'public/js/plugins/jquery.shave.min.js'
		])
		.pipe(concat('external-scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
}


// -------------------------------------
//   Task: Download styles
// -------------------------------------
function downloadStyles(){
	return downloadResources([
			"https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css",
			"https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
			"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css"
		])
		.pipe(gulp.dest('public/css/plugins'));
}


// -------------------------------------
//   Task: Concat styles
// -------------------------------------
function concatStyles(){
	return gulp
		.src([
			'public/css/plugins/select2.min.css', 
			'public/css/plugins/aos.css'
		 ])
		.pipe(concat('external-styles.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('public/css'));
}


// -------------------------------------
//   Error catch
// -------------------------------------
const plumber_options = {
	errorHandler: function(err) {
		console.log(err.toString());
		this.emit('end');
	}
};


// -------------------------------------
//   Main tasks
// -------------------------------------

// Watch files
function watchFiles() {
	//gulp.watch(dev_path + 'sass/**/*.scss', gulp.series(styles, unusedStyles));
	gulp.watch(dev_path + 'sass/**/*.scss', stylesDevelopment);
	gulp.watch(dev_path + 'js/**/*.js', gulp.series(scriptsDevelopment));
	gulp.watch(dev_path + 'template/**/*.pug', jade);
	gulp.watch(assets_path +  'images/**/*.*', images, browserSync.reload);
	gulp.watch(assets_path +  'iconfonts/**/*.*', iconfonts, browserSync.reload);
	gulp.watch(assets_path +  'webfonts/**/*.*', webfonts, browserSync.reload);
}

// define complex tasks
const production = gulp.series(clean, stylesProduction, jade, unusedStyles, scriptsProduction, images, imagesMinifyTiny, iconfonts, webfonts, favicon);
const download = gulp.series(downloadStyles, concatStyles, downloadScripts, concatScripts);
const test = gulp.series(gulp.series(htmlValidate, jsValidate));
const build = gulp.series(clean, gulp.parallel(stylesDevelopment, jade, scriptsDevelopment, images, iconfonts, webfonts));
const watch = gulp.parallel(watchFiles, browserSync);

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

// complex
exports.production = production;
exports.download = download;
exports.test = test;
exports.build = build;
exports.watch = watch;
exports.default = watch;