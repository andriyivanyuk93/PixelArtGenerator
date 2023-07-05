// JavaScript code for the pixel art generator
const canvas = document.getElementById('pixel-canvas');
const generateButton = document.getElementById('generate-button');

// Add event listener to generate button
generateButton.addEventListener('click', generatePixelArt);

function generatePixelArt() {
  // Get canvas context and set dimensions
  const ctx = canvas.getContext('2d');
  const width = 200;
  const height = 200;
  canvas.width = width;
  canvas.height = height;

  // Generate random pixel colors
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
}
