// Create variables for the welcome message
const greeting = 'Howdy ';
const name = "Molly";
const message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
const welcome = greeting + name + message;
console.log(welcome);

// Create variables to show details about the sign
const sign = 'Montage House';
const tiles = sign.length;
const subtotal = tiles * 5;
const shipping = 7;
const total = subtotal + shipping;

// Get the element that has an id of greeting
const el = document.getElementById('greeting');
// Remplace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
const elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its content
const elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its content
const elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = '$' + subtotal;

// Get the element that has an id of shipping then update its content
const elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that hast an id of grandTotal then update its content
const elTotal = document.getElementById('grandTotal');
elTotal.textContent = '$' + total;


