'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var importOnce = require('node-sass-import-once');

var config = {
    bootstrapDir: './node_modules/bootstrap',
    publicDir: './stylesheets',
    srcFile: './css/*.scss'
};

gulp.task('css', function() {
    return gulp.src(config.srcFile)
    .pipe(sass({
      includePaths: ['./node_modules'],
      outputStyle: 'nested',
      importer: importOnce,
      importOnce: {
        index: false,
        css: false,
        bower: false
      }
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.publicDir));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', function() {
  gulp.watch('./css/**/*.scss', ['css']);
});
