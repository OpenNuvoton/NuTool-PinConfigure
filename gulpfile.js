const gulp = require('gulp');
const terser = require('gulp-terser');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');  //returns a streaming vinyl object where as uglify expects buffered vinyl file objects.
const rename = require('gulp-rename');

// 檔案位置參數
const path = {
    WEBUSB_WORKER: './src/worker/webusb.worker.js',
    WEBUSB_WORKER_OUT: 'webusb.worker-bundle.js',
    WEBUSB_WORKER_DEST: './src/worker/',
    NUC_PIN_CONF: './src/NUC_Pin_Configuration.js',
    NUC_PIN_CONF_OUT: 'NUC_Pin_Configuration-terser.js',
    NUC_PIN_CONF_DEST: './src/',
};

function buildWorker() {
    return browserify({
        entries: [path.WEBUSB_WORKER]
    })
        .transform(babelify.configure({
            presets: ["@babel/preset-env"]
        }))
        .bundle()
        .pipe(source(path.WEBUSB_WORKER_OUT))
        .pipe(rename(path.WEBUSB_WORKER_OUT))
        .pipe(gulp.dest(path.WEBUSB_WORKER_DEST));
}

function buildMain() {
    return gulp.src(path.NUC_PIN_CONF)
        .pipe(rename(path.NUC_PIN_CONF_OUT))
        .pipe(terser({}, terser.minify))
        .pipe(gulp.dest(path.NUC_PIN_CONF_DEST));
}

function watch() {
    gulp.watch([path.WEBUSB_WORKER], buildWorker);
    gulp.watch([path.NUC_PIN_CONF], buildMain);
}

var build = gulp.parallel(buildWorker, buildMain);

exports.buildWorker = buildWorker
exports.buildMain = buildMain

exports.watch = watch;
exports.default = build;