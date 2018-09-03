function microtemplate(template, variables) {
   for (i in Object.keys(variables)) {
        eval(i + "=" + variables[i]);
   }
   return eval("`" + template + "`");
}
