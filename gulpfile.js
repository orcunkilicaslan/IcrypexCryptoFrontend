const   gulp                      = require('gulp'),
        del                       = require('del'),
        sourcemaps                = require('gulp-sourcemaps'),
        plumber                   = require('gulp-plumber'),
        sass                      = require('gulp-sass'),
        autoprefixer              = require('gulp-autoprefixer'),
        cssnano                   = require('gulp-cssnano'),
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
  ])
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
          flexbox: 'no-2009'
      }))
      .pipe(cssnano({
          reduceIdents: false,
          discardComments: {
              removeAll: true
          }
      }))
      .pipe(concat('bootstrap.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(folder_dist_main + 'css'))
      .pipe(browserSync.stream());
});
/* BOOTSTRAP END */

/* XTRAS START */
gulp.task('sass-xtras', () => {
    return gulp.src([
        folder_src_main + 'sass/xtras/**/*.scss',
        folder_src_main + 'sass/xtras/**/*.sass'
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            flexbox: 'no-2009'
        }))
        .pipe(cssnano({
            reduceIdents: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(concat('xtras.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});
/* XTRAS END */

/* PLUGINS START */
gulp.task('sass-plugin', () => {
  return gulp.src([
      folder_src_main + 'sass/global/**/*.scss',
      folder_src_main + 'sass/global/**/*.sass',
      folder_src_main + 'sass/plugin/**/*.scss',
      folder_src_main + 'sass/plugin/**/*.sass'

  ])
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
          flexbox: 'no-2009'
      }))
      .pipe(cssnano({
          reduceIdents: false,
          discardComments: {
              removeAll: true
          }
      }))
      .pipe(concat('plugin.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(folder_dist_main + 'css'))
      .pipe(browserSync.stream());
});

gulp.task('script-plugin', () => {
    return gulp.src([
        folder_src_main + 'script/plugin/**/app.js'
        //folder_src_main + 'script/plugin/**/validations-components.js'
    ])
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('plugin-app.js'))
        .pipe(uglify('plugin-app.min.js'))
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
  ])
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
          flexbox: 'no-2009'
      }))
      .pipe(cssnano())
      .pipe(concat('mainpage-app.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(folder_dist_main + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('script-mainpage', () => {
    return gulp.src([
        folder_src_main + 'script/mainpage/**/app.js',
        folder_src_main + 'script/mainpage/**/validations-homepage-register.js',
        folder_src_main + 'script/mainpage/**/validations-signup.js',
        folder_src_main + 'script/mainpage/**/validations-login.js',
        folder_src_main + 'script/mainpage/**/validations-contact.js'
    ])
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('mainpage-app.js'))
        .pipe(uglify('mainpage-app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'js'))
        .pipe(browserSync.stream());
});
/* MAINPAGE END */


/* TRADEPAGE START */
gulp.task('sass-tradepage', () => {
    return gulp.src([
        folder_src_main + 'sass/tradepage/**/*.scss',
        folder_src_main + 'sass/tradepage/**/*.sass'
    ])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            flexbox: 'no-2009'
        }))
        .pipe(cssnano({
            reduceIdents: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(concat('tradepage-app.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'css'))
        .pipe(browserSync.stream());
});

gulp.task('script-tradepage', () => {
    return gulp.src([
        folder_src_main + 'script/tradepage/**/app.js',
        folder_src_main + 'script/tradepage/**/deposit-withdraw.js',
        folder_src_main + 'script/tradepage/**/validations-profile-login-settings.js'
    ])
        .pipe(plumber())
        .pipe(webpack({
            mode: 'production'
        }))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(concat('tradepage-app.js'))
        .pipe(uglify('tradepage-app.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(folder_dist_main + 'js'))
        .pipe(browserSync.stream());
});
/* TRADEPAGE END */


/* GENERAL START */
gulp.task('clear', () => del([ folder_dist_main, folder_dist_node_modules ]));

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
            index: "index.html",
            https: false,
            port: 3000
        },
        //open: "local",
        callbacks: {
            /**
             * This 'ready' callback can be used
             * to access the Browsersync instance
             */
            ready: function(err, bs) {

                // example of accessing URLS
                console.log(bs.options.get('urls'));

                // example of adding a middleware at the end
                // of the stack after Browsersync is running
                bs.addMiddleware("*", function (req, res) {
                    res.writeHead(302, {
                        location: "404.html"
                    });
                    res.end("Redirecting!");
                });
            }
        }
    });
});

gulp.task('watch', () => {
    const watchVendor = [];

    node_dependencies.forEach(dependency => {
        watchVendor.push(folder_node_modules + dependency + '/**/*.*');
    });

    const watch = [
        folder_src_main + 'sass/**/*.scss',
        folder_src_main + 'sass/**/*.sass',
        folder_src_main + 'script/**/*.js'
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
gulp.task('xtras', gulp.series('sass-xtras'));

gulp.task('build', gulp.series('clear', 'vendor', 'bootstrap', 'plugin', 'mainpage', 'tradepage', 'xtras'));
gulp.task('devel', gulp.series('bootstrap', 'plugin', 'mainpage', 'tradepage', 'xtras', gulp.parallel('watch')));

gulp.task('start', gulp.series('build', gulp.parallel('serve', 'watch')));
gulp.task('default', gulp.series('build', 'devel'));
/* GULP END */