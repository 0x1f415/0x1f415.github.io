let cfg = require('./config.js');

let gulp = require('gulp');
var s3 = require('gulp-s3-upload')();

gulp.task('deploy', function() {
    gulp.src('./index.html')
        .pipe(s3({
            Bucket: cfg.s3_bucket,
            ACL:    'public-read'
        }, { maxRetries: 5 }));
});
