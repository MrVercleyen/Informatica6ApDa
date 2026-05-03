# VirtualBox

Voor het gebruik van Windows Server maken we virtuele machines aan in VirtualBox.
In dit onderdeel overlopen we stap voor stap hoe we virtuele machines aanmaken en onderhouden.

## Installatie

Eerst en vooral zullen we Virtualbox installeren via deze link:

https://www.virtualbox.org/wiki/Downloads

Selecteer hier de download voor 'Windows Hosts'

![alt text](<Schermafbeelding 2026-04-30 125010.png>)

Zodra de exe file is geïnstalleerd voer je deze uit.
Doorlop de wizard met de standaard suggesties en wacht tot Virtualbox is geïnstalleerd.

Vervolgens kan je Virtualbox openen en kom je meteen uit op het hoofdmenu.

![alt text](image.png)

## Virtualisatie BIOS

Vooraleer we van start kunnen gaan met het aanmaken van virtuele machines moeten we onze computer in staat stellen om virtuele machines te kunnen draaien.
Daarvoor moeten we in de BIOS geraken van onze computer.

Voor elke computer is dat anders maar aangezien jullie allen over een HP laptop beschikken zal ik de stappen voor deze computer overlopen.

### stap voor stap

De eerste stap hiervoor is om jouw computer uit te herstarten.
Wanneer de computer terug aan het opstarten is druk je een aantal keer op f10 (spam die knop maar goed).

Nu zal je een menu te zien krijgen, dit is de BIOS.

Klik door naar de 'Advanced' tab en navigeer vervolgens met de pijltjestoetsen naar 'System Options'.

![alt text](image-1.png)

In dit menu selecteer je 'Virtualization Technology (VTx)'.

![alt text](image-2.png)

Klik vervolgens terug op f10 om de BIOS te verlaten en jouw aanpassingen op te slaan.

Als jouw menu er anders uit ziet als in de afbeeldingen kan het zijn dat je andere stappen moet volgen.
Voor alle HP laptops kan je gebruik maken voor deze link.

https://support.hp.com/us-en/document/ish_5637142-5637191-16

Gebruik je een andere computer kan je dit zelf gemakkelijk terugvinden door even te Googlen.

## Startscherm

Bij het openen van VirtualBox kom je meteen op het startscherm terecht.

![alt text](image-3.png)

Hier krijg je links een overzicht van jouw reeds aangemaakte virtuele machines die je elk kan starten door op de machine dubbel te klikken.

Rechts zie je een detailpagina van elke virtuele machine met de belangrijkste informatie.

## Aanmaken van een Virtuele machine

Om een nieuwe virtuele machine aan te maken klik je op de knop 'Nieuw'.

![alt text](image-4.png)

Dit opent een nieuw scherm waar je de juiste informatie hoeft in te vullen.

![alt text](image-5.png)

- Vul de naam in voor de machine bij 'VM Name'
- Kies waar de machine wordt opgeslagen bij 'VM Folder'
- Laat voorlopig de ISO Image nog leeg
- Je kan OS Edition nog niet aanpassen, dus hier doe je niets
- Bij OS kies je het juiste besturingssysteem, bij ons zal dit steeds 'Microsoft Windows' zijn
- Je kan OS Distribution niet aanpassen bij Windows, dus hier doe je niets
- Bij OS Version kies je de juiste versie, voor servers selecteer je een Windows Server (2025), voor personencomputers kies je de juiste Windows versie (11)

Verder kan je andere waarden zoals de het aantal CPU's, de RAM, de opslag, ...

Klik op 'Afmaken' wanneer je alles correct hebt ingevuld.

## Starten van een Virtuele machine

Om de aangemaakte virtuele machine te starten kan je op de machine dubbelklikken of je kan de machine selecteren in de lijst en klikken op 'Starten'.

![alt text](image-6.png)

De machine zal nu starten, omdat we nog geen ISO file hebben toegevoegd zal Virtualbox deze automatisch opvragen.

![alt text](image-7.png)

Selecteer hier de juiste ISO file.
Normaal bezit je al reeds over de juiste ISO file maar deze kan je opnieuw downloaden via deze url.

Windows Server : https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2025
Windows 11 : https://www.microsoft.com/nl-nl/software-download/windows11 (even nog naar beneden scrollen)

Wanneer je de juiste ISO hebt toegevoegd zal de Wizard jou begeleiden doorheen de installatieprocedure.
Wat je juist moet selecteren bij het installeren kan je terugvinden in de cursus op github.

## Problemen oplossen

Een vaak voorkomend probleem bij de machines is dat er niet genoeg ruimte staat op jouw computer.
Zorg dus dat je minstens 24 GB vrij hebt op jouw harde schrijf van jouw laptop als je problemen hebt met jouw virtuele machine.

Daarnaast is het ook mogelijk dat je teveel ram hebt geselecteerd bij jouw machine.
Deze kan je aanpassen via de instellingen van de machine door de juiste machine te selecteren en te klikken op 'Instellingen'

![alt text](image-8.png)

Zorg dat jouw machine uit staat, want anders kan je niets aanpassen en ziet het instellingen-scherm er zo uit.

![alt text](image-9.png)

Alles is grijs.

Zet de machine uit en nu zal je de waarden kunnen aanpassen in het scherm.
Vervolgens kan je hier het ramgebruik verlagen.

![alt text](image-10.png)

Let op! bij een persoonlijke computer (Windows 11) moet de ram minimum een waarde hebben van 4096 Mb.
Bij een Windows Server kan je de waarde verlagen tot 512Mb.
