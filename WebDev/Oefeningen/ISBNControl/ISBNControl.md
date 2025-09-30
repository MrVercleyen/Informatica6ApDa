# Oefening: Controleren van de validiteit van een ISBN code

Het ISBN-10-verificatieproces wordt gebruikt om boekidentificatienummers te valideren. Deze bevatten normaal gesproken streepjes en zien eruit als 3-598-21508-8

# Formule ISBN

Het ISBN-10-formaat bestaat uit 9 cijfers (0 tot en met 9) plus één controleteken (een cijfer of alleen een X).
Indien het controleteken een X is, staat dit voor de waarde '10'.
Deze kunnen met of zonder koppeltekens worden doorgegeven en kunnen op geldigheid worden gecontroleerd met de volgende formule:

(d₁ x 10 + d₂ x 9 + d₃ x 8 + d₄ x 7 + d₅ x 6 + d₆ x 5 + d₇ x 4 + d₈ x 3 + d₉ x 2 + d₁₀ x 1) mod 11 == 0

Als het resultaat 0 is, dan is het een geldig ISBN-10. Anders is het ongeldig.

# Voorbeeld

Laten we ISBN-10 3-598-21508-8 nemen. We vullen dit in de formule in en krijgen:

(3 x 10 + 5 x 9 + 9 x 8 + 8 x 7 + 2 x 6 + 1 x 5 + 5 x 4 + 0 x 3 + 8 x 2 + 8 x 1) mod 11 == 0

Omdat het resultaat 0 is, bewijst dit dat ons ISBN geldig is.

# Opdracht

Maak een javascript programma die een variable bijhoud met de ISBN waarde

    let isbn = "3-598-21508-8"

Split vervolgens de string in delen en plaats ze in een array

    let splitisbn = isbn.split("")

Nu is het aan jullie om over de array te loopen en vervolgens de koppeltekens "-" er uit te halen.
Plaats daarna alle waarden in de formule en controleer de ISBN

Eindig met een boodschap als,
"Dit is een correcte ISBN waarde"
