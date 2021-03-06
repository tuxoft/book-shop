var gulp = require('gulp');

gulp.task('hello', function () {
  console.log('Hello from gulp');
});

gulp.task('copyFiles', function () {

  gulp.src([
    './package.json',
    './ormconfig.json',
    './keycloak.json'
  ]).pipe(gulp.dest('./target/'));

  gulp.src([
    './storage/**/*.*'
  ]).pipe(gulp.dest('./target/storage/'));
});
