# gulp-packer

Gulp plugin to use [packer](http://dean.edwards.name/packer)

## Install

```
npm install --save-dev gulp-packer
```

## Usage

```
var packer = require('gulp-packer');

gulp.task('packer-js', function(){
  gulp.src('./dist/a.js')
    .pipe(packer.packScript())
    .pipe(gulp.dest('./dist/'));
});
```
