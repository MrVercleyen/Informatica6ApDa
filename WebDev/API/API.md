# API

In dit semester focusen we ons op het maken van API met behulp van javascript
Met een API of een Application Programming Interface creeëren we een onzichtbare communicatielaag tussen een webapplicatie en een server.

We zagen in het vorig semester hoe we met de hulp van javascript een interactieve webapplicatie kunnen ontwikkelen.
Wanneer we enkel een interactieve webapplicatie gebruiken spreken we over een client-side webapplicatie.
Door het toevoegen van een API-laag en veel functionaliteit naar de server (backend) plaatsen spreken we over een server-side webapplicatie.

# Promise

Vooraleer we requests uitsturen naar een bestaande API moeten we het eerst hebben over een Promise.
Een Promise is een soort variabele die asynchroon wordt uitgevoerd, dit betekent dat het programma vaak nog niet weet wat de waarde is van de Promise op het moment dat deze aangemaakt wordt.

Een voorbeeld van een Promise die we zelf aanmaken

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
        }, 300);
    });

Merk op dat we twee methodes als variabelen hebben bij de promise 'resolve' & 'reject'
De resolve methode wordt gebruikt wanneer de promise correct wordt afgehandeld.
De reject methode wordt gebruikt wanneer de promise incorrect wordt afgehandeld.

Bij deze code geven we de waarde "foo" terug met een correcte afhandeling.
De timeout die rond deze afhandeling staat zorgt ervoor dat de promise 300 milliseconden neemt om uitgevoerd te worden.

Vervolgens kunnen we deze promise als volgt gaan gebruiken

    myPromise
        .then((result) => {
            console.log(result);
        });

Waarbij de .then() methode de response terugkrijgt wanneer de Promise deze teruggeeft (dus na 300 milliseconden).
Vervolgens wordt het resultaat simpelweg uitgeprint.

Output:

    foo

de .then() methode kunnen we bij een promise oneindig lang aan elkaar chainen.

Bijvoorbeeld:

    myPromise
        .then((result) => {
            return result + " test";
        }).then((data) => {
            console.log(data);
        });

Met deze code krijgen we de response binnen van de promise en voegen er een stuk tekst aan toe.
Bij de volgende .then() methode printen we het resultaat terug uit.

Output:

    foo test

Wanneer we gebruik makjen van de reject in onze Promise

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("foo");
        }, 300);
    });

Zullen we niet met de methode .then() werken maar met de methode .catch()
Deze methodes kunnen we ook aan elkaar chainen.

    myPromise
        .then((result) => {
            console.log(result);
        })
        .catch((reason) => {
            console.log("error: " + reason);
        });

De output van deze nieuwe promise zal zijn:

    error: foo

# Het aanspreken van een API met een GET-request

## JSON

Wanneer we data uitwisselen met een API gebeurt dit met een gebruiksvriendelijk tekstformaat.
Een veel voorkomend formaat is JSON.

Een voorbeeld van JSON

    {
        name : 'Jason'
        surname : 'Format'
        age : '13'
    }

Dit komt overeen met het formaat voor objecten in javascript.
De data komt vaak terug in lijsten

    [
        {
            name : 'Jason'
            surname : 'Format'
            age : '18'
        },
        {
            name : 'Janice'
            surname : 'Oncat'
            age : '17'
        }
    ]

JSON-objecten kunnen ook vaak genest worden binnenin properties.

    [
        {
            name : 'Jason'
            surname : 'Format'
            age : 18
            address: {
                street: 'API-street',
                number: 20,
                city: 'JS-City'
            }
        },
        {
            name : 'Janice'
            surname : 'Oncat'
            age : 17,
            address: {
                street: 'API-street',
                number: 20,
                city: 'JS-City'
            }
        }
    ]

## Fetch

Vanuit een webapplicatie kunnen we naar gelijk welke api requests uitsturen zolang we hier toegang tot hebben.

