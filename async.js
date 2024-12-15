const fs = require("fs");
//filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data)
})
console.log("Hi there")

//this takes vary long
a=0
for(let i =0 ; i<=100000; i++){
    a++
}

console.log("HI there 2")
