document.addEventListener('DOMContentLoaded', () => {
    function initHamburger() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');

        if (hamburger && navLinks) {
            // Remove any existing event listeners to avoid duplicates (if re-initialized)
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);

            newHamburger.addEventListener('click', function () {
                navLinks.classList.toggle('active');
                console.log("Hamburger clicked");
            });

            // Close menu when a nav link is clicked
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function () {
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    // Initialize immediately if present
    initHamburger();

    // Also observe DOM changes because header is loaded dynamically
    const observer = new MutationObserver((mutations) => {
        if (document.getElementById('hamburger')) {
            initHamburger();
            observer.disconnect(); // Stop observing once found
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
