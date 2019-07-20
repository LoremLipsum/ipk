import gulp from 'gulp';
import config from '../config'
import gulpLoadPlugins from 'gulp-load-plugins';
const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src( config.src.scripts)
    .pipe($.plumber({ errorHandler: config.onError }))
    .pipe(gulp.dest(config.dest.scriptsBlock))
    .pipe($.concat('scripts.js'))
    .pipe(gulp.dest(config.dest.scripts))
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.scripts))
);
