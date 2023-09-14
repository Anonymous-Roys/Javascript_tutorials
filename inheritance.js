
// Inheritance
let inheritance = () => {
    class Mammal{
        constructor(_name, _age, _walk){
            this.name = _name 
            this.age = _age
            this.walk = _walk
            this.about = function(){
                console.log(`The animal "${this.name}" is ${this.age} years old`)
            }
            
        }
        welcome(){
            console.log(`The animal "${this.color}"`)
        }
         
    }
    class Dog extends Mammal{
        constructor(_name, _age, _walk, _color){
            super(_name, _age, _walk)
            this.color = _color
            console.log(`The animal "${this.name}" is ${this.age} years old and ${this.color}`)
        }
        test(){
            super.welcome()
        }
    }
    let dog = new Dog("Dog", 32, "yes", "brown")
    dog.welcome()
}



