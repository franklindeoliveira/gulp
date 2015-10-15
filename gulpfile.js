// instanciando módulos
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var rename = require("gulp-rename");

gulp.task('default', ['watch'], function() {
    // corpo da tarefa 
    return gulp
        .src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
    // corpo da tarefa 
    gulp.watch('src/js/**/*.js', ['default'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});