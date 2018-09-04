var picotemplate = require('picotemplate');

console.log(picotemplate('${foo} and ${toto}',{foo:"bar", toto:"titi"}));

