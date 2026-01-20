document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS (Standardize)
    const navbar = document.querySelector('#mainNavbar');
    const mobileToggle = document.querySelector('#mobile-menu'); // Ensure this matches HTML ID
    const navMenu = document.querySelector('#navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const animElements = document.querySelectorAll('.matrix-item, .form-card, .hero-content');

    // 2. NAVBAR SCROLL EFFECT (Shine)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. MOBILE MENU LOGIC (Ergonomics)
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isOpened = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('is-active');

            // Accessibility: Let screen readers know if menu is open
            mobileToggle.setAttribute('aria-expanded', !isOpened);

            // Ergonomic Fix: Prevent background scrolling when menu is open
            document.body.style.overflow = isOpened ? 'auto' : 'hidden';
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // 4. SCROLL ANIMATIONS (Intersection Observer)
    // This creates the professional "fade-in" effect as you scroll down
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
        observer.observe(el);
    });
});