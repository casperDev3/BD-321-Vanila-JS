// function displayInfo(name: string, age: number): void{
//     console.log(`Name: ${name}, age: ${age}`)
// }
var displayInfo = function (name, age) {
    console.log("Name: ".concat(name, ", age: ").concat(age));
};
var userName = "John";
var age = 15;
displayInfo(userName, age);
