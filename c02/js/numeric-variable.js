const price = 5;
const quantity = 14;
const total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;