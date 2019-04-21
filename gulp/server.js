/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/* esint-enable node/no-unpublished-require */

// gulp.task('server', () => {
//   browserSync.init({
//     server: {
//       baseDir: "dist/"
//     }
//   });
//   gulp.watch('dist/**/*.*').on('change', browserSync.reload);
// })

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
      files: ['dist/**/*.*']
  });
})
