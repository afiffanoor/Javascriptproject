//Destructuring Objects

let myObj = {
    age: 12,
    name: 'Afiffa',
    gender: 'female'
}

// to destrcuture
//you should pass same key names else it will come undefined

let { age, name: n, gender:g } = myObj //if you want to change the key name take name: n and print n

console.log(n);
console.log(g);
console.log(age);

// for nested objects

let myObj2 = {
    age: 12,
    name: 'Afiffa',
    gender: 'female',
    address:{
        country: 'USA',
        city: 'Austin'
    }
}

let { address:{country:c} } = myObj2  //access country and rename the key name
console.log(c);


////
const obj3={
    foo: 1
}
obj3.bar = 2
console.log(obj3);


////
console.log(typeof(new(class{
    class(){}
})));// output object



