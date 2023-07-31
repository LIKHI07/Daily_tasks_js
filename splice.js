//add using splice
function citynames(arr) {
    arr.splice(0, 2, "Bangalore", "pune");
    return arr;
  }
  
  //console.log(
    citynames([
      "trivandrum",
      "mumbai",
      "chennai",
      "Hyderabad",
      "kolkata"
    ])
    

  //remove elements using splice
  let array = ["friday", "is", "not", "so", "boring"];
  array.splice(2, 2);
  console.log(array);