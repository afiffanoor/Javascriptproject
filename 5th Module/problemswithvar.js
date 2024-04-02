//1st issue

var a = 21;

var a = 35; //redeclaration of a variable, this should not be allowed that will create security conflicts

console.log(a);

// 2nd issue

if(a==35){  //scoping issue, the variables with var keyword are not blocked scoped, they are functional scoped.
    var b=40;
    console.log(b);
    
}

console.log(b);



function test(){ //you cannot call variables outside the function
    var c =130;
    console.log(c);
}
test();
console.log(c); 