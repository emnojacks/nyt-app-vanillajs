//ternaries

let x = 6;
x > 0 ? console.log("x is positive") : console.log("x is negative");

//above code is a ternary and it does the same thing as the if else below

if (x < 0) {
    console.log("x is negative");
} else {
    console.log('x is negative')
}

if (greeting.length > 10) {
    console.log("that's a long greeting")
} else if (greeting.length == 10) {
    console.log("your greeting is normal")
} else {
    console.log("short greeting")
}

greeting.length > 10 ? console.log('that is a long greeting') :
    greeting.length == 10 ? console.log('your greeting is 10 chars') :
    console.log("normal greeting");

//use colons in ternaries 
//final colon defines the default case