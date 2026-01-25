document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Since components might be loaded dynamically on index.html, we need to try rendering again
    // after a short delay or if we observe the grid appearing.
    // However, main.js loads components then fires nothing specific globally, but we can check periodically or wait.
    // Better approach: Observer

    const observer = new MutationObserver((mutations) => {
        if (document.getElementById('products-grid') && document.getElementById('products-grid').children.length === 0) {
            renderProducts();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

function renderProducts() {
    const grid = document.getElementById('products-grid');

    // If grid doesn't exist or already has content (avoid double render), return
    // Note: checking children.length > 0 prevents duplicate rendering if script runs multiple times
    if (!grid || grid.children.length > 0) return;

    if (typeof products === 'undefined') {
        console.error('Products data is not available. Ensure data.js is loaded.');
        return;
    }

    // Determine path adjustment for images based on current page location
    const isInSubdirectory = window.location.pathname.includes('/categories/') ||
        window.location.pathname.includes('/products/');
    const imagePath = isInSubdirectory ? '../' : '';

    // Generate HTML
    const productsHTML = products.map(product => `
        <div class="product-card">
            <a href="${product.link}" class="product-link">
                <div class="product-image-wrapper">
                    <img src="${imagePath}${product.image}" alt="${product.name}" loading="lazy" class="product-image">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <ul class="product-list">
                        ${product.description.split(',').map(item => `<li>${item.trim()}</li>`).join('')}
                    </ul>
                </div>
            </a>
        </div>
    `).join('');

    grid.innerHTML = productsHTML;
    console.log(`Rendered ${products.length} products.`);
}
