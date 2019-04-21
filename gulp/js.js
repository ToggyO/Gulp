/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config
const plumber = require('gulp-plumber'); //работает, как nodemon, но для gulp
const notify = require('gulp-notify'); //выдает ошибки
const sourcemaps = require('gulp-sourcemaps'); //вывод правок в css-файл
const babel = require('gulp-babel');
const include = require('gulp-include'); //позволяет подключать js-файлы в другие js-файлы
const uglify = require('gulp-uglify');

/* esint-enable node/no-unpublished-require */

gulp.task('js',  () => {
  return gulp.src(cfg.src.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(include({
      extensions: 'js',
      hardFail: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cfg.dist.js));
});

gulp.task('js:watch',  () => {
  gulp.watch([cfg.src.js, 'src/js/components/**/*.*'], ['js']);
});
