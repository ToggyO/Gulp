/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config
const plumber = require('gulp-plumber'); //работает, как nodemon, но для gulp
const notify = require('gulp-notify'); //выдает ошибки
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename'); //переименовывает сжатые cssnano-файлы с префиксом -min
const importCss = require('gulp-import-css');//импорт библиотек
const babel = require('gulp-babel');
const include = require('gulp-include'); //позволяет подключать js-файлы в другие js-файлы
const uglify = require('gulp-uglify');

/* esint-enable node/no-unpublished-require */

gulp.task('libs',  () => {
  gulp.src(cfg.libs.css)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(importCss())
    .pipe(cssnano())
    .pipe(rename({
      dirname: "",
      basename: "libs",
      prefix: "",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest(cfg.dist.css));
  gulp.src(cfg.libs.js)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(babel())
      .pipe(include({
        extensions: 'js',
        hardFail: true
      }))
      .pipe(uglify())
      .pipe(gulp.dest(cfg.dist.js));
});

gulp.task('libs:watch',  () => {
  gulp.watch(cfg.libs.css, ['libs']);
  gulp.watch(cfg.libs.js, ['libs']);
});
