const binaryHelper = [128, 64, 32, 16, 8, 4, 2, 1];
const handshakeHelper = [
  "knipoog",
  "dubbel knipoog",
  "sluit de ogen",
  "spring",
];

function convertDecimalToBinary(decimal) {
  var elementValue = +decimal;
  var binaryValue = "";
  var counter = 0;
  while (counter < 8) {
    var currentBinaryHelperValue = +binaryHelper[counter];
    if (currentBinaryHelperValue <= +elementValue) {
      binaryValue += "1";
      elementValue = +elementValue - currentBinaryHelperValue;
    } else {
      binaryValue += "0";
    }

    counter++;
  }
  return binaryValue;
}

const handshakeCode = 26;

function handshakeParse(code) {
  const binaryCode = convertDecimalToBinary(code);
  const binaryCodeSplit = binaryCode.split("").reverse();
  let handshakeSeq = [];

  binaryCodeSplit.forEach((el, index) => {
    if (el === "1") {
      if (index === 4) {
        handshakeSeq = handshakeSeq.reverse();
      } else {
        handshakeSeq.push(handshakeHelper[index]);
      }
    }
  });

  return handshakeSeq;
}

console.log(handshakeParse(handshakeCode));
