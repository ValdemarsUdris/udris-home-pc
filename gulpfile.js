const gulp = require('gulp');
const sass = require('gulp-sass');var sassFiles = 'scss/style.scss',
    cssDest = 'css';
    gulp.task('styles', done => {
    gulp.src(sassFiles)
        .pipe(sass({
        }).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
    done();
});