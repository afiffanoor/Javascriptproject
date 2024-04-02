//we can pass one function as an arguement to another function


function printFirstName(firstname, cb) {
    console.log(firstname);
    cb('sid')

}
function printLastName(lastname) {
    console.log(lastname);
}
printFirstName('afiffa', printLastName);


//number is even or not
const checkEven = (n) => {
    return n % 2 == 0;
}

let printResult = (evenFn, num) => {
    const isNumEven = evenFn(num)
    console.log(`The number ${num} is an even number ${isNumEven}`);
}
printResult(checkEven, 7)