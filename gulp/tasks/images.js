import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';



export const images = () => {
    return app.gulp.src(app.path.src.images)
        //Сообщени об ошибке
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>",
            })
        ))

        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(
            app.plugins.if(
                app.isBuild,
                webp()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.dest(app.path.build.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.gulp.src(app.path.src.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.images)
            )
        )
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))

        //перемещение готовых файлов в папку dist
        .pipe(app.gulp.dest(app.path.build.images))
        //запуск слежки за файлами
        .pipe(app.plugins.browsersync.stream());
}