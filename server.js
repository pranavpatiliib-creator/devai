const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const PRODUCTS_FILE = path.join(__dirname, 'js', 'products_data.js');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Helper function to read products data
function readProductsData() {
    try {
        // Read the JavaScript file and extract the array
        const fileContent = fs.readFileSync(PRODUCTS_FILE, 'utf8');

        // Extract the array from the JavaScript code
        const match = fileContent.match(/const productsData = (\[[\s\S]*?\]);/);
        if (match) {
            // Convert the JavaScript array string to JSON
            let arrayString = match[1];
            // Replace single quotes with double quotes for valid JSON
            arrayString = arrayString.replace(/'/g, '"');
            return JSON.parse(arrayString);
        }
        return [];
    } catch (error) {
        console.error('Error reading products data:', error);
        return [];
    }
}

// Helper function to write products data
function writeProductsData(products) {
    try {
        let code = 'const productsData = [\n';

        products.forEach((product, index) => {
            code += '    {\n';
            code += `        id: "${product.id}",\n`;
            code += `        productName: "${product.productName}",\n`;
            code += `        manufacturerName: "${product.manufacturerName}",\n`;
            code += `        category: "${product.category}",\n`;
            code += `        shortDescription: "${product.shortDescription}",\n`;
            code += `        fullDescription: "${product.fullDescription}",\n`;
            code += `        image: "${product.image}",\n`;
            code += `        datasheet: "${product.datasheet || '#'}"\n`;
            code += '    }';

            if (index < products.length - 1) {
                code += ',';
            }
            code += '\n';
        });

        code += '];\n\n';
        code += '// Export for Node.js environment if needed, otherwise it\'s a global variable in browser\n';
        code += 'if (typeof module !== \'undefined\' && module.exports) {\n';
        code += '    module.exports = productsData;\n';
        code += '}';

        fs.writeFileSync(PRODUCTS_FILE, code, 'utf8');
        return true;
    } catch (error) {
        console.error('Error writing products data:', error);
        return false;
    }
}

// Routes
app.get('/api/products', (req, res) => {
    const products = readProductsData();
    res.json(products);
});

app.post('/api/products', (req, res) => {
    const newProduct = req.body;

    if (!newProduct.productName || !newProduct.category || !newProduct.shortDescription || !newProduct.fullDescription) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const products = readProductsData();

    // Generate ID from product name
    const id = newProduct.productName.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

    newProduct.id = id;
    newProduct.datasheet = newProduct.datasheet || '#';

    products.push(newProduct);

    if (writeProductsData(products)) {
        res.json({ success: true, product: newProduct });
    } else {
        res.status(500).json({ error: 'Failed to save product' });
    }
});

app.put('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;

    const products = readProductsData();
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    products[index] = { ...products[index], ...updatedProduct };

    if (writeProductsData(products)) {
        res.json({ success: true, product: products[index] });
    } else {
        res.status(500).json({ error: 'Failed to update product' });
    }
});

app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const products = readProductsData();
    const filteredProducts = products.filter(p => p.id !== productId);

    if (filteredProducts.length === products.length) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (writeProductsData(filteredProducts)) {
        res.json({ success: true });
    } else {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

app.post('/api/products/bulk', (req, res) => {
    const products = req.body;

    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'Products must be an array' });
    }

    if (writeProductsData(products)) {
        res.json({ success: true, count: products.length });
    } else {
        res.status(500).json({ error: 'Failed to save products' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Admin panel available at http://localhost:${PORT}/admin.html`);
});
