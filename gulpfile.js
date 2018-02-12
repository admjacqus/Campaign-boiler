var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 5 versions', '> 10%']
};

gulp.task('sass', function () {
  return gulp.src('./sass/style.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function() {
    browserSync.init({
      //  https: true,
      ghostMode: false,
      server: {
          baseDir: "./"
      }
    });
    gulp.watch('./js/**/*.js').on("change", browserSync.reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css').on("change", browserSync.reload);
    gulp.watch('**/*.html').on("change", browserSync.reload);
});
