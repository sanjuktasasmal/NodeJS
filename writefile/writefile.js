// fs- file system frist require
const { Console } = require('console');
const fs = require('fs');
const { console } = require('inspector');
fs.writeFile("demo1.txt", "this is sample test",
    function(err){
       if (err){
        console.log(err);
       }else{
        console.log("successful");
       }
    }
);