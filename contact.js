
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileToggle.addEventListener('click', () => {
        // This toggles the 'active' class on the menu so it slides in
        navMenu.classList.toggle('active');
        
        // Optional: This toggles a class on the button itself for an "X" animation
        mobileToggle.classList.toggle('is-active');
    });

    // Ergonomic fix: Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
