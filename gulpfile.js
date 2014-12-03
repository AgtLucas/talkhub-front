// Gulp!
var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , sass = require('gulp-sass')
  , deploy = require('gulp-gh-pages')
  , concat = require('gulp-concat')
  , uglify = require('gulp-uglify')
  , autoprefixer = require('gulp-autoprefixer')
  , minifycss = require('gulp-minify-css');

// Browserify Task
gulp.task('browserify', function () {
  gulp.src('_src/js/main.js')
    .pipe(browserify({transform:'reactify'}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Sass Task
gulp.task('sass', function () {
  gulp.src('_scss/main.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('build/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});

// Watch Task
gulp.task('watch', function () {
  gulp.watch('_src/**/*.*', ['default']);
});

// Default Task
gulp.task('default', ['browserify', 'sass']);

// Deploy Task
//gulp.task('deploy', function () {
//  gulp.src('_site/**/*')
//    .pipe(deploy());
//});