function picotemplate(template, variables) {
   for (let key in variables) {
        eval(key + '="' + variables[key] + '"');
   }
   return eval("`" + template + "`");
}

module.exports = picotemplate;
