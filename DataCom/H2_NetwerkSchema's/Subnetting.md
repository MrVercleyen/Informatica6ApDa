# Subnetting

## Netwerk van IP-adres vinden via het subnetmasker

Wanneer we het ip-adres ophalen bij een device met het command 'ipconfig' krijgen we het ip-adres terug en het bijhorende subnetmasker.

Om na te gaan tot welk netwerk dit ip-adres behoort moeten we een aantal stappen ondernemen.

Bij het overlopen van elke stap gebruiken we hetzelfde voorbeeld.

IP-adres 192.168.10.154
Subnetmasker : 255.255.255.192 ( CIDR-notatie : /26)

### Van decimaal naar binair

De eerste stap voor het bepalen van het netwerk is het omzetten van de adressen naar binaire waarden.
Dit kunnen we eenvoudig doen door deze sequentie te gebruiken

    128 64 32 16 8 4 2 1

We leiden dit af uit de machten van 2

    2⁰ = 1
    2¹ = 2
    2² = 4
    2³ = 8
    2⁴ = 16
    2⁵ = 32
    2⁶ = 64
    2⁷ = 128

Om vervolgens elk octet van ons ip-adres om te zetten naar binaire waarde gaan we het rijtje af.

We starten met het eerste octet

    192

Vervolgens gaan we onze sequentie af en kijken of deze kleiner is dan ons octet

    128 <= 192

Als het getal van de sequentie kleiner of gelijk is aan ons octet schrijven we een 1 bij ons binair getal

    binair : 1

Wanneer het octet kleiner of gelijk is aan ons getal uit de sequentie trekken we het getal af van ons octet, dit wordt ons nieuw getal om te vergelijken met het volgende getal uit de sequentie

    192 - 128 = 64

Vervolgens gaan we naar het volgende getal in onze sequentie tot we alle getallen hebben overlopen

    64 <= 64

Dit is kleiner of gelijk aan het getal dus we plaatsen opnieuw een 1 bij ons binair getal

    11

En we trekken het getal af van ons octet

    64 - 64 = 0

Als we 0 overhouden weten we dat de rest van onze binaire reeks ook 0 zal bevatten

    11000000

Een octet bevat steeds 8 waarden, vandaar de naam octet.

Ondertussen hebben we het eerste octet omgezet naar een binaire waarde

    11000000.168.10.154

We passen dezelfde stappen toe voor de andere octetten

    is 128 kleiner of gelijk aan 168? => ja

    binair : 1

    nieuwe waarde => 168 - 128 = 40

    is 64 kleiner of gelijk aan 40? => neen

    binair : 10

    is 32 kleiner of gelijk aan 40? => ja

    binair : 101

    nieuwe waarde => 40 - 32 = 8

    is 16 kleiner of gelijk 8? => neen

    binair : 1010

    is 8 kleiner of gelijk aan 8? => ja

    binair = 10101

    nieuwe waarde => 8 - 8 = 0 (al de rest is 0)

    binair 10101000

Nu hebben we de twee eerste octetten omgezet naar binair waarden

    11000000.10101000.10.154

De laatste twee octetten geven

    10 = 00001010
    154 = 10011010

Ons IP-adres in binaire waarde wordt

    11000000.10101000.00001010.10011010

Wanneer we hetzelfde proces toepassen bij ons subnetmasker krijgen we deze binaire waarde.

    11111111.11111111.11111111.11000000

Dit is ook eenvoudig uit te werken met de CIDR notatie

    /26 => 26 eentjes

### De EN-methode voor het netwerkadres

Nu we het IP-adres en het subnetmasker beiden in binaire waarden hebben omgezet is het grootste werk voorbij.

Met deze twee waarden kunnen we het netwerkadres bepalen.

Dit doen we met behulp van de EN-methode, we lopen beide adressen af op hetzelfde tempo.
Wanneer er bij de beide waarden op dezelfde positie een 1 staat zal het netwerkadres ook een 1 bevatten, wanneer op dezelfde plaats niet telkens een 1 staat maar een 0 zal het netwerkadres ook een 0 bevatten.

We werken even het voorbeeld uit.
(Subnetmasker = SN)

    IP : 11000000.10101000.00001010.10011010

    SN : 11111111.11111111.11111111.11000000

Op de eerste positie staat bij het IP-adres een 1 en ook bij het Subnetmasker, we schrijven dus een 1 neer.
(Netwerkadres = NA)

    IP : 11000000.10101000.00001010.10011010
         |
    SN : 11111111.11111111.11111111.11000000

    NA : 1

Op de tweede positie net hetzelfde

    IP : 11000000.10101000.00001010.10011010
          |
    SN : 11111111.11111111.11111111.11000000

    NA : 11

Op de derde positie zien we dat er bij het IP-adres een 0 voorkomt en bij het subnetmasker een 1.
We schrijven dus een 0 voor het netwerkadres.

    IP : 11000000.10101000.00001010.10011010
           |
    SN : 11111111.11111111.11111111.11000000

    NA : 110

Als we dit voor alle waarden overlopen krijgen we dit netwerkadres.

    NA : 11000000.10101000.00001010.10000000

### Van binair naar decimaal

Als laatste stap willen het netwerkadres niet in binaire waarde maar in decimale waarde.

Hiervoor gebruiken we terug onze sequentie.

    128 64 32 16 8 4 2 1

Elk octet komt overeen met de bovenstaande sequentie.
Bijvoorbeeld voor het eerste octet.

    128 64 32 16 8 4 2 1
     1   1  0  0 0 0 0 0

Als we de waarden waar een 1 bijstaat optellen krijgen we

    128 + 64 = 192

