var gulp = require('gulp');
var haml = require('gulp-haml');

gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});

gulp.task('haml', function () {
  return gulp.src('haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('www2'));
})

gulp.task('watch', function () {
    gulp.watch('haml/*.haml',['haml']);
})