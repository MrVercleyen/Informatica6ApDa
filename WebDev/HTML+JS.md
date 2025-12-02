# HTML + JS

In het 5de jaar leerden we statische webpagina's maken.
Een statische webpagina is een webpagina dat enkel wordt gebruikt om data af te beelden en kan dus niet veranderen door de input van de gebruiker, hierdoor de naam statisch.

Wanneer we elementen dynamisch willen aanpassen in een webpagina gebruiken we javascript.

In dit onderdeel leer je hoe je in een html-pagina javascript code kan gaan toevoegen.

## De HTML-pagina

Dit is de inhoud van een index.html bestand van een eenvoudige webpagina.

We beschikken over een head met een titel en een lege body en een header.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
    </body>
    </html>

Hier kunnen we andere elementen aan toevoegen met HTML-code maar dit blijft een statische pagina.

## Javascript in de HTML-pagina

Wanneer we javascriptcode willen toevoegen aan de HTML-pagina gebruiken we de script-tag.

Deze plaatsen we steeds op het einde van het body element

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <script></script>
    </body>
    </html>

Enkel in deze tags gaan we javascriptcode gaan schrijven.

Wanneer we werken in VsCode zien we dat het programma de code kan lezen en jou kan helpen met foutmeldingen.

Voor een eenvoudige test om na te gaan of javascript werkt kunnen we een alert laten verschijnen.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <script>
            alert("ok")
        </script>
    </body>
    </html>

De code in de script-tag wordt stap voor stap uitgevoerd.
Hier kunnen we dus eenvoudige funcionaliteit in gaan schrijven.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <script>
            let getal = 5;
            if(getal > 4){
                alert("Het getal is groter dan 4");
            } else {
                alert("Het getal is kleiner dan 4");
            }
        </script>
    </body>
    </html>

Als we deze code testen in een webpagina zien we dat deze direct wordt uitgevoerd na het laden van de pagina.
Er verschijnt meteen een popup met de boodschap

    "Het getal is groter dan 4"

Probeer zelf eens de variabele getal aan te passen naar een getal kleiner dan 4 en kijk wat er gebeurt.

## Interactie met de gebruiker

Het voornaamste doel dat we willen bereiken bij het maken van dynamische webapplicaties is de gebruiker hun interactie toestaan en dan ook gebruiken.

Hiervoor gaan we vaak input-elementen gebruiken

Neem nu ons voorbeeld van het vorige onderdeel.
Hier voegen we een input-element aan toe, we willen graag dat de gebruiker enkel getallen kan invoeren dus kiezen we voor een type = number.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <input type="number" />
        <script>
            let getal = 5;
            if(getal > 4){
                alert("Het getal is groter dan 4");
            } else {
                alert("Het getal is kleiner dan 4");
            }
        </script>
    </body>
    </html>

Wanneer we HTML-elementen aan willen spreken vanuit javascriptcode gebruiken we id's.
Dit gebruiken we ook voor css toe te voegen aan elementen.

Hier kiezen we voor een eenvoudig en duidelijk id, 'inputveld'.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <input type="number" id="inputveld" />
        <script>
            let getal = 5;
            if(getal > 4){
                alert("Het getal is groter dan 4");
            } else {
                alert("Het getal is kleiner dan 4");
            }
        </script>
    </body>
    </html>

Om de input op te halen die de gebruiker invoerde in het inputveld gebruiken we deze javascriptcode

    document.getElementById("inputveld").value

Waarbij 'document' de html-file aanspreekt en de getElementById methode het element gaat ophalen met het id "inputveld".
Tenslotte halen we de inhoud van een inputveld op met de property 'value'.

Nu kunnen we de value van dit inputveld gebruiken in de javascript code.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <input type="number" id="inputveld" />
        <script>
            let getal = document.getElementById("inputveld").value;
            if(getal > 4){
                alert("Het getal is groter dan 4");
            } else {
                alert("Het getal is kleiner dan 4");
            }
        </script>
    </body>
    </html>

Herinner je dat de code die we in de script-tags plaatsen meteen worden uitgevoerd wanneer de webpagina wordt ingeladen.

De gebruiker kan natuurlijk enkel een waarde in het inputveld meegeven nadat de webpagina is ingeladen.

Hoe lossen we dit op?

We gebruiken hiervoor eventhandlers, dit is een functie van html en javascript waarbij we met een rijk assortiment aan events methodes in javascript kunnen oproepen op basis van de handeling van de gebruiker.

Bekijk maar eens de lange lijst aan events die we kunnen gebruiken op html-elementen.

