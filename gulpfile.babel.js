import React from 'react';
import ReactDom from 'react-dom/server';

import App from './scripts/containers';

import gulp from 'gulp';
import replace from 'gulp-replace';

import del from 'del';
import fs from 'fs';

import BrowserSync from 'browser-sync';

const browserSync = BrowserSync.create();

var htmlmin = require('gulp-htmlmin');

var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var exec = require('child_process').exec;


gulp.task('default', ['start-server'], function(){
        gulp.watch(['scripts/**/*.js', '!scripts/bundle.*', './*.html', './*.css'], ['build-all-and-reload'])
    }).task('build-js', function(){
        return browserify('./scripts/app.js')
            .transform(babelify, {presets: ["es2015", "react"]})
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./dist'));
    }).task('build-html', function(cb){
      var initialState = {
        categories : require('./data/categories.json'),
        title : 'Coursera navigator'
      };
      var app = ReactDom.renderToString(React.createElement(App(initialState)));
      //console.log(app);
      return gulp.src('./index.html')
      .pipe(replace(/\$\{app\}/g, app))
      .pipe(replace(/<link href='([^\.]+\.css)'[^>]*>/g, function(s, filename) {
          var style = fs.readFileSync(filename, 'utf8');
          return '<style>\n' + style + '\n</style>';
      }))
      .pipe(replace(/\$\{state\}/g, JSON.stringify(initialState)))
      .pipe(htmlmin({collapseWhitespace: true, minifyCSS : true}))
      .pipe(gulp.dest('./dist'));
    })
    .task('copy-data', function(){
      return gulp.src('./data/*.json').pipe(gulp.dest('./dist/data'));
    })
    .task('copy-fonts', function(){
      return gulp.src('./fonts/roboto/*.ttf').pipe(gulp.dest('./dist/fonts/roboto'));
    })
    .task('clean', function(){
      del.sync('dist');
    })
    .task('start-server', ['build-all'], function(){
      browserSync.init({
        server : {
          baseDir : 'dist'
        },
        port: 8082,
        ui : {
          port : 8081
        }
      });
    })
    .task('build-all', ['clean', 'build-js', 'build-html', 'copy-data', 'copy-fonts' ], function(){})
    .task('build-all-and-reload', ['build-all'],  function(){browserSync.reload()});
