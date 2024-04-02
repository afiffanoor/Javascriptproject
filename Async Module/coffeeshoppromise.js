

//place a order for coffee
function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == 'coffee') {
            resolve('order has been recieved');
        }
        else {
            reject('order rejected');

        }
    })
}

//processing a order of coffee
function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order has been processed..please wait');
        resolve(`${order} is ready`)
    })

}


placeOrder('coffee').then(function (orderPlaced) {
    console.log(orderPlaced);
    let orderIsProcessed = processOrder(orderPlaced)
    return orderIsProcessed
}).then(function (processOrder) {
    console.log(processOrder);
}).catch(function(err){
    console.log(err);
})// chaining of Promise, solution with promises



//Async await
