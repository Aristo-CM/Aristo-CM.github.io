// Resume Website JavaScript
class ResumeWebsite {
    constructor() {
        this.currentLang = 'en';
        this.currentTheme = 'light';
        this.init();
    }

    init() {
        this.loadPreferences();
        this.setupEventListeners();
        this.setupScrollEffects();
        this.updateLanguage();
        this.updateTheme();
    }

    // Load user preferences from localStorage
    loadPreferences() {
        this.currentLang = localStorage.getItem('preferred-language') || 'en';
        this.currentTheme = localStorage.getItem('preferred-theme') || 'light';
    }

    // Save user preferences to localStorage
    savePreferences() {
        localStorage.setItem('preferred-language', this.currentLang);
        localStorage.setItem('preferred-theme', this.currentTheme);
    }

    // Setup event listeners
    setupEventListeners() {
        // Language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.toggleLanguage());
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

        // Hero action buttons
        const heroButtons = document.querySelectorAll('.hero-actions .btn');
        heroButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (btn.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = btn.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Scroll indicator in hero section
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }

        // Window scroll events
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // Window resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    // Toggle language between English and Chinese
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'zh' : 'en';
        this.updateLanguage();
        this.savePreferences();
    }

    // Update all text content based on current language
    updateLanguage() {
        const elements = document.querySelectorAll('[data-en][data-zh]');
        elements.forEach(element => {
            const text = this.currentLang === 'en'
                ? element.getAttribute('data-en')
                : element.getAttribute('data-zh');
            element.textContent = text;
        });

        // Update language toggle button text
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLang === 'en' ? '中文' : 'EN';
            }
        }

        // Update document language attribute
        document.documentElement.lang = this.currentLang;

        // Update page title
        document.title = this.currentLang === 'en'
            ? 'Kuangda QU - Resume'
            : '瞿旷达 - 个人简历';
    }

    // Toggle theme between light and dark
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.updateTheme();
        this.savePreferences();
    }

    // Update theme
    updateTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);

        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.currentTheme === 'light'
                    ? 'fas fa-moon'
                    : 'fas fa-sun';
            }
        }
    }

    // Handle scroll events
    handleScroll() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove navbar background on scroll
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Update active navigation link
        this.updateActiveNavLink();

        // Animate elements on scroll
        this.animateOnScroll();
    }

    // Update active navigation link based on scroll position
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Animate elements when they come into view
    animateOnScroll() {
        const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    }

    // Setup scroll effects
    setupScrollEffects() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.timeline-item, .project-card, .skill-category, .education-card, .contact-item'
        );

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Handle window resize
    handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.getElementById('hamburger');

            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
            }
        }
    }

    // Utility method to debounce function calls
    debounce(func, wait) {
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

    // Add typing effect to hero title
    addTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const texts = {
            en: 'Statistics Student & Quantitative Finance Enthusiast',
            zh: '统计学学生 & 量化金融爱好者'
        };

        let currentText = texts[this.currentLang];
        let index = 0;

        heroTitle.textContent = '';

        const typeWriter = () => {
            if (index < currentText.length) {
                heroTitle.textContent += currentText.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        };

        typeWriter();
    }

    // Add smooth reveal animations
    addRevealAnimations() {
        const revealElements = document.querySelectorAll('.hero-content > *');

        revealElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';

            setTimeout(() => {
                element.style.transition = 'all 0.6s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Initialize page load animations
    initPageAnimations() {
        // Add initial loading animation
        document.body.style.opacity = '0';

        window.addEventListener('load', () => {
            document.body.style.transition = 'opacity 0.5s ease-in';
            document.body.style.opacity = '1';

            // Add hero animations after page load
            setTimeout(() => {
                this.addRevealAnimations();
                this.addTypingEffect();
            }, 500);
        });
    }
}

// Additional CSS for mobile menu and animations
const additionalCSS = `
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-color);
        border: 1px solid var(--border-color);
        border-top: none;
        padding: var(--spacing-lg);
        gap: var(--spacing-md);
        box-shadow: var(--shadow-lg);
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
    }

    [data-theme="dark"] .navbar.scrolled {
        background: rgba(15, 23, 42, 0.98);
    }

    .nav-link.active {
        color: var(--primary-color);
    }

    .nav-link.active::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
    }
`;

// Add additional CSS to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new ResumeWebsite();
    website.initPageAnimations();
});

// Add smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}

// Add error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Resume website error:', e.message);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ResumeWebsite;
}

