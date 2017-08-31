const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

// Sass task
gulp.task('sass', () =>
	sass('sass/**/*.sass')
		.on('error', sass.logError)
		.pipe(gulp.dest('css/'))
);

// Scss task
gulp.task('scss', () =>
sass('scss/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css/'))
);

// Watch task
gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('scss/**/*.scss', ['scss']);
});

// Default task
gulp.task('default', ['watch']);