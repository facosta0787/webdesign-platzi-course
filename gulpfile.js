var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

const PATH_SASS = './src/sass/**/*.sass'
const PATH_HTML = 'src/*.html'

gulp.task('html-minify',function(){
  return gulp.src(PATH_HTML)
  .pipe(htmlmin({collapseWhitespace:true}))
  .pipe(gulp.dest('./dist'))
})

gulp.task('sass',function(){
  return gulp.src(PATH_SASS)
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/css'))
})

gulp.task('sass:watch',function(){
  gulp.watch(PATH_SASS,['sass'])
  gulp.watch(PATH_HTML,['html-minify'])
})

gulp.task('default',['html-minify','sass'])
