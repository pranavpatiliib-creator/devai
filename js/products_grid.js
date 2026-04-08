const enquiryStorageKey = 'devaiSelectedProducts';

function getSelectedProducts() {
    try {
        const raw = localStorage.getItem(enquiryStorageKey);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveSelectedProducts(products) {
    localStorage.setItem(enquiryStorageKey, JSON.stringify(products));
}

function addProductToEnquiry(productName) {
    const selectedProducts = getSelectedProducts();

    if (!selectedProducts.includes(productName)) {
        selectedProducts.push(productName);
        saveSelectedProducts(selectedProducts);
    }

    return selectedProducts;
}

function removeProductFromEnquiry(productName) {
    const updatedProducts = getSelectedProducts().filter((product) => product !== productName);
    saveSelectedProducts(updatedProducts);
    return updatedProducts;
}

function buildEnquiryLink(contactPageBaseLink, productName, includeAllSelected = false) {
    const selectedProducts = includeAllSelected ? addProductToEnquiry(productName) : [productName];
    const message = selectedProducts.length > 1
        ? `Hi, I am interested in these products: ${selectedProducts.join(', ')}. Please share more details and pricing.`
        : `Hi, I am interested in ${selectedProducts[0]}. Please share more details and pricing.`;

    return `${contactPageBaseLink}?products=${encodeURIComponent(selectedProducts.join('|'))}&message=${encodeURIComponent(message)}`;
}

function getContactPageBaseLink() {
    return window.location.pathname.includes('/categories/') || window.location.pathname.includes('\\categories\\')
        ? '../categories/contact.html'
        : 'categories/contact.html';
}

function renderEnquirySummary() {
    const summaryPanel = document.getElementById('enquiry-summary-panel');
    const summaryList = document.getElementById('enquiry-summary-list');
    const enquiryLink = document.getElementById('go-to-enquiry-link');
    const selectedProducts = getSelectedProducts();

    document.querySelectorAll('.add-enquiry-btn').forEach((button) => {
        const isSelected = selectedProducts.includes(button.dataset.productName);
        updateEnquiryButtonState(button, isSelected);
    });

    if (!summaryPanel || !summaryList || !enquiryLink) {
        return;
    }

    if (!selectedProducts.length) {
        summaryPanel.hidden = true;
        summaryList.innerHTML = '';
        enquiryLink.href = getContactPageBaseLink();
        return;
    }

    summaryPanel.hidden = false;
    summaryList.innerHTML = selectedProducts.map((product) => `
        <span class="enquiry-summary-chip">
            <span class="enquiry-summary-chip-label">${product}</span>
            <button type="button"
                class="enquiry-summary-chip-remove"
                data-product-name="${product.replace(/"/g, '&quot;')}"
                aria-label="Remove ${product} from enquiry">×</button>
        </span>
    `).join('');
    enquiryLink.href = buildEnquiryLink(getContactPageBaseLink(), selectedProducts[selectedProducts.length - 1], true);
}

function updateEnquiryButtonState(button, isSelected) {
    if (!button) {
        return;
    }

    button.classList.toggle('is-added', isSelected);
    button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    button.textContent = isSelected ? 'Added to Inquiry' : 'Add to Inquiry';
}

// Function to render products grid
function renderProductsGrid(products, containerId) {
    const gridContainer = document.getElementById(containerId);
    if (!gridContainer) return;

    if (!products || products.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product data available in this category.</p>';
        return;
    }

    gridContainer.innerHTML = '';

    const contactPageBaseLink = getContactPageBaseLink();

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-flip-card';

        // Click-based interaction
        card.addEventListener('click', function (e) {
            if (e.target.closest('.product-card-actions')) {
                return;
            }

            this.classList.toggle('flipped');
        });

        const name = product.productName || 'Unknown Product';
        const image = product.image || 'images/placeholder_product.png';
        const mfg = product.manufacturerName || 'Premium Brand';
        const descShort = product.shortDescription || '';
        const descFull = product.fullDescription || 'Detailed specifications available on request.';
        const category = product.category || 'Industrial';
        const contactPageLink = buildEnquiryLink(contactPageBaseLink, name);

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
                </div>
                <div class="product-flip-card-back">
                    <h3>${name}</h3>
                    <div class="back-content">
                        <p class="full-desc">${descFull}</p>
                        <div class="product-card-actions">
                            <button type="button"
                                class="add-enquiry-btn"
                                data-product-name="${name.replace(/"/g, '&quot;')}"
                                aria-pressed="false">Add to Inquiry</button>
                            <a href="${contactPageLink}" 
                               class="enquire-btn"
                               data-product-name="${name.replace(/"/g, '&quot;')}">Enquire Now</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    renderEnquirySummary();
}

