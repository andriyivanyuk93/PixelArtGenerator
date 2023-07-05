// JavaScript code for the pixel art generator
const canvas = document.getElementById('pixel-canvas');
const generateButton = document.getElementById('generate-button');
const saveButton = document.getElementById('save-button');
const shareButton = document.getElementById('share-button');
const pixelSizeInput = document.getElementById('pixel-size');

// Add event listeners
generateButton.addEventListener('click', generatePixelArt);
saveButton.addEventListener('click', savePixelArt);
shareButton.addEventListener('click', sharePixelArt);

function generatePixelArt() {
  const pixelSize = parseInt(pixelSizeInput.value);
  const width = 200;
  const height = 200;
  canvas.width = width * pixelSize;
  canvas.height = height * pixelSize;
  const ctx = canvas.getContext('2d');

  // Generate random pixel colors
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}

function savePixelArt() {
  // Get the canvas image data and create a temporary link to download
  const link = document.createElement('a');
  link.href = canvas.toDataURL();
  link.download = 'pixel-art.png';
  link.click();
}

function sharePixelArt() {
  // Get the canvas image data and open a new window to share on social media
  const imageData = canvas.toDataURL();
  const shareURL = `https://example.com/share?image=${encodeURIComponent(imageData)}`;
  window.open(shareURL, '_blank');
}
