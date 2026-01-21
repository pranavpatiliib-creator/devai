// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize admin panel
    initializeAdmin();

    // Load existing products data if available
    loadExistingProducts();
});

function initializeAdmin() {
    // Login functionality
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const adminDashboard = document.getElementById('admin-dashboard');
    const logoutBtn = document.getElementById('logout-btn');
    const loginError = document.getElementById('login-error');

    // Simple password check (in production, use proper authentication)
    const ADMIN_PASSWORD = 'admin123'; // Change this to your desired password

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const password = document.getElementById('password').value;

        if (password === ADMIN_PASSWORD) {
            loginScreen.classList.add('hidden');
            adminDashboard.classList.remove('hidden');
            loginError.textContent = '';
            initializeProductForm();
        } else {
            loginError.textContent = 'Invalid password. Please try again.';
        }
    });

    logoutBtn.addEventListener('click', function () {
        adminDashboard.classList.add('hidden');
        loginScreen.classList.remove('hidden');
        loginForm.reset();
    });

    // Initialize image selector
    populateImageSelector();
}

function populateImageSelector() {
    const imageSelect = document.getElementById('image');
    const imageDir = 'images/products/';

    // List of available product images (you can expand this list)
    const availableImages = [
        'abs_electrical_enclosure.png',
        'acb_air_circuit_breaker.png',
        'armoured_electrical_cable.png',
        'brass_cable_gland.png',
        'clamp_meter_electrical.png',
        'cnc_machine_light.png',
        'cob_led_light.png',
        'control_relay_industrial.png',
        'digital_multimeter_industrial.png',
        'din_rail_electrical.png',
        'din_rail_power_supply.png',
        'door_safety_interlock_switch.png',
        'electrical_contactor.png',
        'emergency_stop_switch.png',
        'hmi_touch_panel_industrial.png',
        'inductive_proximity_sensor.png',
        'industrial_bearing.png',
        'industrial_contactor.png',
        'industrial_electric_motor.png',
        'industrial_electrical_switch_socket.png',
        'industrial_ethernet_switch.png',
        'industrial_gearbox.png',
        'industrial_power_connector.png',
        'industrial_power_tools.png',
        'industrial_ups_system.png',
        'led_flood_light.png',
        'led_high_bay_light.png',
        'led_spot_light.png',
        'led_street_light.png',
        'limit_switch_industrial.png',
        'lt_control_panel.png',
        'machine_safety_switch.png',
        'mcb_electrical_switch.png',
        'mcb_miniature_circuit_breaker.png',
        'mccb_electrical_switchgear.png',
        'mccb_molded_case_circuit_breaker.png',
        'mpcb_motor_protection_circuit_breaker.png',
        'photoelectric_sensor_industrial.png',
        'plc_automation_controller.png',
        'pneumatic_tools_industrial.png',
        'power_relay_electrical.png',
        'rtd_temperature_sensor.png',
        'safety_relay.png',
        'sfu_switch_fuse_unit.png',
        'smps_power_supply_industrial.png',
        'thermal_imaging_camera_industrial.png',
        'thermal_overload_relay.png',
        'v_belt_industrial.png',
        'vfd_drive_industrial.png',
        'vmc_machine_light.png'
    ];

    availableImages.forEach(image => {
        const option = document.createElement('option');
        option.value = imageDir + image;
        option.textContent = image.replace('.png', '').replace(/_/g, ' ');
        imageSelect.appendChild(option);
    });
}

function initializeProductForm() {
    const productForm = document.getElementById('product-form');
    const productsList = document.getElementById('products-list');
    const productCount = document.getElementById('product-count');
    const previewCard = document.getElementById('preview-card');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const codeOutput = document.getElementById('code-output');

    let products = [];

    // Load existing products from localStorage
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
        updateProductsDisplay();
    }

    // Form submission
    productForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const productName = document.getElementById('productName').value.trim();
        const productSupplierName = document.getElementById('productSupplierName').value.trim();
        const category = document.getElementById('category').value;
        const imageSelect = document.getElementById('image').value;
        const customImage = document.getElementById('customImage').value.trim();
        const shortDescription = document.getElementById('shortDescription').value.trim();
        const fullDescription = document.getElementById('fullDescription').value.trim();

        const image = customImage || imageSelect;

        if (!productName || !category || !shortDescription || !fullDescription) {
            alert('Please fill in all required fields.');
            return;
        }

        const product = {
            productName: productName,
            manufacturerName: productSupplierName, // Keep compatibility with existing data structure
            category: category,
            shortDescription: shortDescription,
            fullDescription: fullDescription,
            image: image,
            datasheet: "#"
        };

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                const result = await response.json();
                products.push(result.product);
                updateProductsDisplay();
                updatePreview(result.product);
                productForm.reset();
                alert('Product added successfully!');
            } else {
                const error = await response.json();
                alert('Error adding product: ' + error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to server. Make sure the server is running.');
        }
    });

    // Clear all products
    clearAllBtn.addEventListener('click', async function () {
        if (confirm('Are you sure you want to clear all products? This action cannot be undone.')) {
            try {
                // Clear all products by sending empty array
                const response = await fetch('/api/products/bulk', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify([])
                });

                if (response.ok) {
                    products = [];
                    updateProductsDisplay();
                    previewCard.innerHTML = '<div class="preview-placeholder"><p>Fill the form to see preview</p></div>';
                    alert('All products cleared successfully!');
                } else {
                    const error = await response.json();
                    alert('Error clearing products: ' + error.error);
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error connecting to server. Make sure the server is running.');
            }
        }
    });

    // Generate code
    generateBtn.addEventListener('click', function () {
        const code = generateProductsDataCode(products);
        codeOutput.value = code;

        // Create download link
        createDownloadLink(code);
    });

    // Copy code
    copyBtn.addEventListener('click', function () {
        codeOutput.select();
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    });

    // Live preview updates
    const formInputs = productForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', updateLivePreview);
    });
}