[eventlijst](https://www.w3schools.com/tags/ref_eventattributes.asp)

De voornaamste events die wij gaan gebruiken zijn

    //Wanneer er op een elemente geklikt wordt
    onclick

    //Wanneer de waarde van een input wijzigt
    onchange

    //Wanneer er op een toets geduwd wordt
    onkeydown

Voor deze oefeningen gaan we nu het onchange event gebruiken.
Want telkens wanneer de gebruiker de waarde van het inputveld aanpast willen we de code opnieuw uitvoeren.

Dit doen we door het attribuut "onchange" toe te voegen op het input-element.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <input type="number" id="inputveld" onchange="" />
        <script>
            let getal = document.getElementById("inputveld").value;
            if(getal > 4){
                alert("Het getal is groter dan 4");
            } else {
                alert("Het getal is kleiner dan 4");
            }
        </script>
    </body>
    </html>

Het onchange event verwacht een javascript methode.
Dus we plaatsen de javascript code die we schreven in de script-tags in een methode.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1>Pagina</h1>
        <input type="number" id="inputveld" onchange="inputchanged()" />
        <script>

            function inputchanged(){
                let getal = document.getElementById("inputveld").value;
                if(getal > 4){
                    alert("Het getal is groter dan 4");
                } else {
                    alert("Het getal is kleiner dan 4");
                }
            }

        </script>
    </body>
    </html>

Net zoals we deze zouden oproepen in javascript plaatsen we deze in het onchange-event.

Test dit maar even uit en kijk wat er gebeurt.

## Het aanpassen van HTML-elementen

Net zoals we data kunnen ophalen van HTML-elementen, kunnen we deze ook aanpassen.

Stel nu dat we op basis van het meegegeven getal bij het laatste voorbeeld geen popup willen tonen maar de kleur van de titel willen aanpassen.

Dat doen we met deze javascriptcode.

    document.getElementById("elementId").style.color = "red"

Hier halen we net zoals bij het vorige voorbeeld het element op via de id en spreken we de html attributen aan.

Hier spreken we style aan en vervolgens de color property. Deze geven we de waarde "red", een rode kleur.

Als we dit aanpassen in het vorige voorbeeld krijgen we volgende code.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1 id="hoofdtitel">Pagina</h1>
        <input type="number" id="inputveld" onchange="inputchanged()" />
        <script>

            function inputchanged(){
                let getal = document.getElementById("inputveld").value;
                if(getal > 4){
                    document.getElementById("hoofdtitel").style.color = "red"
                } else {
                    document.getElementById("hoofdtitel").style.color = "green"
                }
            }

        </script>
    </body>
    </html>

Merk op dat we de header een id gaven "hoofdtitel".
Op basis van de input van de gebruiker geven we deze een rode of een groene kleur.

Test dit maar even uit.

We kunnen deze code ook nog vereenvoudigen door in de HTML-pagina meteen de property 'value' mee te geven aan de methode.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Pagina</title>
    </head>

    <body>
        <h1 id="hoofdtitel">Pagina</h1>
        <input type="number" id="inputveld" onchange="inputchanged(value)" />
        <script>

            function inputchanged(val){
                if(val > 4){
                    document.getElementById("hoofdtitel").style.color = "red"
                } else {
                    document.getElementById("hoofdtitel").style.color = "green"
                }
            }

        </script>
    </body>
    </html>

Deze vangen we dan op als inkomende property in onze methode "inputchanged(val)" en gebruiken de variabele val in onze code.

Dit kunnen we ook gebruiken met het onKeyDown-event, hier geven we het event mee aan de methode.

    <body onkeydown="methode(event)">

Vervolgens kunnen we nagaan welke knop werd ingeduwd met de keyCode property in de javascriptcode.

    function methode(event){
        console.log(event.keyCode);
    }

Kijk maar eens naar de verschillende keycodes, voor elke toets op het toetsenbord is er een code.

[keycodeList](https://www.toptal.com/developers/keycode/table)

## HTML-inhoud toevoegen aan een bestaand HTML-element

Een veel gebruikte functionaliteit bij javascript is dat we HTML-code kunnen genereren en toevoegen aan een bestaand HTML-element.

Stel dat we een lijst willen genereren en deze toevoegen aan een bestaande div in de HTML-pagina.

In onderstaande code houden we een lijst van strings bij en willen deze afbeelden op onze HTML-pagina.
Dit kunnen we doen door te itereren (loopen) over onze lijst en voor elk element een nieuw HTML-element aan te maken en deze te plaatsen in een string.

Ten slotte voegen we de string toe aan ons HTML-element met behulp van het keyword 'innerHTML'.

    function renderElements() {
      let containerContent = "";

      elements.forEach((element) => {
        containerContent +=
          "<div>" + element + "</div>";
      });

      document.getElementById("elementcontainer").innerHTML = containerContent;
    }



## Een aparte javascriptfile

Wanneer we javascript code schrijven in een HTML-pagina kan dit snel ophopen en onoverzichtelijk worden.
Daarom gaan we steeds te werk met een apart javascript-bestand.

Dit kunnen we gaan doen door in de script-tag te refereren naar het javascript-bestand met het src-attribuut.

    <script src="script.js"></script>

Vervolgens zal bij het laden van de webpagina de javascript code uit het bestand worden uitgevoerd net zoals ze tussen de script-tags zouden staan.
