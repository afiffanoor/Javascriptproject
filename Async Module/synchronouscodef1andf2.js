//sysnchronous code (single thread)
const fs = require('fs');

console.log('Before');

//read the file and get the data from a file

let data = fs.readFileSync('f1.txt') // it will complete this read file then go to line 12

console.log('File 1 data' + data); // it also takes time, it will wait if it has large file data

console.log('Last Line');



let data2 = fs.readFileSync('f1.txt') 

console.log('File 2 data' + data2);

console.log('After');


console.log('Afterest'); //random print