
// to switch to strict Mode type " 'use strict' "
// first case of 'this' :: non-strict, node.js

// FUNCTIONS
// callback functions
let callback = () => {
    function firstName(firstName, cb){
        console.log(firstName);
        cb("Arhin");
    }

    function lastName(lastName){
        console.log(lastName);
    }

    firstName("Daves", lastName);
}
//callback 2
let callback_2 = () => {
    const isEven = (n) => {
        return n%2 == 0;
    }
    let printResult = (evenFn, num) => {
        const isNumEven = evenFn(num)
        console.log(`The number ${num} is an even number: ${isNumEven}`)
    }
    printResult(isEven, 1)
}
