//FOR loop 

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


for (let i = 2; i >= -25; i -= 3) {
    console.log(i)
}

name = "emily"

for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}

let start = 2;
let stop = Math.floor(Math.random() * 30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment) {
    console.log(i);
}

//FOR IN loops

let student = {
    name: "peter",
    enrolled: true,
    degree: 'js',
    week: 1
}

//printing all key value pairs in an object 

//the first name in the ARRAY name can be treated as the "item" - it is a substitute 
for (item in student) {
    console.log(item);
    console.log(student[item])
}

let dogArray = ['beagle', 'daschund', 'pug', 'collie'];
for (dog in dogArray) {
    console.log(dog);
    console.log(dogArray[dog]);
}

//for in loop that capitalizesthe first letter of a name

let instructor = "emiLy";
let capName;


//here you treat the letters in the string like an array 
//you fix the capital letter isssue
//n is the index of 0 for the first subindex in the name array 
for (n in instructor) {
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);


let player = {
    firstname: "pete",
    degree: 'english',
    week: 2
}

//FOR OF LOOP requires your items to be iterable 
//it needs to be numbered 
for (item of player) {
    console.log(item);
}

//for in loops can work with non numeric items

//for of loop working with array -- does not console log the indices

let catArray = ['beagle', 'daschund', 'pug', 'collie'];
for (cat of catArray) {
    console.log(cat, "barks");
}