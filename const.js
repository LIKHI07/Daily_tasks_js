//block scope
const MY_FAV = 7;

if (MY_FAV === 7) {
  // This is fine because it's in a new block scope
  const MY_FAV = 20;
  //console.log(MY_FAV); 
}

// const in global scope
const FCC = "Himachal"; 
let fact = "is cool!"; 
 fact = "is awesome!";
//console.log(FCC, fact); 

// const in local scope
const someVar = "Hat";
function myFun() {
  const someVar = "Head";
  console.log(someVar);

  return someVar;
}

console.log(someVar);
myFun()

