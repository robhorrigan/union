const gulp = require('gulp');
const sass = require('gulp-sass');
const importOnce = require('node-sass-import-once');

const config = {
  bootstrapDir: './node_modules/bootstrap',
  publicDir: './stylesheets',
  srcFile: './css/*.scss'
};

gulp.task('css', () =>
 gulp.src(config.srcFile)
  .pipe(sass({
    includePaths: ['./node_modules'],
    outputStyle: 'nested',
    sourceComments: true,
    importer: importOnce,
    importOnce: {
      index: false,
      css: false,
      bower: false
    }
  }).on('error', sass.logError))
  .pipe(gulp.dest(config.publicDir))
);

gulp.task('fonts', () =>
  gulp.src(`${config.bootstrapDir}/assets/fonts/**/*`)
    .pipe(gulp.dest(`${config.publicDir}/fonts`))
);

gulp.task('default', () => gulp.watch('./css/**/*.scss', ['css']));
