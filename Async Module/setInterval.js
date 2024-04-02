// after interval of every 1 sec or given sec it will execute and it will execute infinitely 
//for that you need to set a stopper

function hi(){
    console.log('HIII setinterval here');
}

// setInterval(hi, 1000) // it will execute infinitely 

//to set a stopper

let timer = setInterval(hi, 1000)

setTimeout(function(){
    clearInterval(timer)//clear interval stops the setinterval 
},3000)  // after 3 secs it will stopped