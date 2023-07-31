//let in blockscope
let x = 10;
if (x == 10) {
    let x = 20;
    //console.log(x); 
}


// let in globalscope
let myGlobal = 10;
oopsGlobal = 5;
function fun1() {
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
 // console.log(output);
}
fun2()

//let in functionscope
var printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
