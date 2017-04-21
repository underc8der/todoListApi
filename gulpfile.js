const gulp = require('gulp');
const mocha = require('gulp-mocha');


gulp.task('test', () => {
   let err = true;
   gulp.src('./test.js')
   .pipe(mocha())
   .on('error', ()=>{
      console.log('Test failed');
      err = true;
   })
   .on('success',()=> {
       if(!err)console.log('Test succeeded!');  
       process.exit(0);
   });
   console.log('ended');
});

gulp.watch(['./test.js'],['test']);
