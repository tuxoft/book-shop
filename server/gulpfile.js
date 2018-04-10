var gulp = require('gulp');

gulp.task('hello', function () {
  console.log('Hello from gulp');
});

gulp.task('copyFiles', function () {

  gulp.src('./src/app/dao/json/**/*.*')
    .pipe(gulp.dest('./target/app/dao/json/'));

  gulp.src('./src/app/public/**/*.*')
    .pipe(gulp.dest('./target/app/public/'));
});
