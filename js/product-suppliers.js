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

    // Determine path adjustment for images based on current page location
    const isInSubdirectory = window.location.pathname.includes('/categories/') ||
        window.location.pathname.includes('/products/');
    const imagePath = isInSubdirectory ? '../' : '';

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
        const country = supplier.country ? '<span>🌍 ' + supplier.country + '</span>' : '';

        // Determine button text and data attributes
        const hasSupplierPage = supplier.supplierPage && supplier.supplierPage.trim() !== '';
        const hasWebsite = supplier.website && supplier.website.trim() !== '';
        const buttonText = hasSupplierPage ? 'View Supplier' : 'Visit Website';
        const supplierPageAttr = hasSupplierPage ? supplier.supplierPage : '';
        const websiteAttr = hasWebsite ? supplier.website : '';

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${imagePath}${image}" alt="${name} Logo" loading="lazy">
                    <div class="flip-card-name">${name}</div>
                </div>
                <div class="flip-card-back">
                    <h3>${name}</h3>
                    ${country ? '<div class="country">' + country + '</div>' : ''}
                    <div class="description">${description}</div>
                    ${hasSupplierPage || hasWebsite ? '<button class="supplier-button" data-supplier-page="' + supplierPageAttr + '" data-website="' + websiteAttr + '">' + buttonText + '</button>' : ''}
                </div>
            </div>
        `;

        gridContainer.appendChild(card);

        // Check if content overflows and add scroll indicator
        const cardBack = card.querySelector('.flip-card-back');
        if (cardBack.scrollHeight > cardBack.clientHeight) {
            cardBack.classList.add('has-scroll');
        }
    });

    // Add button click handlers after cards are created
    document.querySelectorAll('.supplier-button').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent card flip

            const supplierPage = this.getAttribute('data-supplier-page');
            const website = this.getAttribute('data-website');

            // Prioritize internal page over external website
            if (supplierPage && supplierPage.trim() !== '') {
                window.location.href = imagePath + 'productsupplier.html?supplier=' + encodeURIComponent(supplierPage);
            } else if (website && website.trim() !== '') {
                window.open(website, '_blank', 'noopener,noreferrer');
            }
        });
    });
});