//Async await --> keywords

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
function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order has been processed..please wait');
        resolve(`${order} is ready`)
    })

}


async function serveOrder() {
    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced)
        console.log(processedOrder);
    } catch (error) {
        console.log(error);

    }
}
serveOrder();

