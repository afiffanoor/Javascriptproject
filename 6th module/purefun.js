
//impure function
var a = 10
function addImpure(x) {
    console.log(x+a);
    a++;
}

addImpure(2)
addImpure(2)
addImpure(2)

//pure function should return same input and same output
// donot use any external factor that can effect your code as impure funtion

function addPure(x, a){
    console.log(x+a);

}
addPure(2,3)
addPure(2,3)
addPure(2,3)
addPure(2,3)

//Still the above fucntion is not pure because its using console.log external resource
//lets write a pure function

function addPures(x , a){
    return x+a;
}

console.log(addPures(4,5));  //used outside of the function.

