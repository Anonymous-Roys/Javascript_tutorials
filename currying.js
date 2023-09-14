let sum = function (x, y) {
    console.log(x+y)
}

sum(2, 3)

let sumCurried = function (x) { 
    return function (y,z) { 
        console.log(x+y+z);
    }
}

let sumTwoNumbers = sumCurried(2);

sumTwoNumbers(12,23);