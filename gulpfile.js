var gulp = require("gulp");
var connect = require("gulp-connect");
var less = require("gulp-less");

gulp.task("server", function() {
    connect.server();
});
gulp.task('less',function() {

    return gulp.src("app/styles/less/default.less")
        .pipe(less())
        .pipe(gulp.dest("app/styles/css"));
});


gulp.task("watch",["server"], function() {
     gulp.watch('app/styles/less/*.less', ['less']);
});