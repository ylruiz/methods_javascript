// Create the array
const colors = ['white', 'black', 'custom'];

// Update the third item in the array
colors[2] = 'beige';

// Get the element with an id of colors
const el = document.getElementById('colors');

// replace with third item from the array
el.textContent = colors[2];
