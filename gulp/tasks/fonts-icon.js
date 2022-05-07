export const fontsIconCopy = () => {
    return app.gulp.src(app.path.src.fontsIcon)
        .pipe(app.gulp.dest(app.path.build.fontsIcon));
}