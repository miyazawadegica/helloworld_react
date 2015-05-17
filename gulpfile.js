var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['./src/main.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['browserify'], function(){
  gulp.watch('./src/*.jsx', ['browserify']);
});

gulp.task('jquery-bootstrap', function() {
  var b = browserify({
    entries: ['./src/main2.js'],
    transform: [reactify]
  });
  return b.bundle()
    .pipe(source('app2.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch2', function(){
  gulp.watch('./src/*.jsx', ['jquery-bootstrap']);
});


