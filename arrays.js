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
