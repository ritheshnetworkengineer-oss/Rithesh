// ====================================================================
// PREMIUM PARALLAX PORTFOLIO WITH ADVANCED ANIMATIONS
// ====================================================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove navbar background on scroll
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Auto-hide navbar on scroll down
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ====================================================================
// PARALLAX SCROLLING EFFECTS
// ====================================================================

// Hero parallax effect
function heroParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.pageYOffset;

    if (hero && scrollPosition < window.innerHeight) {
        // Parallax background orbs
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.3 + (index * 0.1);
            orb.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * speed}px))`;
        });

        // Fade out and move hero content
        if (heroContent) {
            const opacity = Math.max(0, 1 - scrollPosition / 600);
            const translateY = scrollPosition * 0.5;
            heroContent.style.opacity = opacity;
            heroContent.style.transform = `translateY(${translateY}px)`;
        }
    }
}

// Section parallax effects
function sectionParallax() {
    const sections = document.querySelectorAll('section:not(.hero)');
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if section is in viewport
        if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionBottom) {
            const relativeScroll = scrollPosition + windowHeight - sectionTop;
            const parallaxAmount = relativeScroll * 0.1;

            // Apply parallax to section header
            const header = section.querySelector('.section-header');
            if (header) {
                header.style.transform = `translateY(${-parallaxAmount * 0.3}px)`;
            }

            // Apply parallax to cards/items
            const cards = section.querySelectorAll('.skill-category, .project-card, .cert-card, .timeline-item');
            cards.forEach((card, index) => {
                const cardSpeed = 0.05 + (index % 3) * 0.02;
                const cardParallax = (relativeScroll - (index * 50)) * cardSpeed;
                card.style.transform = `translateY(${-cardParallax}px)`;
            });
        }
    });
}

// Mouse parallax effect for hero
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
});

function mouseParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroRect = hero.getBoundingClientRect();
    if (heroRect.top < window.innerHeight && heroRect.bottom > 0) {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 20 + (index * 10);
            orb.style.transform = `translate(calc(-50% + ${currentX * speed}px), calc(-50% + ${currentY * speed}px))`;
        });
    }

    requestAnimationFrame(mouseParallax);
}

// Initialize mouse parallax
if (window.innerWidth > 768) {
    mouseParallax();
}

// Main parallax scroll handler
function handleParallax() {
    heroParallax();
    sectionParallax();
}

window.addEventListener('scroll', handleParallax, { passive: true });

// ====================================================================
// INTERSECTION OBSERVER ANIMATIONS
// ====================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(`
    .section-header,
    .about-text,
    .about-info,
    .skill-category,
    .project-card,
    .additional-item,
    .timeline-item,
    .cert-card,
    .contact-info,
    .contact-form-container
`);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    fadeInObserver.observe(el);
});

// Staggered animation for cards
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('stagger-visible');
                }, index * 100);
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const staggerContainers = document.querySelectorAll('.skills-grid, .projects-grid, .cert-grid, .additional-grid');
staggerContainers.forEach(container => {
    Array.from(container.children).forEach(child => {
        child.classList.add('stagger-item');
    });
    staggerObserver.observe(container);
});

// ====================================================================
// SCROLL TO TOP BUTTON
// ====================================================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn?.classList.add('visible');
    } else {
        scrollTopBtn?.classList.remove('visible');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================================================
// STATISTICS COUNTER ANIMATION
// ====================================================================

function animateCounter(element, target, duration) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('counted')) {
                statNumber.classList.add('counted');
                const text = statNumber.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(statNumber, number, 2000);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(item => {
    statsObserver.observe(item);
});

// ====================================================================
// FORM HANDLING
// ====================================================================

const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', function(e) {
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    
    button.innerHTML = '<span>Sending...</span>';
    button.disabled = true;

    // FormSpree will handle the actual submission
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 3000);
});

// ====================================================================
// SKILL TAGS HOVER EFFECT
// ====================================================================

const skillTags = document.querySelectorAll('.skill-tag, .tech-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ====================================================================
// DYNAMIC GRADIENT ANIMATION
// ====================================================================

function animateGradientOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const duration = 15000 + (index * 3000);
        const delay = index * 1000;
        
        orb.style.animation = `float ${duration}ms ease-in-out ${delay}ms infinite`;
    });
}

animateGradientOrbs();

// ====================================================================
// PERFORMANCE OPTIMIZATION
// ====================================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll parallax for better performance
const throttledParallax = throttle(handleParallax, 10);
window.removeEventListener('scroll', handleParallax);
window.addEventListener('scroll', throttledParallax, { passive: true });

// ====================================================================
// INITIALIZE ON PAGE LOAD
// ====================================================================

window.addEventListener('load', () => {
    // Remove loading class if exists
    document.body.classList.add('loaded');
    
    // Trigger initial parallax
    handleParallax();
    
    // Initial navigation highlight
    highlightNavigation();
    
    // Log initialization
    console.log('Premium Parallax Portfolio Initialized');
});

// ====================================================================
// ADVANCED CURSOR EFFECT (Desktop Only)
// ====================================================================

if (window.innerWidth > 1024) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });

    function animateCursor() {
        // Smooth cursor
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Smooth follower with lag
        followerX += (cursorX - followerX) * 0.1;
        followerY += (cursorY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-category, .cert-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
}

// ====================================================================
// TERMINAL EASTER EGG
// ====================================================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('%c🎉 CYBERSECURITY MODE ACTIVATED! 🎉', 'font-size: 20px; color: #00ff88; background: #000; padding: 10px;');
        console.log('%cRithesh.N - Network Engineer & Cybersecurity Analyst', 'font-size: 14px; color: #00ffff;');
        console.log('%c"Security is not a product, but a process." - Bruce Schneier', 'font-size: 12px; color: #888; font-style: italic;');
        
        // Add matrix effect
        document.body.classList.add('matrix-mode');
        setTimeout(() => {
            document.body.classList.remove('matrix-mode');
        }, 5000);
    }
});
