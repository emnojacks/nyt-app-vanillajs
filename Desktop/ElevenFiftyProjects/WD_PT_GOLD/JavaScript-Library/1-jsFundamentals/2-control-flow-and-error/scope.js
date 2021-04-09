//SCOPE

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope();
console.log(x);


var x = 33;

function scope() {
    //this is variable reassignment - not declaration 
    //and bc global var is available outside func - it is used inside func 
    //then it prints 33 twice bc it turns the global var into 33 once this func is called
    x = 33;
    console.log(x);
}

scope();
console.log(x);

//var vs let
//let does obey block scope 
//var does not obey block scope