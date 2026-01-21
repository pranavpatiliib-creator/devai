document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('products-grid');

    if (!gridContainer) return;

    // Check if data is available
    if (typeof productsData === 'undefined' || !productsData || productsData.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product data available.</p>';
        return;
    }

    // Clear loading spinner before rendering products
    gridContainer.innerHTML = '';

    productsData.forEach(product => {
        // Create card wrapper
        const card = document.createElement('div');
        card.className = 'product-flip-card';

        // Add click event for mobile flip interaction
        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });

        // Safe fallbacks
        const name = product.productName || 'Unknown Product';
        const image = product.image || 'images/placeholder.png';
        const mfg = product.manufacturerName || '';
        const descShort = product.shortDescription || '';
        const descFull = product.fullDescription || 'No description available.';
        const category = product.category || 'Industrial';

        card.innerHTML = `
            <div class="product-flip-card-inner">
                <!-- Front Side -->
                <div class="product-flip-card-front">
                    <span class="category-tag">${category}</span>
                    <div class="image-wrapper">
                        <img src="${image}" alt="${name}" loading="lazy" onerror="this.src='images/placeholder_product.png'">
                    </div>
                    <div class="product-info-front">
                        <h3>${name}</h3>
                        ${mfg ? `<p class="product-supplier">${mfg}</p>` : ''}
                        <p class="short-desc">${descShort}</p>
                    </div>
                    <div class="flip-hint">Click to details ↻</div>
                </div>

                <!-- Back Side -->
                <div class="product-flip-card-back">
                    <h3>${name}</h3>
                    <div class="back-content">
                        <p class="full-desc">${descFull}</p>
                        <a href="https://wa.me/919421493934?text=${encodeURIComponent('Hi Sagar , I am interested in: ' + name + '. Please provide more details and the budget quation for it.')}" target="_blank" rel="noopener noreferrer" class="enquire-btn">Enquire Now</a>
                    </div>
                </div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
});

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) {
        // Retry if search input not yet loaded
        setTimeout(initializeSearch, 100);
        return;
    }

    const productCards = gridContainer.querySelectorAll('.product-flip-card');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();

        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productSupplier = card.querySelector('.product-supplier') ? card.querySelector('.product-supplier').textContent.toLowerCase() : '';
            const category = card.querySelector('.category-tag').textContent.toLowerCase();

            const matches = productName.includes(searchTerm) ||
                productSupplier.includes(searchTerm) ||
                category.includes(searchTerm);

            card.style.display = matches || searchTerm === '' ? '' : 'none';
        });
    });
}

// Initialize search after products are rendered
initializeSearch();

// Category mapping for filtering
const categoryMapping = {
    'automation': ['Automation'],
    'electrical': ['Switchgear', 'Controlgear', 'Power Supply', 'Panels'],
    'hydraulics': ['Accessories', 'Mechanical'],
    'instruments': ['Sensors', 'Testing'],
    'mechanical': ['Motors', 'Mechanical'],
    'safety': ['Safety'],
    'spares': ['Accessories', 'Cables', 'Enclosures']
};

// Function to open category page
function openCategory(categoryId) {
    const categoryPages = {
        'automation': 'automation.html',
        'electrical': 'electrical.html',
        'hydraulics': 'hydraulics.html',
        'instruments': 'instruments.html',
        'mechanical': 'mechanical.html',
        'safety': 'safety.html',
        'spares': 'spares.html'
    };
    const page = categoryPages[categoryId];
    if (page) {
        window.location.href = page;
    }
}

// Function to filter products by sub-category
function filterBySubCategory(subCategory) {
    const gridContainer = document.getElementById('products-grid');
    if (!gridContainer) return;

    // Clear existing content
    gridContainer.innerHTML = '';

    // Filter products by sub-category
    const filteredProducts = productsData.filter(product => product.subCategory === subCategory);

    if (filteredProducts.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No products found in this sub-category.</p>';
        return;
    }

    // Render filtered products
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-flip-card';

        card.addEventListener('click', function () {
            this.classList.toggle('flipped');
        });

        const name = product.productName || 'Unknown Product';
        const image = product.image || 'images/placeholder_product.png';
        const mfg = product.manufacturerName || '';
        const descShort = product.shortDescription || '';
        const descFull = product.fullDescription || 'No description available.';
        const category = product.category || 'Industrial';

        card.innerHTML = `
            <div class="product-flip-card-inner">
                <div class="product-flip-card-front">
                    <span class="category-tag">${category}</span>
                    <div class="image-wrapper">
                        <img src="${image}" alt="${name}" loading="lazy" onerror="this.src='images/placeholder_product.png'">
                    </div>
                    <div class="product-info-front">
                        <h3>${name}</h3>
                        ${mfg ? `<p class="product-supplier">${mfg}</p>` : ''}
                        <p class="short-desc">${descShort}</p>
                    </div>
                    <div class="flip-hint">Click to details ↻</div>
                </div>
                <div class="product-flip-card-back">
                    <h3>${name}</h3>
                    <div class="back-content">
                        <p class="full-desc">${descFull}</p>
                        <a href="https://wa.me/919421493934?text=${encodeURIComponent('Hi Sagar , I am interested in: ' + name + '. Please provide more details and the budget quation for it.')}" target="_blank" rel="noopener noreferrer" class="enquire-btn">Enquire Now</a>
                    </div>
                </div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}
