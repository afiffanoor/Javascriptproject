// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values
//from arrays, or properties from objects, into distinct variables

let arr = ['HI', 'I', 'am','Afiffa'];

let e = arr[1];
let f = arr[2];

console.log(e)
console.log(f)

let arr2 = ['FINE','JUST',,'LEARN','IT'] //empty values or not assigned will be undefined

let [a,b,c,d,g] = arr2 // will take line 12 with index a,b,c,d( unpacked all the values)

console.log(c);
