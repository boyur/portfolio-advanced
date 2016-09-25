'use strict';

module.exports = function() {
  $.gulp.task('copy:image', function() {
    return $.gulp.src(['./source/images/**/*.*','!./source/images/sprite/**/*.*'], { since: $.gulp.lastRun('copy:image') })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });

  $.gulp.task('copy:sprite', function() {
    return $.gulp.src('./source/images/sprite/img/*.png', { since: $.gulp.lastRun('copy:sprite') })
      .pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
  });

  $.gulp.task('copy:fonts', function() {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
