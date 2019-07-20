import gulp from 'gulp';

module.exports = gulp.series(
  'clean',
  gulp.parallel(
    'pug',
    'sass',
    'sassCopy',
    'sassCopyBlock',
    'scripts',
    'fonts',
    'favicon',
    'images',
    'upload',
    'libScripts',
    'libStyles',
    'spriteSvg',
  ),
);