function updateLivePreview() {
    const productName = document.getElementById('productName').value.trim();
    const productSupplierName = document.getElementById('productSupplierName').value.trim();
    const category = document.getElementById('category').value;
    const imageSelect = document.getElementById('image').value;
    const customImage = document.getElementById('customImage').value.trim();
    const shortDescription = document.getElementById('shortDescription').value.trim();
    const fullDescription = document.getElementById('fullDescription').value.trim();

    const image = customImage || imageSelect;

    if (productName && category && shortDescription && fullDescription) {
        const previewProduct = {
            productName: productName,
            manufacturerName: productSupplierName,
            category: category,
            image: image || 'images/placeholder_product.png',
            shortDescription: shortDescription,
            fullDescription: fullDescription
        };
        updatePreview(previewProduct);
    } else {
        document.getElementById('preview-card').innerHTML = '<div class="preview-placeholder"><p>Fill the form to see preview</p></div>';
    }
}

function updatePreview(product) {
    const previewCard = document.getElementById('preview-card');

    previewCard.innerHTML = `
        <div class="product-flip-card">
            <div class="product-flip-card-inner">
                <div class="product-flip-card-front">
                    <span class="category-tag">${product.category}</span>
                    <div class="image-wrapper">
                        <img src="${product.image}" alt="${product.productName}" onerror="this.src='images/placeholder_product.png'">
                    </div>
                    <div class="product-info-front">
                        <h3>${product.productName}</h3>
                        ${product.manufacturerName ? `<p class="product-supplier">${product.manufacturerName}</p>` : ''}
                        <p class="short-desc">${product.shortDescription}</p>
                    </div>
                    <div class="flip-hint">Click to details ↻</div>
                </div>
                <div class="product-flip-card-back">
                    <h3>${product.productName}</h3>
                    <div class="back-content">
                        <p class="full-desc">${product.fullDescription}</p>
                        <a href="#" class="enquire-btn">Enquire Now</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateProductsDisplay() {
    const productsList = document.getElementById('products-list');
    const productCount = document.getElementById('product-count');

    productCount.textContent = products.length;

    if (products.length === 0) {
        productsList.innerHTML = '<p class="empty-msg">No products added yet</p>';
        return;
    }

    productsList.innerHTML = '';

    products.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <div class="product-item-header">
                <h4>${product.productName}</h4>
                <button class="btn-remove" data-index="${index}">Remove</button>
            </div>
            <div class="product-item-details">
                <p><strong>Supplier:</strong> ${product.manufacturerName || 'N/A'}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Description:</strong> ${product.shortDescription}</p>
            </div>
        `;

        // Add remove functionality
        const removeBtn = productItem.querySelector('.btn-remove');
        removeBtn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            products.splice(index, 1);
            saveProducts();
            updateProductsDisplay();
        });

        productsList.appendChild(productItem);
    });
}

function saveProducts() {
    localStorage.setItem('adminProducts', JSON.stringify(products));
}

async function loadExistingProducts() {
    try {
        const response = await fetch('/api/products');
        if (response.ok) {
            products = await response.json();
            updateProductsDisplay();
        } else {
            console.error('Failed to load products from server');
        }
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to localStorage if server is not available
        const savedProducts = localStorage.getItem('adminProducts');
        if (savedProducts) {
            products = JSON.parse(savedProducts);
            updateProductsDisplay();
        }
    }
}

function createDownloadLink(code) {
    // Remove existing download link if any
    const existingLink = document.getElementById('download-link');
    if (existingLink) {
        existingLink.remove();
    }

    // Create download link
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.id = 'download-link';
    downloadLink.href = url;
    downloadLink.download = 'products_data.js';
    downloadLink.textContent = 'Download products_data.js';
    downloadLink.className = 'btn-download';
    downloadLink.style.cssText = `
        display: inline-block;
        margin-left: 10px;
        padding: 8px 16px;
        background-color: #28a745;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
    `;

    // Add to the code section header
    const codeSectionHeader = document.querySelector('.code-section .section-header');
    codeSectionHeader.appendChild(downloadLink);

    // Clean up the URL object after download
    downloadLink.addEventListener('click', function () {
        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 100);
    });
}

function generateProductsDataCode(products) {
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
        code += `        datasheet: "#"\n`;
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

    return code;
}
