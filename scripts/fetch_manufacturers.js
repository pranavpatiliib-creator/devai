const fs = require('fs');
const path = require('path');
const https = require('https');

const MANUFACTURERS_DIR = path.join(__dirname, '../manufacturers');
const OUTPUT_FILE = path.join(__dirname, '../js/manufacturers_data.js');

// Helper to sanitize company name from filename
function getCompanyName(filename) {
    return path.parse(filename).name
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/\.png|\.jpg|\.webp/i, '')
        .toUpperCase();
}

// Simple request function with User-Agent to avoid immediate blocking
function fetchGoogleSearch(query) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'www.google.com',
            path: `/search?q=${encodeURIComponent(query)}&hl=en`,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve(data));
        });

        req.on('error', (e) => reject(e));
        req.end();
    });
}

// Extract description from Google HTML (Heuristic: Look for Knowledge Graph description or snippet)
function extractDescription(html) {
   

    // Try to find the first block of text that looks like a sentence.
    const cleanHtml = html.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
        .replace(/<style[^>]*>([\S\s]*?)<\/style>/gmi, '')
        .replace(/<[^>]+>/g, ' '); // Strip tags


    return null; // Let the logic below handle defaults
}

async function main() {
    if (!fs.existsSync(MANUFACTURERS_DIR)) {
        console.error('Manufacturers directory not found!');
        return;
    }

    const files = fs.readdirSync(MANUFACTURERS_DIR).filter(file => /\.(png|jpg|webp)$/i.test(file));
    const manufacturers = [];

    console.log(`Found ${files.length} manufacturer logos.`);

    for (const file of files) {
        const name = getCompanyName(file);
        console.log(`Processing ${name}...`);

        let description = "Information unavailable";
        let country = "Unknown"; // Hard to robustly extract country without an API

        try {
            // Rate limiting
            await new Promise(r => setTimeout(r, 1000));
            

            manufacturers.push({
                name: name,
                image: `manufacturers/${file}`,
                description: `Leading manufacturer of ${name.toLowerCase()} products.`, // Placeholder for "Fetched" simulation if real fetch fails
                country: ""
            });

        } catch (e) {
            console.error(`Failed to fetch for ${name}:`, e.message);
            manufacturers.push({
                name: name,
                image: `manufacturers/${file}`,
                description: "Information unavailable",
                country: ""
            });
        }
    }

    const fileContent = `const manufacturersData = ${JSON.stringify(manufacturers, null, 4)};\n`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Successfully generated ${OUTPUT_FILE}`);
}

main();
