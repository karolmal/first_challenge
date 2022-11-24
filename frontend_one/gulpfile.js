const gulp = require("gulp");
const { task } = require("gulp");

task("copyHtml", function (cb) {
  // async
  cb();
  //html files
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
});

const build = task("copyHtml");
