//funcs

//why funcs?
//modular. code reuse, less errors, return values


//normal func
function coffee() {
    return "coffee is good";
}

//anonomys func - unnamed
let tea = function() {
    return 'tea is healthy'
}
console.log(coffee());
console.log(tea());

//arrow func 
//arrow funcs are ALWAYs anonomyous 
//arrow funcs do not get hoisted
let hot_chocolate = () => {
    return 'hot choco is super good'
}

console.log(hot_chocolate());

//concise body vs block body

//concise
let apples = x => `there are ${x} apples`;
console.log(apples(10));

//block body - must have return keyword 
let bananas = (x) => {
    return `there are ${x} bananas`;
}
console.log(bananas(5));