const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const CSS_FILE = 'bootsdark.min.css';
const MINIFY_CSS = 'minifycss';

const DEST_DIR = './';

// minify CSS_FILE
gulp.task(MINIFY_CSS, () => {
  console.log(`Minifying ${CSS_FILE}...`);
  return gulp.src(CSS_FILE)
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest(DEST_DIR))
});

gulp.task('default', gulp.series([MINIFY_CSS]));
