var packer = require('./packer.js');
//var fs = require('fs');

//var f_c = fs.readFileSync('./a.js');
var content = packer.packScript("var a = 'hello';");
console.log(packer.decodeScript(content));
