var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');



var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var exec = require('child_process').exec;

gulp.task('default', ['build-all'], function(){
        gulp.watch(['scripts/**/*.js', '!scripts/bundle.*'], ['build-all'])
    }).task('build-js', function(){
        return browserify('./scripts/app.js')
            .transform(babelify, {presets: ["es2015", "react"]})
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./scripts'));
    }).task('build-html', function(cb){
        exec('node ./node_modules/babel-cli/bin/babel-node prebuildMarkup.js', function (err, stdout, stderr) {
            cb(err);
        });        
    }).task('minify-html', ['build-html'], function() {
        return gulp.src('./index.html')
        .pipe(htmlmin({collapseWhitespace: true, minifyCSS : true}))
        .pipe(gulp.dest('./'));
    }).task('build-all', ['build-js', 'minify-html' ], function(){});
