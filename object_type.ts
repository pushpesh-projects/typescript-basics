console.log("-------example 1--------");

function full_name(personName: {
  first_name: string;
  last_name: string;
}): string {
  return `${personName.first_name} ${personName.last_name}`;
}

console.log(full_name({ first_name: "Pushpesh", last_name: "Kumar" }));

console.log("-------example 2--------");
// Access properties
// console.log(full_name({first_name: "Pushpesh", last_name: "Kumar", age: 30})); This is not allowed to pass extra properties when we are passing inline

const person = {
  first_name: "Pushpesh",
  last_name: "Kumar",
  age: 30,
};

console.log(full_name(person)); // However this is allowed

console.log("-------example 3--------");
// type alias

type Person = {
  first_name: string;
  sur_name: string;
};

const Person_1: Person = {
  first_name: "Pushpesh",
  sur_name: "Kumar",
};

function person_name(person: Person) {
  return person.first_name + " " + person.sur_name;
}

const p_name = person_name(Person_1);

console.log(p_name);

console.log("-------example 4--------");
// optional properties
type Employee = {
  emp_name: String;
  emp_id: number;
  emp_add?: string;
};

const emp1: Employee = {
  emp_name: "Jigyansh Pandey",
  emp_id: 1,
};

function emp_details(emp: Employee) {
  console.log(emp);
}

emp_details(emp1);

console.log("-------example 5--------");
// readonly properties
type Subject = {
  readonly sub_id: number;
  sub_name: string;
};

const sub1: Subject = {
  sub_id: 1,
  sub_name: "MATH",
};

sub1.sub_name = "ENGLISH";
// sub1.sub_id = 2; This is not allowed
