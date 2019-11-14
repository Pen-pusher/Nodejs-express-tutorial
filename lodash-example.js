//installing packages using npm
//testing lodash method 'fill' working
// to uninstall any module installed using npm command is"npm uninstall package-name"

const _ = require('lodash');
let example =_.fill([1,2,3,4,5],"banana",1,4);
console.log(example);


