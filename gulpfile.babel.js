import gulp from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus'
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import uglify from 'gulp-uglify'

gulp.task('pug', () => {
  gulp.src('./src/pug/**/!(_)*.pug')
    .pipe(pug({
      //pretty: true
    }))
    .pipe(gulp.dest('./dest'))
});

gulp.task('stylus', () => {
  gulp.src('./src/stylus/style.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(gulp.dest('./dest/css'))
});

gulp.task('fonts', () => {
  gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./dest/fonts'))
});

gulp.task('images', () => {
  gulp.src('./src/images/**/*.*')
    .pipe(gulp.dest('./dest/images'))
});

gulp.task('js', () => {
  gulp.src('./src/js/main.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js'))
})

gulp.task('vendor', () => {
  gulp.src('./src/vendor/**/*.*')
    .pipe(gulp.dest('./dest/vendor'))
});

gulp.task('watch', () => {
  watch('./src/fonts/**/*.*', () => gulp.start('fonts'))
  watch('./src/images/**/*.*', () => gulp.start('images'))
  watch('./src/pug/**/*.*', () => gulp.start('pug'))
  watch('./src/stylus/**/*.*', () => gulp.start('stylus'))
  watch('./src/vendor/**/*.*', () => gulp.start('vendor'))
  watch('./src/js/main.js', () => gulp.start('js'))
})

gulp.task('default', ['pug', 'stylus', 'fonts', 'images', 'js', 'vendor', 'watch']);
