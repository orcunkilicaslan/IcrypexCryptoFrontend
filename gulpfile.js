require('gulp-cssnano');
const   gulp                      = require('gulp'),
        del                       = require('del'),
        sourcemaps                = require('gulp-sourcemaps'),
        plumber                   = require('gulp-plumber'),
        sass                      = require('gulp-sass'),
        autoprefixer              = require('gulp-autoprefixer'),
        minifyCss                 = require('gulp-clean-css'),
        babel                     = require('gulp-babel'),
        webpack                   = require('webpack-stream'),
        uglify                    = require('gulp-uglify'),
        concat                    = require('gulp-concat'),
        browserSync               = require('browser-sync').create(),

        folder_assets_main        = './assets/',
        folder_src_main           = folder_assets_main + 'src/',
        folder_dist_main          = folder_assets_main + 'dist/',

        folder_node_modules       = './node_modules/',
        folder_dist_node_modules  = folder_assets_main + 'vendor/',

        node_dependencies         = Object.keys(require('./package.json').dependencies || {});

/* BOOTSTRAP START */
gulp.task('sass-bootstrap', () => {
    return gulp.src([
        folder_src_main + 'sass/bootstrap/**/*.scss',
        folder_src_main + 'sass/bootstrap/**/*.sass'
    ], { since: gulp.lastRun('sass-bootstrap') })
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('bootstrap.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});
/* BOOTSTRAP END */


/* PLUGINS START */
gulp.task('sass-plugin', () => {
    return gulp.src([
        folder_src_main + 'sass/plugin/**/*.scss',
        folder_src_main + 'sass/plugin/**/*.sass'
    ], { since: gulp.lastRun('sass-plugin') })
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('plugin.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('script-plugin', () => {
    return gulp.src([ folder_src_main + 'script/plugin/**/app.js' ], { since: gulp.lastRun('script-plugin') })
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('plugin-app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'js'))
        .pipe(browserSync.stream());
});
/* PLUGINS END */


/* MAINPAGE START */
gulp.task('sass-mainpage', () => {
    return gulp.src([
        folder_src_main + 'sass/mainpage/**/*.scss',
        folder_src_main + 'sass/mainpage/**/*.sass'
    ], { since: gulp.lastRun('sass-mainpage') })
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('mainpage-app.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('script-mainpage', () => {
    return gulp.src([ folder_src_main + 'script/mainpage/**/app.js' ], { since: gulp.lastRun('script-mainpage') })
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('mainpage-app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'js'))
        .pipe(browserSync.stream());
});

gulp.task('watch-mainpage', () => {
    const watchMainpageVendor = [];

    node_dependencies.forEach(dependency => {
        watchMainpageVendor.push(folder_node_modules + dependency + '/**/*.*');
    });

    const watchMainpage = [
        folder_src_main + 'sass/plugin/**/*.scss',
        folder_src_main + 'sass/plugin/**/*.sass',
        folder_src_main + 'script/plugin/**/*.js',
        folder_src_main + 'sass/mainpage/**/*.scss',
        folder_src_main + 'sass/mainpage/**/*.sass',
        folder_src_main + 'script/mainpage/**/*.js',
    ];

    gulp.watch(watchMainpage, gulp.series('mainpage')).on('change', browserSync.reload);
    gulp.watch(watchMainpageVendor, gulp.series('vendor')).on('change', browserSync.reload);
});
/* MAINPAGE END */


/* TRADEPAGE START */
gulp.task('sass-tradepage', () => {
    return gulp.src([
        folder_src_main + 'sass/tradepage/**/*.scss',
        folder_src_main + 'sass/tradepage/**/*.sass'
    ], { since: gulp.lastRun('sass-tradepage') })
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('tradepage-app.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('script-tradepage', () => {
    return gulp.src([ folder_src_main + 'script/tradepage/**/app.js' ], { since: gulp.lastRun('script-tradepage') })
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('tradepage-app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'js'))
        .pipe(browserSync.stream());
});

gulp.task('watch-tradepage', () => {
    const watchTradepageVendor = [];

    node_dependencies.forEach(dependency => {
        watchTradepageVendor.push(folder_node_modules + dependency + '/**/*.*');
    });

    const watchTradepage = [
        folder_src_main + 'sass/plugin/**/*.scss',
        folder_src_main + 'sass/plugin/**/*.sass',
        folder_src_main + 'script/plugin/**/*.js',
        folder_src_main + 'sass/tradepage/**/*.scss',
        folder_src_main + 'sass/tradepage/**/*.sass',
        folder_src_main + 'script/tradepage/**/*.js',
    ];

    gulp.watch(watchTradepage, gulp.series('tradepage')).on('change', browserSync.reload);
    gulp.watch(watchTradepageVendor, gulp.series('vendor')).on('change', browserSync.reload);
});
/* TRADEPAGE END */


/* GENERAL START */
gulp.task('clear', () => del([ folder_dist_main, folder_dist_node_modules ]));

gulp.task('html', () => {
    return gulp.src([ folder_src_main + '**/*.html' ], {
        base: folder_src_main,
        since: gulp.lastRun('html')
    })
        .pipe(gulp.dest(folder_dist_main))
        .pipe(browserSync.stream());
});

gulp.task('vendor', () => {
    if (node_dependencies.length === 0) {
        return new Promise((resolve) => {
            console.log("No dependencies specified");
            resolve();
        });
    }

    return gulp.src(node_dependencies.map(dependency => folder_node_modules + dependency + '/**/*.*'), { base: folder_node_modules })
        .pipe(gulp.dest(folder_dist_node_modules))
        .pipe(browserSync.stream());
});

gulp.task('serve', () => {
    return browserSync.init({
        server: {
            baseDir: [ './' ],
            https: false
        },
        port: 3000,
        open: false
    });
});

gulp.task('watch', () => {
    const watchVendor = [];

    node_dependencies.forEach(dependency => {
        watchVendor.push(folder_node_modules + dependency + '/**/*.*');
    });

    const watch = [
        folder_src_main + '**/*.html',
        folder_src_main + 'sass/**/*.scss',
        folder_src_main + 'sass/**/*.sass',
        folder_src_main + 'script/**/*.js',
        folder_assets_main + 'img/**/*.+(png|jpg|jpeg|gif|svg|ico)'
    ];

    gulp.watch(watch, gulp.series('devel')).on('change', browserSync.reload);
    gulp.watch(watchVendor, gulp.series('vendor')).on('change', browserSync.reload);
});
/* GENERAL END */


/* GULP START */
gulp.task('bootstrap', gulp.series('sass-bootstrap'));
gulp.task('plugin', gulp.series('sass-plugin', 'script-plugin'));
gulp.task('mainpage', gulp.series('sass-mainpage', 'script-mainpage'));
gulp.task('tradepage', gulp.series('sass-tradepage', 'script-tradepage'));

gulp.task('maindevel', gulp.series('html', 'plugin', 'mainpage', gulp.parallel('watch-mainpage')));
gulp.task('tradedevel', gulp.series('html', 'plugin', 'tradepage', gulp.parallel('watch-tradepage')));

gulp.task('build', gulp.series('clear', 'vendor', 'html', 'bootstrap', 'plugin', 'mainpage', 'tradepage'));
gulp.task('devel', gulp.series('html', 'bootstrap', 'plugin', 'mainpage', 'tradepage', gulp.parallel('watch')));

gulp.task('start', gulp.series('build', gulp.parallel('serve', 'watch')));
gulp.task('default', gulp.series('build', 'devel'));
/* GULP END */