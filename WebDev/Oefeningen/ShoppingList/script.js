const storageList = "shopList";

lijst = localStorage.getItem(storageList);

if (lijst == undefined) {
  lijst = [];
} else {
  lijst = JSON.parse(lijst);
  render();
}

function add() {
  const name = document.getElementById("nameInput").value;
  const amount = document.getElementById("amountInput").value;
  const price = document.getElementById("priceInput").value;
  lijst.push({
    name,
    price,
    amount,
  });
  render();
  document.getElementById("nameInput").value = null;
  document.getElementById("amountInput").value = null;
  document.getElementById("priceInput").value = null;
}

function remove(index) {
  lijst.splice(index, 1);
  render();
}

function render() {
  document.getElementById("shoplist").innerHTML = null;
  totalprice = 0;
  lijst.forEach((element, index) => {
    document.getElementById("shoplist").innerHTML += `
     <div><p><strong class="deletecross" onclick="remove(${index})">x</strong>
     ${element.amount} x ${element.name} : €${element.price}</p></div>
    `;
    totalprice += +element.amount * +element.price;
  });
  document.getElementById("totalprice").innerHTML = "€ " + totalprice;
  savelist();
}

function savelist() {
  localStorage.setItem(storageList, JSON.stringify(lijst));
}
