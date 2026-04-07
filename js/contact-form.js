document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');

    if (!form || !status) {
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const appScriptUrl = form.dataset.appScriptUrl;

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
