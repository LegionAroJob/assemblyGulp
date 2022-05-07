import webpack from 'webpack-stream';


export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        //Сообщени об ошибке
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>",
            })
        ))

        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: "app.min.js",
            }
        }))
        //перемещение готовых файлов в папку dist
        .pipe(app.gulp.dest(app.path.build.js))
        //запуск слежки за файлами
        .pipe(app.plugins.browsersync.stream());
}