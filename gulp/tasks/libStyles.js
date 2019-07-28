import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.libStyles)
    .pipe($.plumber({ errorHandler: config.onError }))
    .pipe(gulp.dest(config.dest.libStyles))
    .pipe($.concat('libs.css'))
    .pipe($.sass())
    .pipe(gulp.dest(config.dest.css))
    .pipe($.csso({
      restructure: false,
      sourceMap: true,
      debug: true,
    }))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.css))
);
