var fs = require("fs");
var fileToRead = process.argv[2];
console.log(fileToRead);

fs.readFile(fileToRead, "utf8", function(err, data){

  if(err){
    throw err;
   }
  content = data;
  console.log(content);

});


