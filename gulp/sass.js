/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config
const plumber = require('gulp-plumber'); //работает, как nodemon, но для gulp
const notify = require('gulp-notify'); //выдает ошибки
const sourcemaps = require('gulp-sourcemaps'); //вывод правок в css-файл
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename'); //переименовывает сжатые cssnano-файлы с префиксом -min


/* esint-enable node/no-unpublished-require */

gulp.task('sass',  () => {
  return gulp.src(cfg.src.sass)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
          browsers: ['last 10 versions', 'ie 10'],
          cascade: false
    }))
    .pipe(rename({
      dirname: "",
      basename: "main",
      prefix: "",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cfg.dist.css));
});

gulp.task('sass:watch',  () => {
  gulp.watch('./src/sass/**/*.*', ['sass']);
});
