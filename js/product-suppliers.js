document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('manufacturers-grid');

    if (!gridContainer) {
        console.error('Grid container not found!');
        return;
    }

    gridContainer.innerHTML = '';

    if (typeof productSuppliersData === 'undefined' || !productSuppliersData || productSuppliersData.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No product supplier data available. Please check the data file.</p>';
        return;
    }

    const isInSubdirectory = window.location.pathname.includes('/categories/') ||
        window.location.pathname.includes('/products/');
    const imagePath = isInSubdirectory ? '../' : '';

    productSuppliersData.forEach((supplier) => {
        const card = document.createElement('div');
        card.className = 'flip-card';

        card.addEventListener('click', function () {
            this.classList.toggle('hovered');
        });

        const name = supplier.name || 'Unknown';
        const image = supplier.image || 'images/placeholder.png';
        const description = supplier.description || 'Information unavailable';
        const countryMarkup = supplier.country ? `<div class="country"><span>Global</span><span>${supplier.country}</span></div>` : '';

        const hasSupplierPage = supplier.supplierPage && supplier.supplierPage.trim() !== '';
        const hasWebsite = supplier.website && supplier.website.trim() !== '';
        const buttonText = hasSupplierPage ? 'View Supplier' : 'Visit Website';
        const supplierPageAttr = hasSupplierPage ? supplier.supplierPage : '';
        const websiteAttr = hasWebsite ? supplier.website : '';

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="supplier-chip">Brand Partner</div>
                    <div class="supplier-logo-wrap">
                        <img src="${imagePath}${image}" alt="${name} industrial brand logo" loading="lazy">
                    </div>
                    <div>
                        <div class="flip-card-name">${name}</div>
                        <div class="flip-card-subtitle">Industrial supplier portfolio</div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <h3>${name}</h3>
                    <div class="flip-card-meta">
                        ${countryMarkup}
                    </div>
                    <div class="description">${description}</div>
                    ${hasSupplierPage || hasWebsite ? `<button class="supplier-button" data-supplier-page="${supplierPageAttr}" data-website="${websiteAttr}">${buttonText}</button>` : ''}
                </div>
            </div>
        `;

        gridContainer.appendChild(card);

        const cardBack = card.querySelector('.flip-card-back');
        if (cardBack.scrollHeight > cardBack.clientHeight) {
            cardBack.classList.add('has-scroll');
        }
    });

    document.querySelectorAll('.supplier-button').forEach((button) => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            const supplierPage = this.getAttribute('data-supplier-page');
            const website = this.getAttribute('data-website');

            if (supplierPage && supplierPage.trim() !== '') {
                window.location.href = imagePath + 'productsupplier.html?supplier=' + encodeURIComponent(supplierPage);
            } else if (website && website.trim() !== '') {
                window.open(website, '_blank', 'noopener,noreferrer');
            }
        });
    });
});