De methode die we hiervoor gebruiken heet 'fetch'.

    const url = 'https://handlers.education.launchcode.org/static/planets.json'

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Oopsie");
            } else {
                return response.text();
            }
        })
        .then((data) => console.log(data))
        .catch((error) => {
            console.error("Something went wrong" + error);
        });

Hier hebben we een openbare API die een json teruggeeft van planeten met bijkomende informatie per planeet.
Door een fetch methode uit te voeren naar deze url krijgen we een Promise terug.
Deze promise handelen we correct af met de juiste methodes zoals in uitgelegd in het vorige hoofdstuk.

# Het ontwikkelen van een API

Wanneer we de communicatielaag ontwikkelen gebruiken we hiervoor node.
Hier bovenop gebruiken npm (node package manager), deze voorziet een set aan commando's waar we bepaalde packages kunnen managen van node.

Een package die we gebruiken voor het aanmaken van de API is express.
Deze voorziet de functionaliteit om GET, POST, PUT, ... - requests correct te kunnen afhandelen.

## Opzet

Eerst en vooral moeten we een environment creeëren voor het ontwikkelen van de applicatie.
Dit doen we met het commando

    npm -y init

Wanneer je hier problemen bij ondervind controleer je best eerst even of je node hebt geïnstalleerd.
Dit doe je met het commando

    node -v

Deze zou een versie moeten teruggeven in de console.

Wanneer we het init commando hebben uitgevoerd wordt er een package.json file aangemaakt.
In deze file worden de versie bijgehouden van de packages in gebruik.

De eerste package die gebruiken is express en deze installeren we met het commando

    npm i express

(i staat voor install)

Installeer vervolgens ook de packages cors, fs en path

    npm i cors
    npm i fs
    npm i path

Deze zullen we nodig hebben voor de verdere ontwikkeling van onze API

## GET-request

Voor een get-request correct af te handelen met behulp van onze API kunnen we hiervoor een javascript aanmaken.
We maken een nieuwe file aan met naam app.js.

Vervolgens voegen we onze eerste lijnen code toe.

    const express = require("express");
    const cors = require("cors");

Dit zal variabelen aanmaken die de packages ophaalt binnen onze file, deze kunnen we dan gaan gebruiken.
We maken een app aan via expresse en voegen de cors er aan toe (de cors zorgt ervoor dat we lokaal tussen onze applicaties kunnen communiceren zonder extra authenticatie)

    const app = express();
    const port = 8080;

    app.use(cors());

Om de applicatie te starten gebruiken we volgende methode

    app.listen(port, () => {
        console.log("ShoppingList API listening on port " + port);
    });

De expressapp luistert naar de poort 8080.
Wanneer deze wordt opgestart met het commando

    node app.js

Zal er een duidelijke boodschap getoond worden die aantoont dat de applicatie draait en klaar is voor gebruik.

Voor het correct afhandelen van een GET-request gebruiken we volgende methode

    app.get("/list", (req, res) => {

    })

We spreken de expressapp aan met een get-methode en geven het pad mee '/list'.
Nu zal de applicatie een get-request correct afhandelen op deze url '127.0.0.1:8080/list'
Test maar even uit in de browser, surf simpelweg naar de url. (Een browser stuurt steeds een get-request uit naar elke url die wordt ingegeven in de adresbalk)

Om vervolgens informatie terug te sturen als response doen we dit op volgende manier

    app.get("/list", (req, res) => {
        res.send("alles ok")
    })

Wanneer we nu surfen naar de url zullen we 'alles ok' zien staan in de browser.

We kunnen ook data terug sturen met de get-request
Stel, we hebben volgende lijst

    const data = [
        { name: "appel", price: "3", amount: "3" },
        { name: "peer", price: "1", amount: "2" },
    ];

Dan sturen we deze terug met deze code

    app.get("/list", (req, res) => {
        res.send(JSON.stringify(data));
    });
