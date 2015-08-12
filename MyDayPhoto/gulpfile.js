var gulp=require('gulp');
var less=require('gulp-less');
var mincss=require('gulp-minify-css');
var plumber=require('gulp-plumber');
var notify=require('gulp-notify');
var autoprefixer=require('gulp-autoprefixer');
var connect=require('gulp-connect');
// gulp less
gulp.task('testLess', function() {
    // content
  return gulp.src('./Less/*.less')
    				 .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
             .pipe(less())
    				 .pipe(gulp.dest('./Css/'));

    		// .pipe(mincss())
    		// .pipe(gulp.dest('./Css/Min/'))
});
gulp.task('testPrefixer',['testLess'],function(){
  return gulp.src('./Css/*.css')
             .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
             .pipe(autoprefixer({
                browsers: ['last 2 versions','Firefox <= 20'],
                cascade: true, //是否美化属性值 默认：true 像这样：
                //-webkit-transform: rotate(45deg);
                //transform: rotate(45deg);
                remove:true //是否去掉不必要的前缀 默认：true 
             }))
             .pipe(gulp.dest('./Css/'))
})
gulp.task('testCss',['testLess','testPrefixer'],function(){
	gulp.src('./Css/*.css')
			.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
			.pipe(mincss())
			.pipe(gulp.dest('./Css/Min/'));
})
//http-server
gulp.task('server', function() {
    // content
    connect.server({
      host:'localhost',
      port:8080
    });
});
gulp.task('testWatch',function(){
	gulp.watch('./Less/*.less', ['testLess','testCss','testPrefixer']);
});

gulp.task('default',['testWatch','server']);





