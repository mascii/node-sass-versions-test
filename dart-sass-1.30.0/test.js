const sass = require('sass');

const output = sass.renderSync({
  file: 'test.scss',
});

console.log(output.css.toString());
