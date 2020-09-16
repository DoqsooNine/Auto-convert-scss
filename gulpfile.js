const gulp = require('gulp');
const sass = require('gulp-sass');
const GulpClient = require('gulp');
//const browserSync = require('browser-sync');

function style () {
   return gulp.src('./scss/**/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('./css'))
}

function watch () {
GulpClient.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;