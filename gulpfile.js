const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const minifyJS = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(minifyJS())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('html', () => {
    gulp.src('./*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


gulp.task('watch', () => {
    gulp.watch("src/scss/*.scss", ['css']);
    gulp.watch("src/js/**/*.js", ['js']);
    gulp.watch("./*.html", ['html']);
});

gulp.task('default', () => {
    runSequence(
        'html',
        'js',
        'browser-sync',
        'watch'
    );
});