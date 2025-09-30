# Secret Handshake

Je begint een geheime codeerclub met een paar vrienden en vrienden van vrienden.
Niet iedereen kent elkaar, dus hebben jij en je vrienden besloten een secret handshake te creëren waarmee je kunt herkennen dat iemand lid is.
Je wilt niet dat iemand die er niet van op de hoogte is de code kan kraken.

# Opdracht

Jouw taak is om een ​​getal tussen 1 en 31 om te zetten in een reeks acties in de geheime handdruk.

De reeks acties wordt gekozen door te kijken naar de vijf meest rechtse cijfers van het getal nadat het is omgezet naar binair. Begin bij het meest rechtse cijfer en ga naar links.

De acties voor elke cijferpositie zijn:

    00001 = knipoog
    00010 = dubbel knipoog
    00100 = sluit de ogen
    01000 = spring
    10000 = keer de volgorde van de acties om bij de handshake

Laten we het getal 9 als voorbeeld nemen:

- 9 in binair systeem is 1001.
- Het meest rechtse cijfer is 1, dus de eerste actie is een knipoog.
- Ga je naar links, dan is het volgende cijfer 0, dus knipper je niet dubbel.
- Ga je weer naar links, dan is het volgende cijfer 0, dus je houdt je ogen open.
- Ga je weer naar links, dan is het volgende cijfer 1, dus je springt.

Dat was het laatste cijfer, dus de uiteindelijke code is:

- knipoog, spring

Gegeven het getal 26, dat in binaire vorm 11010 is, krijgen we de volgende acties:

- dubbel knipperen
- springen
- omgekeerde acties

De geheime handdruk voor 26 is dus:

springen, dubbel knipoog

Schrijf een programma dat een variable bijhoud met het cijfer

    let cijfer = 9

Converteer vervolgens het cijfer naar binaire waarde met een aparte methode

Overloop de cijfers en houd de acties bij in een aparte lijst

Print tenslotte de acties uit
