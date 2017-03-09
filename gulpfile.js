var gulp = require("gulp");
var connect = require("gulp-connect");
var less = require("gulp-less");
var reload = require("gulp-livereload");

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
     gulp.watch('public/styles/less/*.less', ['less']);
     gulp.watch('public/styles/less/parts/*.less', ['less']);
});

