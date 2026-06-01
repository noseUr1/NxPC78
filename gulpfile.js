let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let cssmin = require('gulp-cssmin');

function sassTask()
{
	return gulp.src('./scss/style.scss')
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(sourcemaps.write())
			.pipe(cssmin())
			.pipe(gulp.dest('./src/'));
}

function move()
{
    return gulp.src('./src/**/*')
        .pipe(gulp.dest('../NxPC78/src'));
}

function watchTask()
{
	gulp.watch([
		'./scss/**',
		'./src/*.php',
		'./src/php/*.php',
		'./src/*.js',
		'./src/js/*.js',
		'./src/dao/**'
	], gulp.series(sassTask, move));
}

exports.sass = sassTask;
exports.move = move;
exports.watch = watchTask;
exports.default = gulp.series(sassTask);