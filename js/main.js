// Get current page name
function getCurrentPage() {
    const pathname = window.location.pathname;
    const page = pathname.split('/').pop() || 'index.html';
    // Remove .html extension and return the page identifier
    return page.replace('.html', '') || 'index';
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const dataPage = link.getAttribute('data-page');
        link.classList.remove('active');

        if (dataPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Dynamic component loading
async function loadComponent(componentName, containerId) {
    try {
        const basePath = document.body.dataset.basePath || '';
        const response = await fetch(`${basePath}components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName}.html`);
        }
        let html = await response.text();

        // Adjust relative paths if we are in a subdirectory (basePath is present)
        if (basePath) {
            // Replace "../" paths with basePath (for subdirectory pages)
            html = html.replace(/(src|href)="\.\.\/([^"]+)"/g, `$1="${basePath}$2"`);
            // Replace "./" with basePath
            html = html.replace(/(src|href)="\.\/([^"]+)"/g, `$1="${basePath}$2"`);
            // Replace relative paths that don't start with ./, /, #, or http
            html = html.replace(/(src|href)="(?!(http|#|\/|\.\.\/|\.\/))([^"]+)"/g, `$1="${basePath}$3"`);
        }

        const element = document.getElementById(containerId);
        if (element) {
            element.innerHTML = html;

            // If this is the header component, set active link after loading
            if (componentName === 'header') {
                setActiveNavLink();
            }
        }
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

// Load all components
async function loadAllComponents() {
    // Calculate basePath based on current page location
    const pathDepth = (window.location.pathname.match(/\//g) || []).length - 1;
    const isInSubdirectory = window.location.pathname.includes('/categories/') ||
        window.location.pathname.includes('/products/');
    const basePath = isInSubdirectory ? '../' : '';

    // Set basePath on body for component loader to use
    document.body.dataset.basePath = basePath;

    let components = [
        { name: 'header', id: 'header' },
        { name: 'hero', id: 'hero' },
        { name: 'owner', id: 'owner' },
        { name: 'products', id: 'products' },
        { name: 'why-choose-us', id: 'why-choose-us' },
        { name: 'testimonials', id: 'testimonials' },
        { name: 'gallery', id: 'gallery' },
        { name: 'cta', id: 'cta' },
        { name: 'contact', id: 'contact' },
        { name: 'footer', id: 'footer' },
        { name: 'floating-buttons', id: 'floating-buttons' }
    ];

    // Exclude 'products' component on the homepage (index.html) to hide the Product section
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        components = components.filter(component => component.name !== 'products');
    }

    for (const component of components) {
        await loadComponent(component.name, component.id);
    }

    // Initialize JavaScript functionality after components are loaded
    initializeScripts();

    // Signal that everything is loaded (for the preloader)
    document.dispatchEvent(new CustomEvent('pageComponentsLoaded'));
}

// Initialize scripts after components are loaded
function initializeScripts() {
    // Testimonial slideshow functionality
    let testimonialIndex = 1;
    let testimonialInterval;

    function changeTestimonial(n) {
        clearInterval(testimonialInterval);
        showTestimonial(testimonialIndex += n);
        startAutoTestimonial();
    }

    function currentTestimonial(n) {
        clearInterval(testimonialInterval);
        showTestimonial(testimonialIndex = n);
        startAutoTestimonial();
    }

    function showTestimonial(n) {
        const slides = document.querySelectorAll('.slideshow-container .slide');
        const dots = document.querySelectorAll('.slide-dots .dot');

        if (n > slides.length) {
            testimonialIndex = 1;
        }
        if (n < 1) {
            testimonialIndex = slides.length;
        }

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (slides[testimonialIndex - 1]) {
            slides[testimonialIndex - 1].classList.add('active');
        }
        if (dots[testimonialIndex - 1]) {
            dots[testimonialIndex - 1].classList.add('active');
        }
    }

    function startAutoTestimonial() {
        testimonialInterval = setInterval(() => {
            changeTestimonial(1);
        }, 6000); // Change testimonial every 6 seconds
    }

    // Hamburger menu functionality is now handled by hamburger.js

    // Form submission


    // Smooth scrolling
    document.querySelectorAll('a[href^="#"], a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only handle internal anchors on the current page
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (href.includes('#')) {
                // For cross-page anchors (e.g., index.html#about), check if we are already on that page
                const [path, hash] = href.split('#');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';

                if (path === currentPage || (path === 'index.html' && currentPage === '')) {
                    const target = document.querySelector('#' + hash);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });

    // Start testimonial slideshow
    showTestimonial(testimonialIndex);
    startAutoTestimonial();
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadAllComponents);
