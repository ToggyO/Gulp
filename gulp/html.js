/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config
const plumber = require('gulp-plumber'); //работает, как nodemon, но для gulp
const notify = require('gulp-notify'); //выдает ошибки
const fileinclude = require('gulp-file-include'); //позволяет подключать файлы в html-документ

/* esint-enable node/no-unpublished-require */

gulp.task('html',  () => {
  return gulp.src(cfg.src.html + '/*.html')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
    }))
    .pipe(gulp.dest(cfg.dist.html));
});

gulp.task('html:watch',  () => {
  gulp.watch('./src/**/*.*', ['html']);
});
