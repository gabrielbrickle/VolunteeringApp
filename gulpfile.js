var gulp = require('gulp'); // npm install gulp
var sass = require('gulp-sass'); // npm install gulp-sass
var browserify = require('gulp-browserify') // npm install gulp-browserify
var htmlmin = require('gulp-htmlmin');


gulp.task('default', ['html', 'css', 'js'])

gulp.task('css', function() {
    gulp.src('./styles.css')
        .pipe(sass())
        .pipe(gulp.dest('./public'))
});


gulp.task('html', function() {
    gulp.src('./templates/*.html').pipe(gulp.dest('./public/templates'));
    gulp.src('./templates/directives/*.html').pipe(gulp.dest('./public/templates/directives'));
    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function() {
    gulp.src('./main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public'))

});

gulp.task('watch', function() {
    gulp.watch('./main.css', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./main.js', ['js']);
    gulp.watch('./templates/*.html', ['html']);
    gulp.watch('./js/*/*.js', ['js']);
    gulp.watch('./templates/*/*.html', ['html']);
});
