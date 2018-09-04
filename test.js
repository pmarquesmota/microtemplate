var picotemplate = require('./picotemplate.js');

console.log(picotemplate('${foo} and ${toto}',{foo:"bar", toto:"titi"}));

