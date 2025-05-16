const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = process.argv[2];

if (!inputFile) {
    console.error('Please provide an input file path');
    process.exit(1);
}

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '..', 'icons');
if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
}

// Process each size
async function processIcons() {
    try {
        for (const size of sizes) {
            const outputFile = path.join(iconsDir, `icon-${size}x${size}.png`);
            await sharp(inputFile)
                .resize(size, size)
                .toFile(outputFile);
            console.log(`Created ${size}x${size} icon`);
        }
        console.log('All icons generated successfully!');
    } catch (err) {
        console.error('Error processing icons:', err);
    }
}

processIcons(); 