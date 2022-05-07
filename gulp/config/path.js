// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Получаем пути к папкам
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        fontsIcon: `${buildFolder}/fonts-icon/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        fontsIcon: `${srcFolder}/fonts-icon/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}