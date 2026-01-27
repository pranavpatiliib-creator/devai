// Slideshow functionality
let slideIndex = 1;
let slideInterval;

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlide(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlide(slideIndex = n);
    startAutoSlide();
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

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

// Hamburger menu functionality
document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Start slideshow on page load
window.addEventListener('load', () => {
    showSlide(slideIndex);
    startAutoSlide();
    showTestimonial(testimonialIndex);
    startAutoTestimonial();
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
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
