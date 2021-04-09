//bronze level challenge

/*function getNum() {
//window.prompt
let FB = console.log("Enter a whole number: ");
return Number(FB);
}

FB = getNum()

function fizzbuzz() {
    if (FB % 5 === 0) {
        console.log("fizz");
    } else if (FB % 3 === 0) {
        console.log("buzz");
    } else if (FB % 5 === 0 && FB % 3 === 0) {
        console.log("fizz buzz");
    } else {
        console.log(`Your number ${FB}, is not divisible by either 3 or 5.`)
    }
}

fizzbuzz(FB); 


//silver level challenge 

var FB;
FB = 29;

switch (true) {
    case (FB % 15 === 0):
        console.log("fizz buzz");
        break;
    case (FB % 5 === 0):
        console.log("buzz");
        break;
    case (FB % 3 === 0):
        console.log("buzz");
        break;
    default:
        console.log("Your number aint divisible by 3 or 5");
        break;
}
*/
//gold ternaries


function fizzbuzz() {
    let FB = 200;
    (FB % 15 === 0) ? console.log("Fizzbuzz. You're number is divisible by 5 and 3"):
        (FB % 5 === 0) ? console.log("Fizz. You're number is divisible by 5") :
        (FB % 3 === 0) ? console.log("Buzz. You're number is divisible by 3") :
        console.log(`${FB} is not divisible by 5 or 3.`)
}

// Bronze
/* Create for loop that runs until it has reached the end of the alphabet array, and prints each letter to the console */
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//for in loop 
/*
for (letter in alphabet) {
    console.log(alphabet[letter]);
}
// Silver
/* Write a conditional nested inside of for loop that checks if the 
index of each character in the alphabet array is even or odd. If the index is even, 
console.log letter. If index is odd, console.log "index is an odd number" 
for (letter in alphabet) {
    if (letter % == 0) {
        console.log(`the letter is ${alphabet[letter]});
    }
    else { console.log("index is an odd number")}
}
}

let myNums = [1, 2, 3, 4, 5, 6];

//for of loop - for values 
for (num of myNums) {
    console.log(myNums[num]);
}


let myNums = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < myNums.length; i++) {
    console.log(myNums[i]);
}

//GOLD
//convert the following conditional into a ternary

for in loops are for keys 
for of loops are for values
for (letter in alphabet) {
    if (letter % 2 == 0) {
        console.log(`the letter is ${alphabet[letter]}`);
    } else { console.log("index is an odd number") }
}

for (letter in alphabet) {
    letter % 2 === 0 ? console.log(`the letter is ${alphabet[letter]}`) : console.log("index is an odd number");
}
*/
//spicy gold 

/* GOLD
Declare a globally scoped variable of arr that is initialized as an empty array. 
If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
}

let arr = [];
let vowels = ["A", "E", "I", "O", "U"];

/*
for (character in fellowshipOfTheRing.members) {
    if (character[0] != vowels[0]) {
        arr.push(character);
    }
}
console.log(arr);


for (character in fellowshipOfTheRing.members) {
    let firstLetter = character.charAt(0);
    if (firstLetter != vowels) {
        arr.push(character);
        vowels++;
    }
}
console.log(arr);

*/