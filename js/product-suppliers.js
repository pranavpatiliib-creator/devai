document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('manufacturers-grid');

    if (!gridContainer) {
        console.error('Grid container not found!');
        return;
    }

    // Remove loading spinner
    gridContainer.innerHTML = '';

    // Check if data is available
    if (typeof productSuppliersData === 'undefined' || !productSuppliersData || productSuppliersData.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product supplier data available. Please check the data file.</p>';
        return;
    }

    console.log('Loading', productSuppliersData.length, 'suppliers');

    productSuppliersData.forEach(supplier => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'flip-card';

        // Mobile tap support: Toggle 'hovered' class on click
        card.addEventListener('click', function () {
            this.classList.toggle('hovered');
        });

        const name = supplier.name || 'Unknown';
        const image = supplier.image || 'images/placeholder.png';
        const description = supplier.description || 'Information unavailable';
        const country = supplier.country ? `<span>🌍 ${supplier.country}</span>` : '';

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${image}" alt="${name} Logo" loading="lazy" onerror="this.src='images/placeholder_logo.png'">
                    <div class="flip-card-name">${name}</div>
                </div>
                <div class="flip-card-back">
                    <h3>${name}</h3>
                    ${country ? `<div class="country">${country}</div>` : ''}
                    <div class="description">${description}</div>
                </div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
});