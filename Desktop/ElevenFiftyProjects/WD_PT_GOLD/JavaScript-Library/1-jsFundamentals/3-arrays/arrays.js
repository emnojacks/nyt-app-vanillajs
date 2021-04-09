//video notes

//arrays are specialized objects - they are built on the back of an object
/*
let students = ["patty", "johnny", "alisa", "moe"];

console.log(typeof students); //returns "object"
console.log(students instanceof Array); // returns true
console.log(students[3]); // prints one item out of array
let name = students[3];
console.log(`hello, ${name}, you look nice today`);

for (i of students) {
    console.log[i + "is a good student"];
};

//array method
students.push("erica");
//push appends element at end of array
console.log(students);
//splice inserts an element into array and removes another element and reindexes
students.splice(1, 1, "harper");
//first number indicates where to insert element
//second number indicates which element to remove
console.log(students);
students.splice(2, 0, "abe");
//this would just add an element and not remove another bc in position 0
//then elements are reindexed
console.log(students);
students.pop() //removes the last element in an array
console.log(students);

//SLICE
let food = ["pizza", "tacos", "burger", "pasta", "soup", "pie"];
//food = food.slice(2, 5);
console.log(food); // this is a segment of the array-you aren't adding anything - just taking a slice of an array 
//first num tells where slice starts, second tells where it ends

//for Each loop

food.forEach(f => {
    console.log(f);
});



let coffee = ["espresso", "latte", "black", "pourover", "frenchpress"];
coffee.push("mocha");
coffee.splice(3, 1, "cappucino");
console.log(coffee);
coffee.forEach(coffee => console.log(coffee));
//check the len of an array 
console.log(coffee.length);
*/

//check if we are working with an array 
//flip the values within the array

let arr = [1, 2, 3, 4, 5];
console.log(arr instanceof Array);
if (arr instanceof Array)
    revArr = arr.reverse();
revArr.array.forEach(numbers => console.log(numbers));