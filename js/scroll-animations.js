/* ========================================
   SCROLL-BASED ANIMATION ENGINE
   Intersection Observer for premium feel
   ======================================== */

class ScrollAnimationEngine {
    constructor() {
        this.animatingElements = [];
        this.parallaxElements = [];
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallax();
        this.setupScrollAnimations();
    }

    /**
     * Intersection Observer for scroll-triggered animations
     */
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.triggerScrollAnimation(entry.target);
                } else {
                    // Only reset if animation requires re-trigger
                    if (entry.target.dataset.resetOnScroll === 'true') {
                        entry.target.classList.remove('in-view');
                    }
                }
            });
        }, observerOptions);

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach((element) => {
            observer.observe(element);
        });

        // Also observe card elements
        document.querySelectorAll('.card, .testimonial, .product-item').forEach((element) => {
            observer.observe(element);
        });
    }

    /**
     * Trigger animation when element enters viewport
     */
    triggerScrollAnimation(element) {
        element.classList.add('in-view');

        // Add parallax class if needed
        if (element.dataset.parallax === 'true') {
            element.classList.add('parallax-element');
        }

        // Trigger stagger if parent has multiple children
        if (element.dataset.stagger === 'true') {
            this.applyStagger(element);
        }

        // Custom callbacks
        if (element.dataset.onReveal) {
            const callback = window[element.dataset.onReveal];
            if (typeof callback === 'function') {
                callback(element);
            }
        }
    }

    /**
     * Apply staggered animation to child elements
     */
    applyStagger(parent) {
        const children = parent.querySelectorAll('[data-stagger-child]');
        children.forEach((child, index) => {
            const delay = index * 0.1;
            child.style.transitionDelay = `${delay}s`;
            setTimeout(() => {
                child.classList.add('in-view');
            }, delay * 1000);
        });
    }

    /**
     * Parallax scrolling effect
     */
    setupParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                parallaxElements.forEach((element) => {
                    const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
                    const rect = element.getBoundingClientRect();
                    const scrolled = window.pageYOffset;

                    // Only apply parallax when element is visible
                    if (rect.bottom > 0 && rect.top < window.innerHeight) {
                        const yPos = scrolled * speed;
                        element.style.transform = `translateY(${yPos}px)`;
                    }
                });
            });
        });
    }

    /**
     * Advanced scroll-based animations
     */
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-scroll-animation]');

        if (animatedElements.length === 0) return;

        window.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                animatedElements.forEach((element) => {
                    const animationType = element.dataset.scrollAnimation;
                    const rect = element.getBoundingClientRect();
                    const scrollProgress = 1 - (rect.top / window.innerHeight);

                    // Clamp scroll progress between 0 and 1
                    const progress = Math.max(0, Math.min(1, scrollProgress));

                    this.applyAnimationEffect(element, animationType, progress);
                });
            });
        });
    }

    /**
     * Apply animation effect based on scroll progress
     */
    applyAnimationEffect(element, animationType, progress) {
        switch (animationType) {
            case 'fadeIn':
                element.style.opacity = progress;
                break;

            case 'slideUp':
                element.style.transform = `translateY(${(1 - progress) * 50}px)`;
                element.style.opacity = progress;
                break;

            case 'slideDown':
                element.style.transform = `translateY(${progress * 50}px)`;
                element.style.opacity = progress;
                break;

            case 'slideLeft':
                element.style.transform = `translateX(${(1 - progress) * -50}px)`;
                element.style.opacity = progress;
                break;

            case 'slideRight':
                element.style.transform = `translateX(${(1 - progress) * 50}px)`;
                element.style.opacity = progress;
                break;

            case 'scaleUp':
                const scale = 0.8 + progress * 0.2;
                element.style.transform = `scale(${scale})`;
                element.style.opacity = progress;
                break;

            case 'rotate':
                element.style.transform = `rotate(${progress * 360}deg)`;
                element.style.opacity = progress;
                break;

            case 'blur':
                const blur = (1 - progress) * 10;
                element.style.filter = `blur(${blur}px)`;
                element.style.opacity = progress;
                break;

            case 'clip':
                element.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
                break;
        }
    }

    /**
     * Add animation to element dynamically
     */
    addAnimation(element, animationType) {
        if (!element.dataset.scrollAnimation) {
            element.dataset.scrollAnimation = animationType;
        }
    }

    /**
     * Refresh observers (call after DOM changes)
     */
    refresh() {
        this.setupIntersectionObserver();
        this.setupParallax();
        this.setupScrollAnimations();
    }
}

