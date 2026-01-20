document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('products-grid');

    if (!gridContainer) return;

    // Check if data is available
    if (typeof productsData === 'undefined' || !productsData || productsData.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product data available.</p>';
        return;
    }

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
                        <a href="contact.html" class="enquire-btn">Enquire Now</a>
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
