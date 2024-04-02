// in js objects are key-value pair

var person = {
    firstName : 'Noor',
    lastName : 'Afiffa',
    age : '20',
    ownsCar : false

}
console.log(person);


//accesing values from object
//dot notation
console.log(person.firstName);

//bracket notation
console.log(person['lastName'])

var cap = {
    firstName : 'steve',
    lastName : 'Rogers',
    age : 102,

    friends : ['aa','vb','dd'],
    isAvenger : true,
    address : {
        state : 'karnataka',
        city : {
            name: 'tumkur',
            code: '12345'
    }

    }

}
console.log(cap.friends[1])

//nested
console.log(cap.address.city.name);

//updating existing object
cap.isAvenger = false
console.log(cap);

//add in object

cap.movies = ['age','DDLJ']
console.log(cap);

console.log(cap.movies[1])

//delete key

delete cap.movies
console.log(cap);