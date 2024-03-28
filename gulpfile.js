const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass')); // A plugin for working with CSS + correctly compile.
const cleanCSS = require('gulp-clean-css'); // code compressor
const htmlmin = require('gulp-htmlmin'); // import html minifier
const imagemin = require('gulp-imagemin'); // import photo minifier STRICTLY USE : npm install gulp-imagemin@7.1.0 (IT ALLOWS TO REQUIRE IMPORT)
const svgmin = require("gulp-svgmin"); // .svg files compressor
const minify = require('gulp-minify'); // .js files compressor

gulp.task('serve', function() {
    browserSync.init({
        server: {baseDir: 'dist'} // set the base directory at dist dir
    });

    gulp.watch("src/*.html").on('change', browserSync.reload); // Track changes in src html files, if changed - reload the browser.
});

gulp.task('styles', function() {
    return gulp
        .src('src/sass/**/*.+(sass|scss|css)') // From where we import sass to compile to css.
        .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError)) // compressed output style of css + log error if it happens.
        .pipe(cleanCSS({compatibility : 'ie8'})) // compressor for CSS
        .pipe(gulp.dest('dist/css')) // A destination where compiled css file is placed.
        .pipe(browserSync.stream());
});

gulp.task('checker', function() {
    gulp.watch('src/sass/**/*.+(sass|scss|css)', gulp.parallel('styles')); // ** we track all folders inside ; +(x|y|z) we track 3 file formats inside.
    gulp.watch("src/*.html").on('change', gulp.parallel('html-minimizer')); // on change of html in src we minimize it and place in dist
});

gulp.task('html-minimizer', function() { // minimize the html files
    return gulp.src('src/*.html') // get any html file from the src directory
        .pipe(htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('html-minimizer-directories', function() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest('dist'))
})

// gulp.task('animation-plugin-mover', function() { // move the animate.css library inside the dist.
//     return gulp.src("src/css/animate.css").pipe(gulp.dest('dist/css'))
// })

gulp.task('plugins-mover', function() { // Move all CSS plugins to the dist.
    return gulp.src("src/css/*.css").pipe(gulp.dest('dist/css'))
})

gulp.task('scripts-mover', function() { // move js files.
    return gulp.src('src/js/js_scripts/*.js') // get the js files from src
        .pipe(gulp.dest('dist/js/js_scripts'))
});

gulp.task('js-library-mover', function() { // move library js files.
    return gulp.src('src/js/js_library/*.js') // get the js files from src
        .pipe(gulp.dest('dist/js/js_library/'))
});

gulp.task('fonts-mover', function() { // move fonts
    return gulp.src('src/assets/fonts/*.+(otf|ttf|ttc)') // get the otf & ttf files from src
        .pipe(gulp.dest('dist/assets/fonts'))
});

gulp.task('icons-mover', function() { // move icons
    return gulp.src('src/assets/icons/*.svg') // get the svg files from src
        .pipe(svgmin())
        .pipe(gulp.dest('dist/assets/icons'))
});

gulp.task('images-mover', function() { // move images
    return gulp.src('src/assets/images/*.+(jpg|webp|svg|png)') // get the jpg|webp|svg|png files from src
        .pipe(imagemin()) // minimize images size
        .pipe(gulp.dest('dist/assets/images')) // move to the dist.
});

gulp.task('meta-mover', function() { // Move the meta picture to the dist
    return gulp.src('src/assets/meta/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/meta'))
})

gulp.task('svg-mover-images', function() { // move and compress svg from images to dist
    return gulp.src('src/assets/images/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('favicon-mover', function() { // move favicon icons to the dist.
    return gulp.src('src/*.+(png|ico|webmanifest)')
        .pipe(gulp.dest('dist'))
});

// A function which compresses the JS and moves to the dist folder
// Solve and prevent creating duplicates in dist !!!
gulp.task('js-compressor', function() {
    return gulp
        .src('src/js/js_scripts/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/js/js_scripts'))
});

// MAIN LAUNCHER OF TASKS.
gulp.task('default', gulp.parallel(
    'serve',
    'styles',
    'checker',
    'html-minimizer',
    'html-minimizer-directories',
    'plugins-mover',
    'scripts-mover',
    'js-library-mover',
    'fonts-mover',
    'icons-mover',
    'images-mover',
    'meta-mover',
    'svg-mover-images',
    'favicon-mover',
    'js-compressor'
));