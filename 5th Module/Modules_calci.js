//modularity is defined as dividing your code in diffirent modules for performing diff tasks

//example calculator

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}

module.exports = {
    addition: add,
    multiplication: mul,
    subtraction: sub,
    division: div

}
