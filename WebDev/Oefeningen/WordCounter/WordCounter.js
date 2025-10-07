var zin =
  "Dat is het wachtwoord: 'WACHTWOORD 123'!, riep de Federale agent. Dus ik vluchtte.";

function countWords(sentence) {
  const splitSentence = sentence
    .replaceAll(":", " ")
    .replaceAll(",", " ")
    .replaceAll("!", " ")
    .replaceAll("?", " ")
    .replaceAll(".", " ")
    .replaceAll("\t", " ")
    .replaceAll("\n", " ")
    .replaceAll("'", "")
    .split(" ");

  let woorden = [];
  let tellers = [];

  splitSentence.forEach((woord) => {
    if (woord !== "") {
      woord = woord.toLowerCase();
      if (!woorden.includes(woord)) {
        woorden.push(woord);
        tellers.push(1);
      } else {
        index = woorden.indexOf(woord);
        tellers[index] += 1;
      }
    }
  });

  return [woorden, tellers];
}

var arrays = countWords(zin);

arrays[0].forEach((woord, index) => {
  console.log(woord + ": " + arrays[1][index]);
});
