// we will be given a number and we have to check that if the square of the number is even or not

//imperative way of writing code

const a = 4;

const aSquared = a * a;

let isEven;

if (aSquared % 2 == 0) {
    isEven = true
}
else {
    isEven = false
}
console.log(isEven);


//Declarative way

const checkForSquare =(x)=>(x*x % 2 ==0 ? true : false)
console.log(`Ok ${checkForSquare(4)}`)



