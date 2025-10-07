let isbn = "3-598-21508-8";
let isbn2 = "3-598-21507-X";
let isbn3 = "3-598-21407-X";
let x = 10;
console.log(isbn.split(""));
console.log("Dit is ISBN");
console.log("Dit is niet ISBN");

function correctISBN(x) {
  console.log(x);

  //Alles opsplitsen in een array
  let split = x.split("");

  //lege array voor de nummers
  let numbers = [];
  //enkel de nummers toevoegen aan array
  split.forEach((element) => {
    //als het een '-' waarde is, sla ik deze over
    if (element !== "-") {
      //wanneer de waarde een x is voeg ik een 10 toe
      if (element === "X" || element === "x") {
        numbers.push(10);
        //anders voeg ik het getal simpelweg toe aan de lijst
      } else {
        numbers.push(parseInt(element));
      }
      //numbers.push(element === "X" || element === "x" ? 10 : parseInt(element));
    }
  });

  //het uitvoeren van de bewerking
  let isbnvalue =
    numbers[0] * 10 +
    numbers[1] * 9 +
    numbers[2] * 8 +
    numbers[3] * 7 +
    numbers[4] * 6 +
    numbers[5] * 5 +
    numbers[6] * 4 +
    numbers[7] * 3 +
    numbers[8] * 2 +
    numbers[9] * 1;

  if (isbnvalue % 11 === 0) {
    return "Dit is een correcte ISBN waarde";
  }
  return "Dit is geen correcte ISBN waarde";
  /*return isbnvalue % 11 === 0
    ? "Dit is een correcte ISBN waarde"
    : "Dit is geen correcte ISBN waarde";*/
}

console.log(correctISBN(isbn));

//(d₁ * 10 + d₂ * 9 + d₃ * 8 + d₄ * 7 + d₅
// * 6 + d₆ * 5 + d₇ * 4 + d₈ * 3 + d₉ * 2 + d₁₀ * 1)
//mod 11 == 0

//if(ISBN == correct){
// console.log("dit is een correcte ISBN code")
//}
