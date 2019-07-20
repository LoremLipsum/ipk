import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.libScripts)
    .pipe(gulp.dest(config.dest.libScripts))
    // .pipe($.uglify())
    // .pipe($.rename({suffix: '.min'}))
    // .pipe(gulp.dest(config.dest.libScripts))
);
