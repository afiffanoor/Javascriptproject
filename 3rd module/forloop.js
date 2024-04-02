// loops are the statements that we can use to control a flow of the program and to do some repeatative

var a = 'Hello world'

// the for loop

for(var i=0; i<10; i++){
    console.log(a);
}

// array and square each element

var num =[2, 3, 4, 5, 6];


var squareArray=[];

for (var i = 0; i < num.length;i++) {
    squareArray.push(num[i] * num[i]);

}
console.log(squareArray);
