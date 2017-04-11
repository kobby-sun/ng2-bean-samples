var fs = require('fs');
var gulp = require('gulp');
var file = require('gulp-file');
var sftp = require('gulp-sftp');
var runSequence = require('run-sequence');
var moment = require('moment');
var GulpSSH = require('gulp-ssh')

var sshConfig = JSON.parse(fs.readFileSync('./.ftppass').toString());

var host = '172.17.35.87';//'172.17.6.23'

var config = {
    host: host,
    port: 22,
    username: sshConfig.privateKeyCustom.user,
    privateKey: fs.readFileSync(sshConfig.privateKeyCustom.keyLocation),
    passphrase: sshConfig.privateKeyCustom.passphrase
}

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
})



//***************Core files deploy**********************
gulp.task('deploy:dev', function (callback) {
    runSequence('version', 'sftp-reset:dev', 'sftp:dev', callback);
});

gulp.task('deploy:dev:archive', function (callback) {
    runSequence('version', 'sftp-archive:dev', 'sftp-reset:dev', 'sftp:dev', callback);
});

gulp.task('sftp-reset:dev', function () {
    return gulpSSH
        .exec(['rm /home/ubuntu/ee-web/*.* -rf'], { filePath: 'commands.log' })
        .pipe(gulp.dest('logs'))
    // runSequence('sftp-reset-1:dev', 'sftp-reset-2:dev')
})

gulp.task('sftp:dev', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: host,
            auth: 'privateKeyCustom',
            remotePath: '/home/ubuntu/ee-web'
        }));
})



//***************Full files deploy**********************
gulp.task('deploy:dev:full', function (callback) {
    runSequence('version', 'sftp-reset:dev:full', 'sftp:dev:full', callback);
});

gulp.task('deploy:dev:full:archive', function (callback) {
    runSequence('version', 'sftp-archive:dev', 'sftp-reset:dev:full', 'sftp:dev:full', callback);
});

gulp.task('sftp-reset:dev:full', function () {
    return gulpSSH
        .exec(['rm /home/ubuntu/ee-web/* -rf'], { filePath: 'commands.log' })
        .pipe(gulp.dest('logs'))
    // runSequence('sftp-reset-1:dev', 'sftp-reset-2:dev')
})

gulp.task('sftp:dev:full', function () {
    return gulp.src('dist/**')
        .pipe(sftp({
            host: host,
            auth: 'privateKeyCustom',
            remotePath: '/home/ubuntu/ee-web'
        }));
})

// gulp.task('sftp-reset-1:dev', function () {
//     return gulpSSH
//         .exec(["find /home/ubuntu/ee-web -type f -not -name '*.zip' -print0 | xargs -0 rm -rf"], { filePath: 'commands.log' })
//         .pipe(gulp.dest('logs'))
// })
// gulp.task('sftp-reset-2:dev', function () {
//     return gulpSSH
//         .exec(["find /home/ubuntu/ee-web/* -type d -empty -delete"], { filePath: 'commands.log' })
//         .pipe(gulp.dest('logs'))
// })



//***************Common Tasks**********************
gulp.task('sftp-archive:dev', function () {
    return gulpSSH
        .exec(['zip -r /home/ubuntu/ee-web.' + moment().format('YYYYMMDDHHmmss') + '.zip /home/ubuntu/ee-web/'], { filePath: 'commands.log' })
        .pipe(gulp.dest('logs'))
})

gulp.task('version', function () {
    return file('ver.json', '{"ver": "' + moment().format('YYYYMMDDHHmmss') + '"}', { src: true })
        .pipe(gulp.dest('dist'));
})