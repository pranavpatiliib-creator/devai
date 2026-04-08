document.addEventListener('DOMContentLoaded', () => {
    const enquiryStorageKey = 'devaiSelectedProducts';
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');

    if (!form || !status) {
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const appScriptUrl = form.dataset.appScriptUrl;
    const messageField = form.querySelector('#message');
    const urlParams = new URLSearchParams(window.location.search);
    const requestedProduct = urlParams.get('product');
    const requestedProducts = urlParams.get('products');
    const requestedMessage = urlParams.get('message');
    const selectedProductsPanel = document.getElementById('selected-products-panel');
    const selectedProductsList = document.getElementById('selected-products-list');
    const clearSelectedProductsButton = document.getElementById('clear-selected-products');

    const getStoredProducts = () => {
        try {
            const raw = localStorage.getItem(enquiryStorageKey);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            return [];
        }
    };

    const saveStoredProducts = (products) => {
        localStorage.setItem(enquiryStorageKey, JSON.stringify(products));
    };

    const getSelectedProducts = () => {
        const productsFromUrl = requestedProducts
            ? requestedProducts.split('|').map((item) => item.trim()).filter(Boolean)
            : [];

        const mergedProducts = [...new Set([
            ...productsFromUrl,
            ...(requestedProduct ? [requestedProduct] : []),
            ...getStoredProducts()
        ])];

        saveStoredProducts(mergedProducts);
        return mergedProducts;
    };

    const renderSelectedProducts = (products) => {
        if (!selectedProductsPanel || !selectedProductsList) {
            return;
        }

        if (!products.length) {
            selectedProductsPanel.hidden = true;
            selectedProductsList.innerHTML = '';
            return;
        }

        selectedProductsPanel.hidden = false;
        selectedProductsList.innerHTML = products.map((product) => `
            <span class="selected-product-chip">${product}</span>
        `).join('');
    };

    const selectedProducts = getSelectedProducts();
    renderSelectedProducts(selectedProducts);

    if (messageField) {
        if (requestedMessage) {
            messageField.value = requestedMessage;
        } else if (selectedProducts.length > 1) {
            messageField.value = `Hi, I am interested in these products: ${selectedProducts.join(', ')}. Please share more details and pricing.`;
        } else if (requestedProduct) {
            messageField.value = `Hi, I am interested in ${requestedProduct}. Please share more details and pricing.`;
        } else if (selectedProducts.length === 1) {
            messageField.value = `Hi, I am interested in ${selectedProducts[0]}. Please share more details and pricing.`;
        }
    }

    if (clearSelectedProductsButton) {
        clearSelectedProductsButton.addEventListener('click', () => {
            localStorage.removeItem(enquiryStorageKey);
            renderSelectedProducts([]);
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!appScriptUrl || appScriptUrl.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
            status.textContent = 'Add your Google Apps Script web app URL first.';
            status.className = 'form-status form-status-error';
            return;
        }

        const payload = {
            companyName: form.company_name.value.trim(),
            senderName: form.sender_name.value.trim(),
            email: form.email.value.trim(),
            phone: form.phone.value.trim(),
            message: form.message.value.trim(),
            page: window.location.href,
            submittedAt: new Date().toISOString()
        };

        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        status.textContent = 'Submitting your message...';
        status.className = 'form-status';

        try {
            await fetch(appScriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                },
                body: JSON.stringify(payload)
            });

            form.reset();
            localStorage.removeItem(enquiryStorageKey);
            renderSelectedProducts([]);
            status.textContent = 'Message sent successfully. We will get back to you shortly.';
            status.className = 'form-status form-status-success';
        } catch (error) {
            status.textContent = 'Unable to send right now. Please try again.';
            status.className = 'form-status form-status-error';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});
