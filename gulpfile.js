'use strict';

require('es6-promise').polyfill();

var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat  = require('gulp-concat');

var pkg = require('./package.json');
var reload = browserSync.reload;

gulp.task('default', function () {
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['.']
    }
  });
  gulp.watch(['./src/*.js', './src/**/*.js'], reload);
});

gulp.task('compile-js',function () {
  var compileFileName = 'bin.js'
  gulp.src(['./src/*.js','!src/js/' + compileFileName])
    .pipe(concat(compileFileName))
    .pipe(gulp.dest('.'))
    .on('end', reload);
});
