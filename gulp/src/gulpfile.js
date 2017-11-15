//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}
//
//
////压缩html
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin"); //获取到插件

gulp.task("htmltask", function(){
	gulp.src("code/feijidazhan.html")
	.pipe( htmlmin(obj) )  //使用插件
	.pipe(gulp.dest("dest"));
})

//默认任务
gulp.task("default", ["htmltask"]);




//压缩js
//var gulp = require("gulp");
var uglify =require("gulp-uglify");
var babel = require('gulp-babel');

//es6js代码压缩
gulp.task('jsTask', function(){
	gulp.src('code/js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
//默认行为
gulp.task("default",["jsTask"]);



//压缩css
//var gulp = require("gulp");
var minifyCss = require('gulp-minify-css'); //css压缩插件
gulp.task('cssTask', function(){
	gulp.src('code/css/*')
	.pipe(minifyCss())
	.pipe(gulp.dest('dest/css'));
});
//默认任务
gulp.task("default", ["cssTask"]);





//压缩图片
//var gulp = require("gulp");
var imagemin = require('gulp-imagemin'); //图片压缩相关插件
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
gulp.task('imgTask', function(){
	gulp.src('code/images2/*')
	.pipe(imagemin({
		progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
		use: [pngquant()] //使用pngquant插件来深度压缩png图片
//		optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//      interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//      multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
	}))
	.pipe(gulp.dest('dest/images2'));
});
//默认任务
gulp.task("default", ["imgTask"]);


//重命名
var rename = require('gulp-rename'); //重命名插件
gulp.task('renameTask', function(){
	gulp.src('code/js/rename.js')
	.pipe(uglify())
	.pipe(rename('rename.min.js'))
	.pipe(gulp.dest('dest/js'));
});

gulp.task('default', ['jsTask', 'cssTask', 'htmltask', 'imgTask', 'renameTask']);
