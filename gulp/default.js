/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const runSequence = require('run-sequence'); //позволяет подключать модули сборки поочередно

/* esint-enable node/no-unpublished-require */

gulp.task('default', () => {
  runSequence('build', //в кавычках подключается последовательно
              [
                'sass:watch',
                'js:watch',
                'html:watch',
                'fonts:watch',
                'img:watch',
                'libs:watch'
              ],
              'server' //в квадратных  скобках параллельно (['js', 'html'], 'sass')
              );
});
