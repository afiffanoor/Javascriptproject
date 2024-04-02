// Array provides you an ordered collection of data

var arr = [12 , 'hello', true , 12.09]
console.log(arr);

// accessing the elements

console.log(arr[3]);

//replacing elements
arr[1] = 'mee'
console.log(arr);

//get length 
console.log('length of array is',arr.length);

//in built js array methods
var arr2 = [12, 13, 14, 15]

//pop method (last element will be deleted out)
//delete
arr2.pop()
console.log('popped out',arr2);

//push method (adds the number to the end)
//add
arr2.push(100);
console.log('push method',arr2);

//shift method (remove element from starting)

var d = arr2.shift()
console.log(d);
console.log('shifted',arr2);

//unshift method (add value at starting)

var e = arr2.unshift(200);
console.log(e);
console.log('unshift',arr2);


