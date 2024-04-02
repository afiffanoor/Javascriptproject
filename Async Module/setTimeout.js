//Time of functions means we can provide a time to a function and after particular time it will execute
// setTimeout will always take a call back function and time
//setTimeout(cb, 2000) //2 secs in mili secs

console.log('Before');
function greet() {
    console.log('hello from setTimeout');
}

setTimeout(greet, 2000) //when executing a program it will wait fot 2 secs then call the greet method

console.log('After');

