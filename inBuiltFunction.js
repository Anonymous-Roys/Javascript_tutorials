// using Find method
function usingFind(){
    let firstWithdrawal = transactions.find(function(n){
        return n < 0
    })
    console.log(firstWithdrawal)
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

//Using Filter methods
function usingFilter() {
    let arr = [
        {name: "A", age: 14, gender: "M"},
        {name: "B", age: 54, gender: "M"},
        {name: "C", age: 94, gender: "F"},
        {name: "D", age: 34, gender: "M"},
        {name: "E", age: 13, gender: "F"}
    ]
    let malesAge = arr.filter(function(obj){
        return obj.gender == "M"
    }).map(function(male){
        return male.age
    })
    console.log(malesAge)
}
