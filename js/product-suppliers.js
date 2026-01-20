document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('manufacturers-grid');

    if (!gridContainer) return;

    // Check if data is available
    if (typeof manufacturersData === 'undefined' || !manufacturersData || manufacturersData.length === 0) {
        gridContainer.innerHTML = '<p class="no-data">No manufacturer data available. Please run the fetch script.</p>';
        return;
    }

    manufacturersData.forEach(mfg => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'flip-card';

        // Mobile tap support: Toggle 'hovered' class on click
        card.addEventListener('click', function () {
            this.classList.toggle('hovered');
        });

        const name = mfg.name || 'Unknown';
        const image = mfg.image || 'images/placeholder.png';
        const description = mfg.description || 'Information unavailable';
        const country = mfg.country ? `<span>🌍 ${mfg.country}</span>` : '';

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
