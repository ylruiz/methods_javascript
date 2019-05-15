const subtotal = (13 + 1) * 5;      // Subtotal is 70
const shipping = 0.5 * (13 + 1);    // Subtotal is 7

const total = subtotal + shipping;  // Subtotal is 77

const elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

const elShip = document.getElementById('shipping');
elShip.textContent = shipping;

const elTotal = document.getElementById('total');
elTotal.textContent = total;