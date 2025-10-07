# Luhn

Bij de Global Verification Authority (GVA) heb je zojuist een cruciale opdracht gekregen. In de stad, van online aankopen tot beveiligde logins, zijn talloze processen afhankelijk van de nauwkeurigheid van numerieke identificatiegegevens zoals creditcardnummers, bankrekeningnummers, transactiecodes en tracking-ID's. Het Luhn-algoritme is een eenvoudige controlesomformule die wordt gebruikt om foutief getypte nummers te identificeren.

Er is net een batch identificatiegegevens op je bureau beland. Ze moeten allemaal de Luhn-test doorstaan ​​om te garanderen dat ze legitiem zijn. Als er een aantal niet voldoen, worden ze als ongeldig gemarkeerd, waardoor fouten zoals onjuiste transacties of mislukte accountverificaties worden voorkomen.

Kun jij ervoor zorgen dat dit goed wordt gedaan? De integriteit van veel diensten hangt van jou af.

# Opdracht

Bepaal of een getal geldig is volgens de Luhn-formule.
[text](https://en.wikipedia.org/wiki/Luhn_algorithm)

Het getal wordt als een string ingegeven.

# Validatie

Strings met een lengte van 1 of kleiner zijn niet geldig. Spaties zijn toegestaan ​​in de invoer, maar dienen vóór controle te worden verwijderd. Alle andere tekens dan cijfers zijn niet toegestaan.

# Voorbeelden

## Geldig creditcardnummer

Het te controleren nummer is

    4539 3195 0343 6467.

De eerste stap van het Luhn-algoritme is om aan het einde van het nummer te beginnen en elk tweede cijfer te verdubbelen, beginnend met het tweede cijfer van rechts en dan naar links bewegend.

    4539 3195 0343 6467
    ↑ ↑  ↑ ↑  ↑ ↑  ↑ ↑  (verdubbel deze)

Als de uitkomst van een verdubbeling van een cijfer groter is dan 9, trekken we 9 van die uitkomst af. We krijgen dan:

    8569 6195 0383 3437

Ten slotte tellen we alle cijfers op. Als de som deelbaar is door 10, is het oorspronkelijke getal geldig.

    8 + 5 + 6 + 9 + 6 + 1 + 9 + 5 + 0 + 3 + 8 + 3 + 3 + 4 + 3 + 7 = 80

80 is deelbaar door 10, dus het getal 4539 3195 0343 6467 is geldig!

## Ongeldid creditcardnummer

Het te controleren nummer is

    066 123 478.

We beginnen aan het einde van het nummer en verdubbelen elk tweede cijfer, beginnend met het tweede cijfer van rechts en dan naar links.

    066 123 478
     ↑  ↑ ↑  ↑  (verdubbel deze)

Als de uitkomst van een verdubbeling van een cijfer groter is dan 9, trekken we 9 van die uitkomst af. We krijgen dan:

    036 226 458

We tellen de cijfers op:

    0 + 3 + 6 + 2 + 2 + 6 + 4 + 5 + 8 = 36

36 is niet deelbaar door 10, dus het getal 066 123 478 is niet geldig!
