# microtemplate
An eight line of code javascript template engine

# Usage
```javascript
var microtemplate = require('microtemplate');

microtemplate(template, variables);
```

where `template` is the string you want to interpolate and `variable` is a JSON object with variables and their values, for example `{foo:"bar", toto:"titi"}`

# WARNING
This module heavily uses eval(). You should audit it before use and not pass it user provided strings.

#License
MIT
