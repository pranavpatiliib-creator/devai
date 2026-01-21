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
            // Replace "./" with basePath
            html = html.replace(/(src|href)="\.\/([^"]+)"/g, `$1="${basePath}$2"`);
            // Replace relative paths that don't start with ./, /, #, or http
            html = html.replace(/(src|href)="(?!(http|#|\/|\.\.\/))([^"]+)"/g, `$1="${basePath}$3"`);
        }

        const element = document.getElementById(containerId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

// Load all components
async function loadAllComponents() {
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
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                product: formData.get('product'),
                message: formData.get('message')
            };

            fetch('/submit-quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    if (result.success) {
                        alert('Thank you for your inquiry! We will contact you soon.');
                        this.reset();
                    } else {
                        alert('Error submitting form. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error submitting form. Please try again.');
                });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Start testimonial slideshow
    showTestimonial(testimonialIndex);
    startAutoTestimonial();
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadAllComponents);
