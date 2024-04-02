// for only single value parameter you can use arrow func without round braces

let a = 2;

let test1 = () => { // OR  let test1 = () => console.log(1);
    console.log(1);
}

let test2 = a => {  //for only single value parameter you can use arrow func without round braces
    console.log(a + 2);
}

let test5 = a => console.log(a + 2); //same as above test2 you can use without curly braces if it is one line


let test3 = (a, b) => {  // OR let test3 = (a, b) => console.log(a + b);
    console.log(a + b);
}

test1();
test2(4);
test3(5, 3)
test5(4)

