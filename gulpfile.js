'use strict';


const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const reporter = require('postcss-browser-reporter');
const nested = require('postcss-nested');
const short = require('postcss-short');
const atImport = require("postcss-import");
const customMedia = require("postcss-custom-media");
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

// PostCSS
gulp.task('styles', function() {
  const processors = [
    atImport,
    nested,
    assets,
    short,
    customMedia,
    autoprefixer
  ];

  return gulp.src('./source/style/*.pcss')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/assets/css'));
});

// Pug
gulp.task('pug', function buildHTML() {
  return gulp.src('./source/template/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build'));
});

// JS
gulp.task('js', function() {

  return gulp.src('./source/js/app.js')
    .pipe(gulp.dest('./build/assets/js'));

});

gulp.task('watch', function() {
  gulp.watch('source/style/**/*.pcss', gulp.series('styles'));
  gulp.watch('source/template/**/*.pug', gulp.series('pug'));
  gulp.watch('source/js/*.js', gulp.series('js'));
});

// Запуска сервера
gulp.task('browser-sync', function() {

  gulp.watch('build/**/*.*').on('change', browserSync.reload);

  return browserSync.init({
    server: {
      baseDir: './build'
    }
  });
});