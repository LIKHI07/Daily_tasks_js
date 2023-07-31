var num1 = 21;//global scope
var num3 
function fun() {
var num2 = 65;//local(function)scope
if(num2 === 65) {
var num3 = 44; //block scope (within an if statement)
console.log("NuminIF",num3)

}
}
// console.log("Numbefore:",num3)
fun()
console.log("Numbeafter",num3)


//var in global declaration
var a = 10;
//console.log(a); 

//var in function scope
var x = 5;
var y = 7;

function func() 
{
 if(x === 5) 
    {
        var y = 10; 
 console.log(x); 
 console.log(y); 
    }
     
}
 
func();
 
console.log(x); 
console.log(y);
