// function displayInfo(name: string, age: number): void{
//     console.log(`Name: ${name}, age: ${age}`)
// }

const displayInfo = (name: string, age: number): void => {
    console.log(`Name: ${name}, age: ${age}`)
}

interface userDataTypes {
    name: string,
    age: number
}



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

userData.name = "test"


displayInfo(userName, age)