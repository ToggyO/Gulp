/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const cfg = require('../package.json').config; //обращение к полю config
const imagemin = require('gulp-imagemin');//позволяет сжимать картинки

/* esint-enable node/no-unpublished-require */

gulp.task('img',  () => {
  gulp.src(cfg.src.img.noCompress)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: false},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(gulp.dest(cfg.dist.img));
  gulp.src(cfg.src.img.all)
    .pipe(gulp.dest(cfg.dist.img));
});

gulp.task('img:watch',  () => {
  gulp.watch([cfg.src.img.all, cfg.src.img.noCompress], ['img']);
});
