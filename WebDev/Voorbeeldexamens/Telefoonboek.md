# Telefoonboek

## Inleiding

Voor deze opdracht maken jullie een interactieve telefoonboek aan.
We houden een lijst bij van de ingegeven telefoonnummers en zorgen dat deze correct worden afgebeeld.

## Opdracht

Gebruik het html-bestand die je terug kan vinden in de map en voeg zelf een javascript file toe.

## Deel 1: Invoer

Voorzie eerst en vooral een inputveld waar gebruikers een telefoonnummer kunnen invoeren in stringformaat.
Zorg dat de gebruiker op een button kan klikken om het ingevoerde telefoonnummer toe te voegen in een lijst.

Wanneer de gebruiker op de button klikt wordt html code gegenereerd voor alle ingevoerde telefoonnummers,
hou dus een lijst bij met alle telefoonnummers en maak voor elk telefoonnummer een stuk html-code aan en voeg deze toe aan een div in de html-pagina.

## Deel 2: opmaak telefoonnummer

De correcte notatie van een telefoonnummer is als volgt:

    0476/45.18.25

Wanneer een gebruiker een telefoonnummer invoert op een andere manier willen we deze omzetten naar de correcte notatie.

Voorbeeld 1:

    Invoer : 0478954628

    Uitvoer: 0478/95.46.28

Voorbeeld 2:

    Invoer: 04-78 48 5123

    Uitvoer: 0478/48.51.23

## Deel 3: Foutcontrole

Een telefoonnnumer bestaat steeds uit 10 getallen.
Wanneer de gebruiker een telefoonnumer invoert dat meer dan 10 getallen bevat, wordt er een foutboodschap getoond op de webpagina.
Het telefoonnumer wordt dan ook niet toegevoegd aan de lijst.

De foutboodschap kan via een 'alert()' getoond worden of als rode tekst op de webpagina?
