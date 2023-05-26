"use strict";

var _require = require('gulp'),
    src = _require.src,
    dest = _require.dest,
    watch = _require.watch,
    parallel = _require.parallel; //  CSS


var sass = require('gulp-sass')(require('sass')); //const plumber = require('gulp-plumber');
//  IMAGENES


var cache = require('gulp-cache');

var imagemin = require('gulp-imagemin');

function css(done) {
  src('src/scss/**/*.scss') //identificar el archivo de SASS
  //.pipe( plumber() )// evitar trancazos
  .pipe(sass()) //Compilarlo
  .pipe(dest('build/css')); //guardar en el disco duro

  done();
}

function imagenes(done) {
  var opciones = {
    optimizationLevel: 3 //ya son opciones ya estan en la libreria de imagemin

  };
  src('src/img/**/*.{png, jpeg}').pipe(cache(imagemin(opciones))).pipe(dest('build/img'));
  done();
}

function dev(done) {
  watch("src/scss/app.scss", css); // watch("src/js/**/*.scss", css);

  done();
}

exports.css = css; // exports.js = javascript;

exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp,
/*javascript,*/
dev);
//# sourceMappingURL=gulpfile.dev.js.map
