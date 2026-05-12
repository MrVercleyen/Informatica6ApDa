# React

## Introductie

Wanneer we zorgvuldiger gaan werken in het ontwikkelen van webapplicaties zullen we vaak gebruik maken van externe technologiën of 'libraries'.
Vaak bouwen we complexere webapplicaties met behulp van een framework, een framework is een verzameling van meerdere libraries om het ontwikkelen van webapplicaties te vereenvoudigen.
Een veel gebruikt framework is React, hier kan je eenvoudig weg javascript en html in éénzelfde bestand schrijven en componenten ontwikkelen die je makkelijk kan hergebruiken.

In deze cursus zullen we zien hoe we React voor het eerst kunnen gebruiken, daarnaast zien we een korte introductie van de meest gebruikte functionaliteiten.

## Installatie

Vooraleer we van start kunnen gaan met webapplicaties te ontwikkelen in React moeten we het framework installeren.
Zoals bij alle andere javascript programma's gebruiken we node om deze te kunnen draaien.

Controleer eerst en vooral of je node geïnstalleerd hebt.
Voer onderstaand commando uit in een console (cmd, git bash, ...)

    node -v

Dit logt jouw lokaal geïnstalleerde node versie uit in de console.

    v22.15.0

Als je geen versie te zien krijgt moet je node nog installeren.
Via deze link kan je de windowsinstaller downloaden en installeren.

https://nodejs.org/en/download

Van zodra dit in orde is kunnen we met behulp van een buildtool een react app bouwen.
Uiteraard moeten we de buildtool eerst nog gaan installeren.
Er zijn verschillende soorten buildtools maar voor deze cursus gebruiken we **Vite**.

Voer onderstaand commando uit om **Vite** te installeren op jouw lokale computer.

    npm install -g create-vite

Merk op dat we hier **npm** gebruiken (node package manager), met het keyword install kunnen we tools installeren en toevoegen.
**-g** staat voor globaal waardoor je de tool over je gehele computer kan gebruiken en **create-vite** is de naam van de te installeren tool.

Als de intallatie slaagt krijg je deze boodschap te zien in je console.

    added 1 package in 649ms

## Jouw eerste React applicatie

Het aanmaken van een React appliacitie kan je voltooien in een aantal korte stappen, zorg eerst en vooral dat je een lege map aanmaakt zonder enige bestanden in.
Open jouw console (cmd, git bash, ...) en navigeer naar de lege map (cd 'lege map').
Eens in de lege map voer je onderstaand commando uit om jouw React applicatie aan te maken.

    npm create vite@latest my-react-app -- --template react

Hier gebruiken we opnieuw **npm**, het keyword **create** laat je een applicatie aanmaken.

- **vite@latest** duid op de buildtool die we gebruiken met de laatste versie.
- **my-react-app** is de naam van jouw applicatie, hier kan je ook een andere naam meegeven.
- **-- --template react** zijn extra argumenten die je meegeeft waar bij je een standaardtemplate kiest genaamd react.

De console zal jou een aantal vragen stellen, vaak mag je gewoon op enter duwen.
Als hij vraagt welk filetype je wil gebruiken kies je **jsx**.

Wanneer het aanmaken van de applicatie is afgerond voer je volgende commando's uit.

    cd my-react-app
    npm install
    npm run dev

- **cd my-react-app** : we navigeren naar de map die we zonet hebben aangemaakt (als je een andere naam voor jouw applicatie gekozen hebt zal deze map ook anders noemen).
- **npm install** : om alle externe dependencies correct te installeren laten we **npm** alles installeren.
- **npm run dev** : dit commando zal je nog vaak nodig hebben, dit runt jouw applicatie.

Wanneer je nu naar deze link surft

    http://localhost:5173/

Zal je jouw applicatie te zien krijgen.

## Root

Net zoals alle andere webapplicaties start een React webapplicatie vanuit een html pagina.
Hier is dit de **index.html** file.

---

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>my-react-app</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
    </html>

---