Wanneer we dit doen voor elk octet krijgen we.

    192.168.10.128

En dit is ons uiteindelijk netwerkadres.

### Netwerkadres & Broadcastadres

Een netwerk heeft telkens een netwerkadres en een broadcastadres.

Het netwerkadres wordt gebruikt als identiteit voor het netwerk en hier kunnen geen devices aan gekoppeld worden.

Dit is steeds het eerste adres in het netwerk.
Voor het netwerk 192.168.10.128 is dit dus

    192.168.10.128

Een netwerk heeft telkens ook een broadcastadres.
Dit wordt gebruikt om naar alle adressen binnen het netwerk eenzelfde boodschap uit te sturen. Dit is steeds het laatst mogelijk adres binnen het netwerk.

Voor het netwerk 192.168.10.128 is dit dus

    192.168.10.193

In het volgende onderdeel zien we hoe we het broadcastadres kunnen bepalen van een netwerk

### Bruikbare adressen

We willen ook nagaan hoeveel bruikbare adressen er zijn voor dit netwerk of in andere woorden hoeveel devices we kunnen linken op ip-adressen binnen dit netwerk

Hiervoor kijken we naar onze binaire waarde van ons subnetmasker.

    11111111.11111111.11111111.11000000

Hier tellen we het aantal nullen op in de waarde.

    6 nullen

Ten slotte berekenen we 2 tot de aantal nullen macht

Dus 2 tot de 6de macht

    2⁶ = 64

Dit betekent dat het netwerk zal lopen van

    192.168.10.128 tot en met 192.168.10.193

Dit zijn in totaal 64 adressen.

Het eerste en laatste adres zijn steeds in gebruik voor

    Netwerkadres : 192.168.10.128
    Broadcastadres : 192.168.10.193

Dit betekent dat de bruikbare adressen lopen van

    192.168.10.129 tot en met 192.168.10.192

Dit zijn in totaal 62 adressen

Dus om het aantal bruikbare adressen te bepalen maken we de bewerking

    2⁶ - 2 = 62

Waarbij 6 te bepalen valt naar het aantal nullen bij het binaire subnetmasker

## Netwerken opdelen in subnetten

Het nut van subnetting is dat we een bestaand netwerk zo efficiënt mogelijk kunnen opdelen naar gelang de behoeften van een bedrijf.

Stel we hebben een bedrijf met een netwerk op 192.168.1.0/24. Ze willen dit netwerk opdelen voor 4 afdelingen.

    afdeling 1 = 28 hosts
    afdeling 2 = 52 hosts
    afdeling 3 = 15 host
    afdeling 4 = 5 hosts

We krijgen de opdracht om voor elke afdeling het netwerkadres te bepalen.

### Oplijsting van afdelingen

De eerste stap voor we te werk gaan is de afdeling rangschikken van groot naar klein.

    afdeling 2 = 52 hosts
    afdeling 1 = 28 hosts
    afdeling 3 = 15 host
    afdeling 4 = 5 hosts

### Subnetwerk bepalen

Vervolgens bepalen we voor elke afdeling een (sub)netwerk en een subnetmasker

Voor de grootste afdeling (afdeling 2) hebben we 52 hosts.

Omdat we aan de hand van onze sequentie kunnen bepalen hoeveel hosts een netwerk kan bieden, kunnen we dit ook in de tegengestelde richting uitvoeren.

    128 64 32 16 8 4 2 1

Maar voor het bepalen van het aantal hosts verdubbelen we elk waarde

    256 128 64 32 16 8 4 2

We zoeken het kleinst mogelijk getal dat groot genoeg is voor ons aantal hosts.

LET OP!!

Een netwerk reserveert steeds 2 adressen voor het netwerkadres en het broadcast adres.

In dit geval zien we dus dat 64 genoeg hosts kan bieden voor onze afdeling (62 hosts).

Hier kunnen we uiteindelijk het subnetmasker voor bepalen.

64 staat op de 6de plaats, ons subnetmasker dat 64 hostadressen kan voorzien heeft dus 6 nullen.

    11111111.11111111.11111111.11000000

Uiteindelijk voorzien we een subnetwerk voor de eerste afdeling met als netwerkadres

    192.168.1.0/26

De beschikbare adressen gaan hiervoor van

    192.168.1.1 tot en met 192.168.1.63

Aangezien het laatste adres 192.168.1.63 is zal het volgende netwerk voor de volgende afdeling starten op 192.168.1.64.

De volgende afdeling heeft 28 adressen nodig.
Als we kijken naar onze sequentie zien we dat 32 - 2 = 30 hosts voldoende zal zijn.

    256 128 64 32 16 8 4 2

Ons subnetmasker voor de tweede grootste afdeling is dus

    11111111.11111111.11111111.11100000

We voorzien voor de eerste afdeling (tweede grootste ) dus volgend netwerk

    192.168.1.64/27

Uiteindelijk passen we dezelfde stappen toe voor de laatste 2 afdeling

Let op dat we afdeling 3 moeten voorzien van 15 hosts. Als we kijken naar onze sequentie

    256 128 64 32 16 8 4 2

zouden we al snel denken dat 16 voldoende zal zijn, maar er is telkens een netwerkadres en een broadcastadres nodig.

    16 - 2 = 14

14 adressen is dus niet genoeg om 15 devices op te connecteren.
Dus moeten we een stap hoger gaan.

    32 - 2 = 30

30 is voldoende.

Uiteindelijk krijgen we volgende subnetwerken voor de afdelingen.

    Subnet 2 : 192.168.1.0/26
    Subnet 1 : 192.168.1.64/27
    Subnet 3 : 192.168.1.96/27
    Subnet 4 : 192.168.1.128/29
