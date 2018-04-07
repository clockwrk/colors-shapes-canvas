let gulp = require('gulp');
let livereload = require('gulp-livereload');

// Developer tasks
// -------------------------------------------------------------

// Live reload
gulp.task('reload', function () {
  livereload.reload();
})

gulp.task('default', () => {
  // gulp.start('build');

// Watch if any files change and reload if there is a change
  gulp.watch('browser/**/**', ['reload']);

  livereload.listen()

})
