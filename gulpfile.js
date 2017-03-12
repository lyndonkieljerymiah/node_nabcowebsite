var gulp = require("gulp");
var connect = require("gulp-connect");
var less = require("gulp-less");
var reload = require("gulp-livereload");
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');  
var uglify = require('gulp-uglify');  

gulp.task("server", function() {
    connect.server();
});

gulp.task('less',function() {
    return gulp.src("public/styles/less/default.less")
        .pipe(less())
        .pipe(gulp.dest("public/styles/css"))
        .pipe(reload());
});

gulp.task("watch", function() {
    reload.listen();

    gulp.watch([
        "public/styles/css/*.css",
        "public/srcipts/*.js"])
        .on('change',function(file) {
            console.log("File change" + file.path);
        });

     gulp.watch([
         'public/styles/less/parts/*.less',
         'public/styles/less/*.less'], ['minify-css']);   
});
 
gulp.task('minify-css',['less'], function() {
  return gulp.src('public/styles/css/default.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/styles/css'));
});

//script paths
var jsFiles = 'public/scripts/*.js',  
    jsDest = 'public/dist/scripts';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('toolset.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('toolset.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