Het belangrijkste element dat we hier zien is deze lijn code.

    <script type="module" src="/src/main.jsx"></script>

Dit refereert naar onze eerste javascript file waar onze React applicatie start, we heten dit ook de **root** van onze webapplicatie.
De inhoud van deze file ziet er als volgt uit.

---

    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import "./index.css";
    import App from "./App.jsx";

    createRoot(document.getElementById("root")).render(
        <StrictMode>
            <App />
        </StrictMode>,
    );

---

Hier is het de bedoeling dat je nooit iets van code aanpast, het belangrijkste element in deze pagina is.

    <App />

Dit is een verwijzing naar een volgend component, deze wordt bovenaan geimport door

    import App from "./App.jsx";

## Component

Binnen React is het mogelijk om stukken code aan te maken die je overal kan hergebruiken.
Zie dat als een eigen element zoals **div** die je kan aanmaken maar met eigen functionaliteit.

---

    function Book(props) {
        return (
            <div>
                <div>
                    <h2>Mijn boek</h2>
                    <p>9/10</p>
                </div>
                <p>Een goed boek</p>
                <img src="boek.png"/>
            </div>
        );
    }

    export default Book;

---

Dit is de basisopbouw van een component, we hebben een functie die HTML-code terugstuurt.
Op het einde van de file exporteren we deze code die we dan kunnen gebruiken in andere bestanden.

Dit doen we door deze te importeren, dit is het handige aan React, je importeert enkel wat je nodig hebt.
Het importeren doe je op deze manier.

    import Book from "./Book";

Alle geïmporteerde componenten plaats je steeds bovenaan in jouw bestand.

Om het component te gebruiken in jouw code plaats je deze in de code van jouw html op dezelfde manier alsof je een html-element zou neerschrijven.

    <Book/>

### Properties

We kunnen componenten gaan uitbreiden met behulp van properties, dit doe je door attributen toe te voegen aan jouw component.

    <Book
          title={"Mijn boek"}
          reason={"Een goed boek"}
          score={"9"}
          img={"boek.png"}
        />

Als we deze willen gebruiken in het component zelf maken we gebruiken van de **props** parameter.

Terug naar ons component.

---

    function Book(props) {
        return (
            <div>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.score}/10</p>
                </div>
                <p>{props.reason}</p>
                <img src={props.img}>
            </div>
        );
    }

    export default Book;

---

Nu kunnen we dit component meerdere malen gebruiken met verschillende argumenten mee te geven.

---

     <Book
          title={"Mijn boek"}
          reason={"Een goed boek"}
          score={"score"}
          img={"boek.png"}
        />
     <Book
          title={"Een ander boek"}
          reason={"Een nog beter boek"}
          score={"10"}
          img={"anderboek.png"}
        />

---

Test de code maar eens uit.

## Map

In een React component kunnen we eenvoudig javascript code toevoegen en deze onmiddelijk gebruiken in onze html pagina.

Een handige functie die we vaak gaan gebruiken is de **.map()** functie.
Deze zal over een lijst gaan itereren (loopen) en dan kunnen we met elk element uit de lijst iets renderen.
Een beetje zoals een **foreach** in javascript.

---

    function App() {
        let boeken = [
            {
                title: "Mijn boek",
                reason: "Een goed boek",
                score: "9",
                img: "boek.png",
            },
            {
                title: "Een ander boek",
                reason: "Een nog beter boek",
                score: "10",
                img: "anderboek.png",
            },
        ];

        return (
            <>
            <h1>My Top Books</h1>
                {boeken.map((boek) => (
                    <Book
                        title={boek.title}
                        reason={boek.reason}
                        score={boek.score}
                        img={boek.img}
                    />
                ))}
            </>
        );
    }

    export default App;

---

Vooraleer we onze html code teruggeven maken we een lijst aan met objecten boven de returnwaarde.
Merk op dat we deze gaan gebruiken in de html code zelf met behulp van accolades '{ }'.

Test deze code zelf maar eens uit!
