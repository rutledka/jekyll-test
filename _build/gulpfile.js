/* file: gulpfile.js */

var gulp   		  = require('gulp'),
    jshint      = require('gulp-jshint'),
    sass   		  = require('gulp-sass'),
    concat 	  	= require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    sourcemaps 	= require('gulp-sourcemaps'),
    rename      = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');


/* jshint task would be here */

gulp.task('build-css', function() {
  gulp.src('../sass/main.scss')
    	.pipe(sourcemaps.init())
        .pipe(sass({
          //outputStyle: 'compressed',
          errLogToConsole: true
        }))
        .pipe(autoprefixer())
        .pipe(concat('main.compiled.css'))
        .pipe(gulp.dest('../css/'))
        .pipe(minifyCSS())
        .pipe(rename('main.compiled.min.css'))
      .pipe(sourcemaps.write('../css/'))
      .pipe(gulp.dest('../css/'))
      .pipe(livereload());
      //.pipe(autoprefixer());

    /*gulp.src('../sass/main.scss')
      .pipe(sass())
      //.pipe(autoprefixer())
      .pipe(concat('main.compiled.css'))
      .pipe(gulp.dest('../css/'))
      .pipe(minifyCSS())
      .pipe(rename('main.compiled.min.css'))
      .pipe(gulp.dest('../css/'));*/
});

gulp.task('build-js', function() {
  gulp.src(['../js/grunts/*.js','../js/base.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('main.compiled.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../js'))
    .pipe(livereload());
});


/* updated watch task to include sass */

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('../js/*.js', ['build-js']);
  gulp.watch('../sass/**/*.scss', ['build-css']);
});
