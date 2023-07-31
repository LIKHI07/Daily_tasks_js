let character = {
  firstName: 'Captain',
  lastName: 'America'
};
let avenger = { ...character };
let { lastName, ...avenger2 } = character;
//console.log(avenger);
//console.log(avenger2);

//ADD
let person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
person.nationality = "English";
let sentence = person.firstname + " is " + person.nationality + ".";
  //console.log(sentence);

//DELETE
   person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  delete person.age;
  sentence = person.firstname + " is "  + " years old.";
 console.log(sentence);

//UPDATE
 person = {
  firstname: "Mathew",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};
person.nationality = "English";
sentence = person.firstname + " is " + person.nationality + ".";
//console.log(sentence);