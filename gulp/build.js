/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const runSequence = require('run-sequence'); //позволяет подключать модули сборки поочередно
const del = require('del'); //позволяет удалять файлы в папке dist

/* esint-enable node/no-unpublished-require */


// /* eslint-disable node/no-unsupported-features/es-syntax */
// (async () => {
//     const deletedPaths = await del(['dist/**/*.*'], {dryRun: true});
//
//     console.log('Files and folders that would be deleted:\n', deletedPaths.join('\n'));
// })
//
// /* eslint-enable node/no-unsupported-features/es-syntax */


gulp.task('clean', () => {
  return del(['dist/']);
});


gulp.task('build', ['clean'], () => { //в квадратных скобках таска, которая будет выполняться перед текущей
  runSequence(
              'sass', //в кавычках подключается последовательно
              'html', //в квадратных  скобках параллельно (['js', 'html'], 'sass')
              'js',
              'fonts',
              'img:watch',
              'libs'
            );
});
