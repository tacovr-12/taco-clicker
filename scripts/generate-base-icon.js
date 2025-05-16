const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a 512x512 canvas (largest size we need)
const canvas = createCanvas(512, 512);
const ctx = canvas.getContext('2d');

// Set background
ctx.fillStyle = '#e67e22';
ctx.fillRect(0, 0, 512, 512);

// Draw a stylized taco shell (semi-circle)
ctx.beginPath();
ctx.fillStyle = '#f1c40f';
ctx.arc(256, 356, 200, 0, Math.PI, true);
ctx.fill();

// Draw taco filling
ctx.fillStyle = '#27ae60';  // Lettuce
ctx.beginPath();
ctx.arc(256, 336, 180, 0, Math.PI, true);
ctx.fill();

ctx.fillStyle = '#e74c3c';  // Tomato
ctx.beginPath();
ctx.arc(256, 316, 160, 0, Math.PI, true);
ctx.fill();

// Save the base icon
const outputFile = path.join(__dirname, '..', 'base-icon.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputFile, buffer);

console.log('Base icon generated successfully!'); 