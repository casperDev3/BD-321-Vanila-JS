// function displayInfo(name: string, age: number): void{
//     console.log(`Name: ${name}, age: ${age}`)
// }

enum StatusCode {
    NotFound = 404,
    Success = 200,
    BadRequest = 400,
    Gatway = 500
}

console.log(StatusCode.Success)

const displayInfo = (name: string, age: number): void => {
    console.log(`Name: ${name}, age: ${age}`)
}

interface userDataTypes {
    name: string,
    age: number
}

let x: any = 5
console.log((<string>x).length)


let userName : any = "John";
let age : number = 15;
let isAdult : boolean = age > 18;

let test2: unknown = 12;

let teswt3: null = null;
let test4: undefined = undefined;

let userData: userDataTypes = {
    name: "John",
    age: 21
}

userData.name = "21"


displayInfo(userName, age)