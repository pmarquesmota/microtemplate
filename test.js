var microtemplate = require('./microtemplate.js');

console.log(microtemplate('${foo} and ${toto}',{foo:"bar", toto:"titi"}));

