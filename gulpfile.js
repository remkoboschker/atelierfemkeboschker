var gulp = require('gulp'),
    imageResize = require('gulp-image-resize'),
    imagemin = require('gulp-imagemin'),
    flatten = require('gulp-flatten');

// 640, 480, 320, 192, 144, 96

gulp.task('img640', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 640,
            height: 640,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/640'));
});

gulp.task('img480', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 480,
            height: 480,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/480'));
});

gulp.task('img320', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 320,
            height: 320,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/320'));
});

gulp.task('img192', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 192,
            height: 192,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/192'));
});

gulp.task('img144', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 144,
            height: 144,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/144'));
});

gulp.task('img96', function () {
    gulp.src('../../Dropbox/Photos/website/**/*.jpg')
        .pipe(imageResize({
            width: 96,
            height: 96,
            imageMagick: true
        }))
        .pipe(imagemin())
        .pipe(flatten())
        .pipe(gulp.dest('public/images/96'));
});

gulp.task('images', ['img640', 'img480', 'img320', 'img192', 'img144', 'img96']);