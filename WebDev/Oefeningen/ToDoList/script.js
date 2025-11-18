var elements = [];

function AddElement() {
  let inputVal = document.getElementById("inputText").value;
  if (elements.includes(inputVal)) {
    return;
  }

  elements.push(inputVal);

  renderElements();
}

function renderElements() {
  let containerContent = "";

  elements.forEach((element) => {
    containerContent +=
      "<div>" +
      element +
      " <span style='cursor: pointer' onClick='deleteElement(\"" +
      element +
      "\")'>x</span></div>";
  });

  document.getElementById("elementcontainer").innerHTML = containerContent;
}

function deleteElement(element) {
  elements.forEach((ele, index) => {
    if (ele === element) {
      elements.splice(index, 1);
    }
  });

  renderElements();
}
