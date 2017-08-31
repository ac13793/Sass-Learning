const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

// Sass task
gulp.task('sass', () =>
	sass('sass/**/*.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('css/'))
);

// Watch task
gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['watch']);