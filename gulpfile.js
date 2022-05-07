//Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';
//Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

//Передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins,
};

//Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { fontsIconCopy } from './gulp/tasks/fonts-icon.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';
import { otfToTtf, ttfToWoff, fonstStyle } from './gulp/tasks/fonts.js';

//Наблюдатель за изменениями файлов
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

//последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle, fontsIconCopy);

//основные задачи
const myTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(reset, myTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, myTasks);
const deployZip = gulp.series(reset, myTasks, zip);
const deployFTP = gulp.series(reset, myTasks, ftp);

//Экспорт сценариев
export { dev }
export { build }
export { deployZip }
export { deployFTP }

//Выполнение сценария поумолчанию
gulp.task('default', dev);