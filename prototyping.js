
// Prototyping
let myObj = {}
console.log(myObj);

let person1 = {
    name: "Daves",
    age: 23
}

console.log(person1.hasOwnProperty("name"))



const bird = {
 size: 'small',
};

const mouse = {
 name: 'Mickey',
 small: true,
};


console.log(mouse[bird.size]);
console.log(mouse[bird["size"]]);


const shape = {
 radius: 10,
 diameter() {
 return this.radius * 2;
 },
 perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter);

