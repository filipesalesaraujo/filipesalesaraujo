"use strict";
const gulp = require("gulp"),
  sass = require("gulp-sass"),
  cssnano = require("cssnano"),
  rename = require("gulp-rename"),
  autoprefixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
  webp = require('gulp-webp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  compass = require('gulp-compass'),
  sasslint = require('gulp-scss-lint'),
  tinypng = require('gulp-tinypng-unlimited'),
  secondTinypng = require('gulp-tinypng'),
  TINYPNG_API = "8FiQFj9oWwEyTBHMMwxjvuYNx05Fphk2";
function css() {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./dist/css/'))
}
function img() {
  return gulp
    .src("./src/images/**/*.*")
    .pipe(webp())
    .pipe(gulp.dest('./dist/images/'));
}

function js() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function tiny() {
  return gulp
    .src('./src/images/**/*.@(png|jpg|jpeg)')
    .pipe(tinypng({
      apiKey: TINYPNG_API
    }))
    .pipe(gulp.dest('./dist/images'));
}
function watchFiles() {
  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/js/**/*.js", js);
  gulp.watch("./src/images/**/*.*", tiny);
}
const watch = gulp.parallel(watchFiles);
const deploy = gulp.series(gulp.parallel(css, tiny, js));
exports.css = css;
exports.img = img;
exports.js = js;
exports.tiny = tiny;
exports.watch = watch;
exports.deploy = deploy;