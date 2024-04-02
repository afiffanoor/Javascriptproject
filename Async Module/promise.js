// how to produce a promise
//1. create a variable 
//2. new keyword
//3. resolve and reject func

let myPromise = new Promise(function (resolve, reject) {
    const a = 4;
    const b = 43;

    setTimeout(() => {
        if (a == b) {
            resolve('Hi resolved');
        }
        else {
            reject('Hi rejected');
        }
    }, 2000)
})

//pending state

// console.log(myPromise);

//fulfilled - then method and catch method
//consuming a promise

myPromise.then(function (result) {  // result will come based on promise resolved
    console.log(result);
}) //fullfiled state

myPromise.catch(function (fieldresult) {
    console.log(fieldresult);
}) //rejected state

//your promise will get settled