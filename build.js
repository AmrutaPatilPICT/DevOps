const fs = require('fs');

console.log('====================================');
console.log('Starting Application Build...');
console.log('====================================');

const requiredFiles = [
    'app.js',
    'package.json',
    'public/index.html'
];

for (const file of requiredFiles) {

    if (!fs.existsSync(file)) {

        console.error(`Build Failed: ${file} not found`);

        process.exit(1);
    }

    console.log(`Validated: ${file}`);
}

console.log('====================================');
console.log('Application files validated successfully.');
console.log('Build completed successfully.');
console.log('====================================');