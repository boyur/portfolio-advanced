'use strict';


const gulp = require('gulp');
//const gulpCopy = require('gulp-file-copy');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
//const concatCss = require('gulp-concat-css');
const reporter = require('postcss-browser-reporter');
const nested = require('postcss-nested');
const short = require('postcss-short');
const atImport = require("postcss-import");
const customMedia = require("postcss-custom-media")

const stylelint = require('stylelint');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

//const rulesStyles = require('./stylelintrc.json');

// Pug
gulp.task('pug', function buildHTML() {
  return gulp.src('./source/template/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'));
});

// PostCSS
gulp.task('styles', function() {
  const processors = [
    atImport,
    nested,
    assets,
    short,
    customMedia,
    //stylelint(rulesStyles),
    autoprefixer,
    reporter({
      selector: 'body:before'
    })
  ];

  return gulp.src('./source/style/*.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('source/style/**/*.pcss', gulp.series('styles'));
  gulp.watch('source/template/pages/*.pug', gulp.series('pug'));
});

// Запуска сервера
gulp.task('browser-sync', function() {

  gulp.watch('build/assets/**/*.*').on('change', browserSync.reload);

  return browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});