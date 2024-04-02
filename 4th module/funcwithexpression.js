// Expression is a set of statement.

var a = 2 + 3;
console.log(a);

//passing expressions in a fucntion
//below function doesnt have any name,its body is assigned to variable add, so its called as anoynomous function

var add = function (a, b) {
    return a + b //return statement returns the output
}

var result = add(4, 5)
console.log(result);