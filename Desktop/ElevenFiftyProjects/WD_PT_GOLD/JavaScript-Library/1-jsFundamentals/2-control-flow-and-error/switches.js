//switches are diff than if else statements and ternarys
//they a little less elegant bc they execute all code unless you put in a break

let friend = "Kenn"

switch (friend) {
    case "Tom":
        console.log("tommy bring me bread")
        break;
    case "Kenn":
        console.log("kenn bring me bread")
        break;
    case "alex":
        console.log("alex bring me bread ")
        break;
    default:
        console.log("im sorry boo no bread for you");

}


let answer = true;

switch (typeof answer == "string" || typeof answer == "boolean") {
    case true:
        console.log("answer is a string or a boolean");
        break;
    default:
        console.log("answer is not a string or a boolean")
}