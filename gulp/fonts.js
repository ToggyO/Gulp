/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config

/* esint-enable node/no-unpublished-require */

gulp.task('fonts',  () => {
  return gulp.src(cfg.src.fonts)
    .pipe(gulp.dest(cfg.dist.fonts));
});

gulp.task('fonts:watch',  () => {
  gulp.watch(cfg.dist.fonts, ['fonts']);
});
