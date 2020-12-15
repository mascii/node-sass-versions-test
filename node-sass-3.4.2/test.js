const sass = require('node-sass');

const output = sass.renderSync({
  file: 'test.scss',
});

console.log(output.css.toString());
