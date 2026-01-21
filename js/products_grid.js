// Function to render products grid
function renderProductsGrid(products, containerId) {
    const gridContainer = document.getElementById(containerId);
    if (!gridContainer) return;

    if (!products || products.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product data available in this category.</p>';
        return;
    }

    gridContainer.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-flip-card';

        // Click-based interaction
        card.addEventListener('click', function (e) {
            // Prevent flip if clicking the button (optional, but requested click to flip)
            // However, usually we want the whole card to flip.
            this.classList.toggle('flipped');
        });

        const name = product.productName || 'Unknown Product';
        const image = product.image || 'images/placeholder_product.png';
        const mfg = product.manufacturerName || 'Premium Brand';
        const descShort = product.shortDescription || '';
        const descFull = product.fullDescription || 'Detailed specifications available on request.';
        const category = product.category || 'Industrial';

        card.innerHTML = `
            <div class="product-flip-card-inner">
                <div class="product-flip-card-front">
                    <span class="category-tag">${category}</span>
                    <div class="image-wrapper">
                        <img src="${image}" alt="${name}" loading="lazy" onerror="this.src='images/placeholder_product.png'">
                    </div>
                    <div class="product-info-front">
                        <p class="product-supplier">${mfg}</p>
                        <h3>${name}</h3>
                        <p class="short-desc">${descShort}</p>
                    </div>
                    <div class="flip-hint">Click for Details ↻</div>
                </div>
                <div class="product-flip-card-back">
                    <h3>${name}</h3>
                    <div class="back-content">
                        <p class="full-desc">${descFull}</p>
                        <a href="https://wa.me/919421493934?text=${encodeURIComponent('Hi Sagar, I am interested in: ' + name + '. Please provide more details and a quote.')}" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="enquire-btn"
                           onclick="event.stopPropagation();">Enquire Now</a>
                    </div>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });
}

// Function to open category or product page (simplified)
function openCategory(categoryId) {
    const pages = {
        'automation': 'automation.html',
        'electrical': 'electrical.html',
        'hydraulics': 'hydraulics.html',
        'instruments': 'instruments.html',
        'mechanical': 'mechanical.html',
        'safety': 'safety.html',
        'spares': 'spares.html'
    };
    if (pages[categoryId]) {
        window.location.href = pages[categoryId];
    }
}

// Global search (Optional simplification)
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.product-flip-card');

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? '' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // If we are on products.html, we might want to render all or specific categories
    const mainGrid = document.getElementById('products-grid');
    if (mainGrid && typeof productsData !== 'undefined') {
        renderProductsGrid(productsData, 'products-grid');
    }
    initializeSearch();
});

