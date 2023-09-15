// Working with arrays
let arr = ["hi", "U", "Dave"]
let [a, b, c] = arr
console.log(b)
console.log(typeof (arr))
// or
console.log(typeof arr)


let list = [1,2,3,4]
let check = Array.isArray(list);
console.log(check)

// Using Map function
function mapUsage(){
    const num = [1, 2, 3, 4, 5]

    const squaredNum = num.map(function(n){
        return n*n
    })
    console.log(squaredNum);
}


// Using Map function
function mapUsage(){
    const num = [1, 2, 3, 4, 5]

    const squaredNum = num.map(function(n){
        return n*n
    })
    console.log(squaredNum);
}


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
var inoDollar = 80;

// using Map method
function usingMap(){
    let newTransaction = transactions.map(function(amount){
        return (amount / 80).toFixed(1)
    })
    console.log("$", newTransaction)
}

// using For Each method
function usingForEach(){
    let newTransaction = transactions.forEach(function(amount){
        console.log((amount / 80).toFixed(1))
    }) 
    console.log(newTransaction)
}

// using reduce
function reduceMethod() {
        
    let reduceMethod = [1, 2, 3, 4, 12]
    let result = reduceMethod.reduce(function(acc, value){
        let updatedSum = acc + value
        return updatedSum;
    }, 0)
    console.log(result);
}