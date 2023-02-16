// Define type of function parameters
function greet(fname: string, lname: string){
    console.log(`Hello ${fname} ${lname}`);
}
greet("Pushpesh", "Kumar");

// Define type of return type of function
function full_name(fname: string, lname: string): string{
    console.log(`Hello ${fname} ${lname}`);
    return `Hello ${fname} ${lname}`;
}
full_name("Pushpesh", "Kumar");

// Define function with default values
function sum(num1: number = 10, num2: number = 20){
    console.log(num1+num2);
}
sum();
sum(30, 40);

// function expression
let address = function (city: string , country: string): string{
    return `${city} {country}`;
}
address("Oslo", "Norway");

// arrow function
let phone = (phone: string) => {
    return `${phone}`;
}
phone("91285968");

// void type
function hello(): void{
    console.log("Hi")
    // return 10; Type 'number' is not assignable to type 'void'.ts(2322)
}
hello();