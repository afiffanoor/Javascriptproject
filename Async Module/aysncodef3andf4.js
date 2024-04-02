//Asynchronous method (single theard)
//note: call backs can be called simultaneously there is no order
// ex: cb1 and cb2
// cb1 can be called 1st or cb2 can be called 1st

//note2: we have call stack, call back queue , event and node api
// call stack stores the synchronous code and executes 1st all the sync code
//node api will store the functions or call backs then send it to call back queue 
// in call back queue 1st it can be cb1 or cb2/ cb2 or cb1
//event checks if
//the call stack is empty then one by one call back queue sends the cb2 to call stack then executes and give output
const fs = require('fs');

console.log('Before');

fs.readFile('f3.txt', cb1) //call back // it will execute this function at the last and its not waiting

function cb1(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('file 3 data' + data);
        fs.readFile('f4.txt', cb2) //to execute the data sequentially or serially add this line here
    }
}

// fs.readFile('f4.txt',cb2) 

function cb2(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('file 4 data ' + data);
        fs.readFile('f5.txt', cb3) // for sequentially execution
    }
}

// fs.readFile('f5.txt',cb3)  //for ramdomly execution

function cb3(err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('file 5 data ' + data);
    }
}


console.log('After');