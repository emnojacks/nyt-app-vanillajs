/*var myName = "Em J"
var friendName = "Em J"
var len1 = myName.length
console.log(len1)
var len2 = friendName.length
console.log(len2)

if (len1 > len2) {
    console.log(len1 - len2)
    console.log(myName, "is longer than", friendName)
} else if (len1 < len2) {
    console.log(len2 - len1)
    console.log(friendName, "is longer than", myName)
} else {
    console.log("The names are the same length!")
}
*/

var age = 56;

function checkingAge() {
    if (age >= 25)
        console.log("You're at least 25. Your insurance premium just went down unless your name is Em J")
    if (age >= 21)
        console.log("You're at least 21. You can drink but don't go White Claw crazy")
    if (age >= 18)
        console.log("You're at least 18. You can vote in a biased two party election, congrats.")
    if (age <= 17)
        console.log("You're 17 or under. You too young foo stay at home and enjo your youth")
}
checkingAge(age)