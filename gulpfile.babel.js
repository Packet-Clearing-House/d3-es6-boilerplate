import gulp from 'gulp';

import connect from 'gulp-connect';
import clean from 'gulp-rimraf';
import eslint from 'gulp-eslint';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import bower from 'main-bower-files';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babel from 'babelify';

// DEV
gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['build:js']);
  gulp.watch('src/css/**/*.css', ['build:css']);
  gulp.watch('src/*.html', ['build:html']);
});

gulp.task('connect', () => {
  connect.server({
    root: 'public',
    port: 5000,
    livereload: true,
  });
});

// JAVASCRIPT
gulp.task('bower', () => {
  return gulp.src(bower())
    .pipe(gulp.dest('public/vendor'));
});

gulp.task('lint:js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('compress:js', ['build'], () => {
  return gulp.src('src/js/visualization.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('clean:js', () => {
  return gulp.src('public/js/')
    .pipe(clean());
});


gulp.task('build:js', ['clean:js', 'lint:js'], () => {
  return browserify('src/js', {
    debug: true,
    standalone: 'Visualization',
  }).transform(babel)
  .bundle()
  .on('error', (err) => {
    console.error(err);
    this.emit('end');
  })
  .pipe(source('visualization.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('public/js/'))
  .pipe(connect.reload());
});

// HTML
gulp.task('build:html', function() {
  gulp.src('src/*.html')
  .pipe(gulp.dest('public'))
  .pipe(connect.reload());
});

// CSS
gulp.task('build:css', function() {
  gulp.src('src/css/*.css')
  .pipe(gulp.dest('public/css'))
  .pipe(connect.reload());
});

gulp.task('build', ['build:js', 'build:css', 'build:html']);

gulp.task('dist', ['bower', 'build', 'compress:js']);

gulp.task('default', ['build', 'bower', 'connect', 'watch']);
