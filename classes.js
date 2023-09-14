//Constructor functions
function functionFn(){
    function createCar(_name, _company, _color){
        this.name = _name
        this.company = _company
        this.color = _color 
    }
    let car1 = new createCar("X4", "BMW", "Red")
    console.log(car1);
}

// classes
function classes() {
    class Person{
        constructor(_name, _age){
            this.name = _name
            this.age = _age
            this.drive = function(){
                console.log(`I am ${this.name} `)
            }
        }
    } 
    let Person1 = new Person("Adam", 23);
    console.log(Person1)
    Person1.drive()    
}
