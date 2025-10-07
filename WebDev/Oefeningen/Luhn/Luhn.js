//correcte cijfercode
var correctCode = "4539 3195 0343 6467";

//incorrecte cijfercode
var incorrectCode = "066 123 478";

//code met getallen
var falseCode = "648 ra 4885";

//methode voor valideren van een juiste input
//bij een foute input geef ik false terug
function validateCode(code) {
  //De lengte van de code mag niet kleiner zijn dan 1
  if (code.length <= 1) {
    return false;
  }

  //replaceAll(" ", "") vervangt alle spaties met een lege waarde
  codeWithoutspace = code.replaceAll(" ", "");

  //Door het gebruik van de methode isNumeric kijk ik of de string getallen bevat
  if (!isNumeric(codeWithoutspace)) {
    return false;
  }

  //Als er geen foute syntax voorkomt in de code geef ik true terug
  return true;
}

//methode om te kijken of mijn string enkel getallen bevat
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function Luhn(code) {
  //eerst en vooral controleren van de code
  if (!validateCode(code)) {
    return "De ingegeven code bevat een verkeerde syntax";
  }

  //het vervangen van de spaties + de reeks splitten in een array
  codeSplit = code.replaceAll(" ", "").split("");

  //bij een foreach methode kan ik het element opvragen maar ook de index (de positie van de loop)
  codeSplit.forEach((element, index) => {
    //Bij elke tweede element verdubbel ik de waarde
    if (index % 2 == 0) {
      let newElement = element * 2;
      //Wanneer de nieuwe waarde groter is dan 9 trek ik er 9 vanaf, zoals in de opgave staat
      if (newElement > 9) {
        newElement = newElement - 9;
      }
      //de nieuwe berekende waarde plaats ik terug in de originele array
      //de array bevat allemaal stringwaarden dus ik zorg dat deze ook een string is
      codeSplit[index] = newElement.toString();
    }
  });

  //een variabele 0 voor de optelling
  let sum = 0;
  //Nu ik telkens om de 2 stappen de waarde heb verdubbeld, tel ik alles op
  codeSplit.forEach((element) => {
    //Ik tel converteer telkens de string element naar een int met +element
    sum += +element;
  });

  //Als de som van alle getallen deelbaar is door 10 is het correct
  if (sum % 10 == 0) {
    return "Dit is een correcte LuhnCode";
  }
  return "Dit is geen correcte LuhnCode";
}

console.log(Luhn(correctCode));
