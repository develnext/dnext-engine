const gulp = require('gulp');
const sourcemaps  = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const env = 'dev';
const version = '0.1.0';

gulp.task('compile', function() {
  let bundler = browserify('src/lib.js', {
        basedir: __dirname,
        debug: env != 'prod',
        cache: {}, // required for watchify
        packageCache: {}, // required for watchify
        fullPaths: env != 'prod',
  });

  bundler.transform("babelify", {presets: ['es2015']});

  bundler.bundle()
    .on('error', function (err) {
        console.error(err);
    })
    .pipe(source('ux-engine-' + version + '.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpif(env == 'prod', uglify()))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/lib'));
});

gulp.task('sandbox', function() {
  connect.server({
    root: 'build',
    livereload: true,
    port: 8888
  });
});

gulp.task('default', ['compile']);
