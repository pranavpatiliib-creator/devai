const https = require('https');
const fs = require('fs');
const path = require('path');
const products = require('../js/data.js');

// === CONFIGURATION ===
// Get these from:
// 1. API KEY: https://console.cloud.google.com/apis/credentials
// 2. SEARCH ENGINE ID (cx): https://programmablesearchengine.google.com/
const API_KEY = 'AIzaSyAta_T1Zf2Gkk3I6eFK7NXiDQqlmngpyz0';
const CX = 'e1e746c4c11a44abe';
// =====================

const IMAGE_DIR = path.join(__dirname, '../images/products');

if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

async function searchImage(query) {
    if (API_KEY === 'YOUR_API_KEY' || CX === 'YOUR_SEARCH_ENGINE_ID') {
        throw new Error("Please set your API_KEY and CX (Search Engine ID) in the script.");
    }

    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${encodeURIComponent(query)}&searchType=image&num=1&imgSize=large`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.items && json.items.length > 0) {
                        resolve(json.items[0].link);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete failed file
            reject(err);
        });
    });
}

async function run() {
    console.log(`Starting batch download for ${products.length} products...`);
    const logFile = path.join(__dirname, 'download.log');
    const log = (msg) => {
        console.log(msg);
        fs.appendFileSync(logFile, msg + '\n');
    };

    // Create a generated data file content mapping
    let newProductsData = JSON.parse(JSON.stringify(products));

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const filename = `${product.id}.jpg`;
        const filepath = path.join(IMAGE_DIR, filename);

        // Check if file already exists to skip
        if (fs.existsSync(filepath)) {
            log(`[SKIP] Image for ${product.name} already exists.`);
            newProductsData[i].image = `images/products/${filename}`;
            continue;
        }

        log(`[SEARCH] Finding image for: "${product.name}"...`);
        try {
            const imageUrl = await searchImage(product.name + " industrial product");
            if (imageUrl) {
                log(`[DOWNLOAD] Downloading: ${imageUrl}`);
                await downloadImage(imageUrl, filepath);
                newProductsData[i].image = `images/products/${filename}`;
            } else {
                log(`[WARN] No image found for: ${product.name}`);
            }
        } catch (error) {
            log(`[ERROR] Failed for ${product.name}: ${error.message}`);
        }

        // Respect API rate limits (mild delay)
        await new Promise(r => setTimeout(r, 1000));
    }

    // Output the new data array to console or helper file
    console.log("\nDefault images have been downloaded!");
    console.log("Please update your js/data.js image paths to point to 'images/products/<id>.jpg'.");

    // Optional: Accessing file rewriting logic here is adventurous without user consent, 
    // but we can log the JSON to copy-paste.
}

run();
