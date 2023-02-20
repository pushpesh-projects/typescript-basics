console.log("-------example 1--------")

function full_name(personName: { first_name: string; last_name: string}): string{
    return `${personName.first_name} ${personName.last_name}`;
}

console.log(full_name({first_name: "Pushpesh", last_name: "Kumar"}));

console.log("-------example 2--------")
// Access properties
// console.log(full_name({first_name: "Pushpesh", last_name: "Kumar", age: 30})); This is not allowed to pass extra properties when we are passing inline

const person = {
    first_name : "Pushpesh",
    last_name : "Kumar",
    age : 30
}

console.log(full_name(person)) // However this is allowed

console.log("-------example 3--------")
// type alias

type Person = { 
    first_name : string,
    sur_name : string
}

const Person_1 : Person =
{
    first_name : "Pushpesh",
    sur_name : "Kumar"
}

function person_name (person: Person){
    return person.first_name+ " " + person.sur_name;
}

const p_name = person_name(Person_1)

console.log(p_name)



