/**
 * Generates a 1024x1024 PNG icon for Farcaster manifest (no alpha, per spec).
 * Run: node scripts/generate-farcaster-icon.js
 * Requires: npm install -D sharp
 */
const path = require("path");
const sharp = require("sharp");

const outPath = path.join(__dirname, "..", "public", "icon.png");

sharp({
  create: {
    width: 1024,
    height: 1024,
    channels: 3,
    background: { r: 26, g: 43, b: 60 }
  }
})
  .png()
  .toFile(outPath)
  .then(() => console.log("Created", outPath))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
