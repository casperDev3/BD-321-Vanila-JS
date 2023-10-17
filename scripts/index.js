// function displayInfo(name: string, age: number): void{
//     console.log(`Name: ${name}, age: ${age}`)
// }
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Gatway"] = 500] = "Gatway";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success);
var displayInfo = function (name, age) {
    console.log("Name: ".concat(name, ", age: ").concat(age));
};
var x = 5;
console.log(x.length);
var userName = "John";
var age = 15;
var isAdult = age > 18;
var test2 = 12;
var teswt3 = null;
var test4 = undefined;
var userData = {
    name: "John",
    age: 21
};
userData.name = "21";
displayInfo(userName, age);
