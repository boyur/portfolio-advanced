'use strict';

module.exports = function() {
  $.gulp.task('sprite:img', function() {

    var spriteData = $.gulp.src('./source/images/sprite/*.png').pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
      }));

    spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe($.gp.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest('./source/images/sprite/img'));

    // Pipe CSS stream through CSS optimizer and onto disk
    spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest('./source/images/sprite/css'));

    return spriteData;
  })
};