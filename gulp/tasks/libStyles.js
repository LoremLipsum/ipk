import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.libStyles)
    // .pipe($.concat('libs.css'))
    .pipe($.plumber({ errorHandler: config.onError }))
    .pipe($.sass())
    .pipe(gulp.dest(config.dest.libStyles))
    .pipe($.csso({
      restructure: false,
      sourceMap: true,
      debug: true,
    }))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.libStyles))
);
