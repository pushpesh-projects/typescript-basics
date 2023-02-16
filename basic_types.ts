//string type
let fname: string = "Pushpesh";
fname = "kanchan";
console.log(fname);

// number type
let count: number = 1;
count = 2;
console.log(count);

// boolean type
let flag: boolean = true;
flag = false;
console.log(flag);

//type inference
let lname = "Pandey"; // here we did not explicitly define the type of lname but typescript based on value infers the type
console.log(lname);
// lname = 8; Type 'number' is not assignable to type 'string'.

// any type

let a: any;
a = "I am a string now";
console.log(a);
a = 6;
console.log(a);
a = true;
console.log(a);
a = [10, 15, 18];
console.log(a);
a = { name: "Kanchan" };
console.log(a);
