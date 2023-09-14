//Primitve And Reference datatypes


let primitive = () => {
    firstperson = "dave";
    secondperson = firstperson;
    firstperson = "Jason";


    console.log(firstperson);
    console.log(secondperson);
}

// ----reference-----
ref = () => {
    firstperson = {
        name: "daves",
        age: 23
    }
    secondperson = firstperson;
    firstperson.name = "jason"

    console.log(firstperson);
    console.log(secondperson);
}