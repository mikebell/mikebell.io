'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var html5Lint = require('gulp-html5-lint');

gulp.task('default', function() {

});

gulp.task('sass', function() {
    gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('html5-lint', function() {
    return gulp.src('../output_dev/index.html')
        .pipe(html5Lint());
});