//Een globale lijst voor alle nummers bij te houden
let elements = [];

//Methode die wordt opgeroepen bij het drukken op de button
function voegTelefoonToe() {
  //De waarde van de input wordt opgehaald en meteen aan de checkNumber methode meegegeven
  let nummer = checkNumber(document.getElementById("inputtelefoon").value);

  //Als de waarde die teruggegeven werd niet null is wordt deze aan de lijst toegevoegd
  if (nummer != null) {
    elements.push(nummer);

    //De html elementen worden gegenereerd
    generateList();
  }
}

//Een methode om de lijst om te zetten naar HTML-elementen
function generateList() {
  //We starten met een lege inhoud
  containerContent = "";

  //We itereren over alle telefoonnummers
  elements.forEach((element) => {
    //Voor elk element voegen we een element toe
    containerContent += "<div>" + element + "</div>";
  });

  /*
  Zelfde code als er boven maar met een for-loop
  for(let i = 0;i++; i < elements.length){
    containerContent += "<div>" + elements[i] + "</div>";
  }
  */

  //Ten slotte voegen we de elementen toe aan de inhoud van de bestaande div op de HTML-pagina
  document.getElementById("telefoonnummers").innerHTML = containerContent;
}

//Een methode die de getallen uit de string haalt en controle uitvoert
function checkNumber(number) {
  //We starten met een lege string van getallen
  let onlyDigits = "";

  //We itereren over het getal
  for (let i = 0; i < number.length; i++) {
    //Met een zelfgeschreven aparte functie kijken we of de waarde een nummer is
    if (isNumeric(number[i])) {
      //Als het een nummer is voegen we deze toe aan de string
      onlyDigits += number[i];
    }
  }

  //Een laatste controle om na te gaan of er 10 getallen zijn
  if (onlyDigits.length == 10) {
    //Als er 10 getallen zijn worden deze geformateerd naar de correcte syntax
    return formatNumber(onlyDigits);
  } else {
    //Als er geen 10 getallen zijn dan tonen we een correcte foutboodschap
    alert("Dit is geen correct nummer");
    //we retourneren null
    return null;
  }
}

//Een functie om het nummer correct te formateren
function formatNumber(number) {
  return (
    number[0] +
    number[1] +
    number[2] +
    number[3] +
    "/" +
    number[4] +
    number[5] +
    "." +
    number[6] +
    number[7] +
    "." +
    number[8] +
    number[9]
  );
}

//Een functie om na te gaan of een string een nummer is
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
