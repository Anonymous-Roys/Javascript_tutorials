
// promises
// let myPromise = new Promise(function (resolve, reject) 
function placeOlder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink === "coffee") {
            resolve('order for the coffee received')
        }
        else {
            reject("other orderds Rejected")

        }
    })
}
    


function processOrder(order) {
    return new Promise(function (resolve) {
        console.log('order is being processed');
        resolve(`${order} and is served`)
        
})
}

// placeOrder('coffee').then(function(orderPlaced) {
//     console.log('orderPlaced')
//         let orderIsPocesssed = processOrder(orderPlaced)
//         return orderIsProcessed
// }.then(function (processOrder) {
//     console.log(processedOrder);

// }))