/* ========================================
   MICRO-INTERACTIONS ENGINE
   ======================================== */

class MicroInteractionsEngine {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonInteractions();
        this.setupLinkInteractions();
        this.setupCardInteractions();
        this.setupNavInteractions();
    }

    /**
     * Button press and hover effects
     */
    setupButtonInteractions() {
        const buttons = document.querySelectorAll('.btn, button');

        buttons.forEach((button) => {
            // Hover effect
            button.addEventListener('mouseenter', () => {
                button.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                button.style.transform = 'translateY(-3px) scale(1.02)';
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });

            // Click effect (ripple-like)
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });

            // Focus for accessibility
            button.addEventListener('focus', () => {
                button.style.outline = 'none';
                button.style.boxShadow = '0 0 0 3px rgba(255, 215, 0, 0.3)';
            });

            button.addEventListener('blur', () => {
                button.style.boxShadow = '';
            });
        });
    }

    /**
     * Create ripple effect on click
     */
    createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Add styles for ripple
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        ripple.style.opacity = '0';

        // Ensure element is relative positioned
        if (getComputedStyle(element).position === 'static') {
            element.style.position = 'relative';
        }

        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    /**
     * Link hover and underline animations
     */
    setupLinkInteractions() {
        const links = document.querySelectorAll('a:not(.btn):not([class*="nav"])');

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                link.style.transition = 'color 0.3s ease';
            });
        });
    }

    /**
     * Card lift and shadow effects
     */
    setupCardInteractions() {
        const cards = document.querySelectorAll('.card, .testimonial, .product-card');

        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                card.style.transform = 'translateY(-8px)';
                card.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    /**
     * Navigation link animations
     */
    setupNavInteractions() {
        const navLinks = document.querySelectorAll('.nav-links a, .nav a:not(.logo)');

        navLinks.forEach((link) => {
            link.addEventListener('mouseenter', () => {
                link.style.transition = 'all 0.3s ease';
                link.style.color = '#ffd700';
            });

            link.addEventListener('mouseleave', () => {
                if (!link.classList.contains('active')) {
                    link.style.color = '';
                }
            });
        });
    }

    /**
     * Add click feedback
     */
    addClickFeedback(element) {
        element.addEventListener('click', () => {
            element.style.animation = 'buttonPress 0.3s ease';
            setTimeout(() => {
                element.style.animation = '';
            }, 300);
        });
    }
}

/* ========================================
   INITIALIZATION
   ======================================== */

// Initialize animation engines when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimationEngine = new ScrollAnimationEngine();
    window.microInteractionsEngine = new MicroInteractionsEngine();

    // Add ripple animation keyframe
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Refresh animations on page load completion
window.addEventListener('load', () => {
    if (window.scrollAnimationEngine) {
        window.scrollAnimationEngine.refresh();
    }
});

/* ========================================
   SMOOTH SCROLL BEHAVIOR
   ======================================== */

document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        const href = target.getAttribute('href');
        const element = document.querySelector(href);

        if (element) {
            e.preventDefault();
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

/* ========================================
   EXPORT FOR EXTERNAL USE
   ======================================== */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ScrollAnimationEngine,
        MicroInteractionsEngine
    };
}
