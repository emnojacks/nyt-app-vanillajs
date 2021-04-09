//you can define vars after you use them 
//it's a lazy way to program
//hoisting hoists vars to the top of the code when they aren't defined until later

let scissors;
console.log(scissors);
scissors = 'blue';


function hoistTest() {
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();