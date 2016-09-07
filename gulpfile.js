var gulp=require('gulp');
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var reactify=require('reactify');
var babelify = require('babelify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer')

var relativePath = 'sticky-list-view';
var entries = 'src/'+relativePath+'/main.jsx';
var destPath = 'dist/'+relativePath;

gulp.task('browserify',function(){
	browserify({entries: entries, extensions: ['.jsx','.js'], debug: true})
	.transform(babelify,{presets:['es2015','react']})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps:true}))
	.pipe(sourcemaps.write('./'))
	
	.pipe(gulp.dest(destPath));
});
gulp.task('watch',['browserify'],function(){
	gulp.watch('./src/**/*.*',['browserify']);
});
gulp.task('react',function(){

	browserify('./src/Clock-main.js')
		.transform(reactify)
		.bundle()
		.pipe(source('clock.js'))
		.pipe(gulp.dest('js'));
});
gulp.task('watch-react',['react'],function(){
	gulp.watch('./src/**/*.*',['react']);
});
