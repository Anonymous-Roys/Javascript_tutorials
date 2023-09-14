let test1 = () => {
    console.log(1)
}
let test2 = a => console.log(a+2)

let test3 = (a, b)=>{
    console.log(a + b)
}
console.log("hello Dave")

test1()
test2(2)
test3(2, 3)

// using back ticks
console.log(`"Scalar 
is 
awesome"`)

let a = 24
console.log(`My age is ${a}`)