function greet() {
    let name = 'dave';

    function displayName() { 
        console.log('Hello ' + name);
        let age = 18;

        function displayAge() {
            console.log('Age: ' + age + ' ' + name);
        }
        return displayAge();
    }
    return displayName();
    
}

let g1 = greet()
g2 = g1()