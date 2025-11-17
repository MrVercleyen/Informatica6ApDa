//variables datatypes

let state = "";
var age = 18; // number
var name = "Jane"; // string
var truth = false; // boolean
var sheets = ["HTML", "CSS", "JS"]; // array
var a = null;

//if else statements
if (age >= 14 && age < 19) {
  // logical condition
  state = "Eligible."; // executed if condition is true
} else {
  // else block is optional
  state = "Not eligible."; // executed if condition is false
}

//switch

switch (
  new Date().getDay() // input is current day
) {
  case 6: // if (day == 6)
    text = "Saturday";
    break;
  case 0: // if (day == 0)
    text = "Sunday";
    break;
  default: // else...
    text = "Whatever";
}

//loops

let count = 0;

for (var i = 0; i < 10; i++) {
  count += 5;
}
var sum = 0;

var i = 1; // initialize
while (i < 100) {
  // enters the cycle if statement is true
  i *= 2; // increment to avoid infinite loop
  console.log(i + ", "); // output
}

//functions
function addNumbers(a, b) {
  return a + b;
}
x = addNumbers(1, 2);

// operatoren

a = b + c - d; // addition, substraction
a = b * (c / d); // multiplication, division
x = 100 % 48; // modulo. 100 / 48 remainder = 4
a++;
b--; // postfix increment and decreme

a = b; // assignment
a == b; // equals
a != b; // unequal
a === b; // strict equal
a !== b; // strict unequal
a < b || a > b; // less and greater than
a <= b || a >= b; // less or equal, greater or eq
a += b; // a = a + b (works with - * %...)
a && b; // logical and
a || b; // logical or

//arrays
var dogs = ["Bulldog", "Beagle", "Labrador"];
var dogs = new Array("Bulldog", "Beagle", "Labrador"); // declaration

alert(dogs[1]); // access value at index, first item being [0]
dogs[0] = "Bull Terier"; // change the first item

for (var i = 0; i < dogs.length; i++) {
  // parsing with array.length
  console.log(dogs[i]);
}

dogs.toString(); // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * "); // join: "Bulldog * Beagle * Labrador"
dogs.push("Chihuahua"); // add new element to the end
var animals = dogs.concat(cats, birds); // join two arrays (dogs followed by cats and birds)
dogs.slice(1, 4); // elements from [1] to [4-1]
dogs.reverse(); // sort string in descending order

//script tag html
<script src="filename.js"></script>;

//edit Html ELement
document.getElementById("elementID").innerHTML = "Hello World!";

//events🕖
<button onclick="myFunction();">Click here</button>;
