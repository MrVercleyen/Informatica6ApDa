let vraag = "Hoe gaat het?";
let roepVraag = "HOE GAAT HET?";
let roepzin = "HOE GAAT HET";
let leeg1 = "";
let leeg2 = "            ";
let leeg3 = undefined;
let leeg4 = null;
let ander = "yo";

function bob(prompt) {
  if (
    prompt === "" ||
    prompt === undefined ||
    prompt === null ||
    prompt.trim() == ""
  ) {
    return "Prima. Doe maar!";
  }
  if (prompt.endsWith("?") && isUpperCase(prompt)) {
    return "Rustig maar, ik weet wat ik doe!";
  }
  if (prompt.endsWith("?")) {
    return "Tuurlijk.";
  }
  if (isUpperCase(prompt)) {
    return "Wauw, kalm aan!";
  }
  return "Maakt niet uit.";
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

console.log(bob(vraag));
console.log(bob(roepVraag));
console.log(bob(roepzin));
console.log(bob(leeg1));
console.log(bob(leeg2));
console.log(bob(leeg3));
console.log(bob(leeg4));
console.log(bob(ander));