function createSearchUI(grid) {
    if (!grid || document.querySelector('.products-search-panel')) {
        return;
    }

    const searchPanel = document.createElement('section');
    searchPanel.className = 'products-search-panel';
    searchPanel.innerHTML = `
        <div class="products-search-shell">
            <div class="products-search-copy">
                <p class="products-search-kicker">Product Search</p>
                <h2>Find the right product faster</h2>
                <p>Search by product name, brand, category, or requirement keywords.</p>
            </div>
            <form class="products-search-form" id="products-search-form">
                <label class="sr-only" for="product-search-input">Search products</label>
                <input id="product-search-input" class="search-input" type="search" placeholder="Search products, brands, or application" autocomplete="off">
                <button type="submit" class="search-btn">Search</button>
                <button type="button" class="search-clear-btn">Clear</button>
            </form>
            <p class="search-results-text" id="search-results-text" aria-live="polite"></p>
        </div>
    `;

    grid.parentElement.insertBefore(searchPanel, grid);
}

function isMainProductsPage() {
    return window.location.pathname.includes('/categories/products.html') ||
        window.location.pathname.includes('\\categories\\products.html');
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
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    createSearchUI(grid);

    const searchForm = document.getElementById('products-search-form');
    const searchInput = document.getElementById('product-search-input');
    const clearButton = document.querySelector('.search-clear-btn');
    const resultsText = document.getElementById('search-results-text');
    const cards = () => Array.from(document.querySelectorAll('.product-flip-card'));

    if (!searchForm || !searchInput || !clearButton || !resultsText) {
        return;
    }

    const applySearch = () => {
        const term = searchInput.value.toLowerCase().trim();
        const allCards = cards();
        let visibleCount = 0;
        const requireSearchTerm = isMainProductsPage();

        allCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const matches = term ? text.includes(term) : !requireSearchTerm;
            card.style.display = matches ? '' : 'none';

            if (matches) {
                visibleCount += 1;
            }
        });

        if (!term) {
            resultsText.textContent = requireSearchTerm
                ? 'Search by product name, brand, category, or requirement to see matching products.'
                : `Showing all ${visibleCount} products.`;
            return;
        }

        if (visibleCount === 0) {
            resultsText.textContent = `No products found for "${searchInput.value}". Try another keyword.`;
            return;
        }

        resultsText.textContent = `${visibleCount} product${visibleCount === 1 ? '' : 's'} found for "${searchInput.value}".`;
    };

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        applySearch();
    });

    searchInput.addEventListener('input', applySearch);

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        applySearch();
        searchInput.focus();
    });

    applySearch();
}

function initializeEnquirySelection() {
    const grid = document.getElementById('products-grid');
    const clearSelectionButton = document.getElementById('clear-enquiry-selection');
    const summaryList = document.getElementById('enquiry-summary-list');
    if (!grid) return;

    grid.addEventListener('click', (event) => {
        const addButton = event.target.closest('.add-enquiry-btn');
        const enquireLink = event.target.closest('.enquire-btn');

        if (addButton) {
            event.preventDefault();
            event.stopPropagation();
            const productName = addButton.dataset.productName;
            addProductToEnquiry(productName);
            updateEnquiryButtonState(addButton, true);
            renderEnquirySummary();
            return;
        }

        if (enquireLink) {
            event.stopPropagation();
            const productName = enquireLink.dataset.productName;
            enquireLink.href = buildEnquiryLink(
                getContactPageBaseLink(),
                productName,
                true
            );
        }
    });

    if (summaryList) {
        summaryList.addEventListener('click', (event) => {
            const removeChipButton = event.target.closest('.enquiry-summary-chip-remove');
            if (!removeChipButton) {
                return;
            }

            event.preventDefault();
            removeProductFromEnquiry(removeChipButton.dataset.productName);
            renderEnquirySummary();
        });
    }

    if (clearSelectionButton) {
        clearSelectionButton.addEventListener('click', () => {
            saveSelectedProducts([]);
            renderEnquirySummary();
        });
    }

    renderEnquirySummary();
}

document.addEventListener('DOMContentLoaded', () => {
    // If we are on products.html, we might want to render all or specific categories
    const mainGrid = document.getElementById('products-grid');
    if (mainGrid && typeof productsData !== 'undefined') {
        renderProductsGrid(productsData, 'products-grid');
    }
    initializeSearch();
    initializeEnquirySelection();
});

