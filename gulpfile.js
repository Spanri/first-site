var gulp = require('gulp');
var haml = require('gulp-haml');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');
var imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('haml', function () {
  return gulp.src('haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('www'))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('www2')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'www'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'haml', 'sass'], function () {
    gulp.watch('haml/*.haml',['haml']);
})

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
    return gulp.src('www/img/*') // Берем все изображения из app
        .pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean','img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src('www/css/*.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('www/fonts/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('www/js/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src(['www/*.html', 'www/Osnova/*.html']) // Переносим HTML в продакшен
    .pipe(gulp.dest('dist/Osnova'));

});