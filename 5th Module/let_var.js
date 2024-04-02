var a = 20;

var a = 35;

//solution of redeclaration problem 
let b = 30; //let cant be redeclared

b = 70;// reassign is allowed

console.log(a);
console.log(b); //ouput = 70 (after reassigning)

// scoped problem solution

if (true) {
    let c = 28;
    console.log(c);
}
//variables delcared with let keyword are blocked scoped
console.log(c);

//const
//cannot reassign, redeclared

const d = 100;
console.log(d);




