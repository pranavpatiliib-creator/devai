document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchDropdown = document.getElementById('search-dropdown');

    if (!searchInput || !searchDropdown) return;

    let debounceTimer;

    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.trim().toLowerCase();
            if (query.length < 2) {
                searchDropdown.innerHTML = '';
                searchDropdown.style.display = 'none';
                return;
            }
            const results = searchData.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.keywords.some(k => k.includes(query))
            ).slice(0, 10);
            displayResults(results, query);
        }, 300);
    });

    function displayResults(results, query) {
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-item no-results">No results found</div>';
            searchDropdown.style.display = 'block';
            return;
        }
        searchDropdown.innerHTML = results.map(item => {
            const highlightedTitle = highlightMatch(item.title, query);
            return `<div class="search-item" data-url="${item.url}">
        <span class="search-title">${highlightedTitle}</span>
        <span class="search-type">${item.type}</span>
      </div>`;
        }).join('');
        searchDropdown.style.display = 'block';
    }

    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    searchDropdown.addEventListener('click', (e) => {
        const item = e.target.closest('.search-item');
        if (item && !item.classList.contains('no-results')) {
            const url = item.dataset.url;
            if (url && url !== '#') {
                window.location.href = url;
            }
        }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const firstItem = searchDropdown.querySelector('.search-item:not(.no-results)');
            if (firstItem) {
                const url = firstItem.dataset.url;
                if (url && url !== '#') {
                    window.location.href = url;
                }
            }
        } else if (e.key === 'Escape') {
            searchDropdown.style.display = 'none';
        }
    });

    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            searchDropdown.style.display = 'none';
        }, 200);
    });

    searchInput.addEventListener('focus', () => {
        if (searchDropdown.innerHTML && searchInput.value.trim().length >= 2) {
            searchDropdown.style.display = 'block';
        }
    });
});
