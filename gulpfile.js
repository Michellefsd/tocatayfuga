
const { src, dest, watch, parallel } = require('gulp');      

//  CSS

const sass = require('gulp-sass')(require('sass'));
//const plumber = require('gulp-plumber');

//  IMAGENES
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');


function css( done ) {
    src('src/scss/**/*.scss')   //identificar el archivo de SASS
    //.pipe( plumber() )// evitar trancazos
    .pipe( sass() )   //Compilarlo
    .pipe( dest('build/css') );  //guardar en el disco duro
    done();
}

function imagenes( done ) {

    const opciones = {
        optimizationLevel: 3   //ya son opciones ya estan en la libreria de imagemin
    };

    src('src/img/**/*.{png, jpeg}')
    .pipe( cache(imagemin(opciones)))
    .pipe( dest('build/img'))
    done();
}

 function dev(done) {
    watch("src/scss/app.scss", css);
    // watch("src/js/**/*.scss", css);
    done();
}

exports.css = css;
// exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, /*javascript,*/ dev);