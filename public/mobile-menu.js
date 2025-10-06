// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const nav = document.querySelector('.navbar');
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu, .nav-links');

    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.mobile-menu-btn')) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '☰';
        mobileBtn.setAttribute('aria-label', 'Menu');

        // Insert button after logo
        const logo = document.querySelector('.nav-logo');
        if (logo && navMenu) {
            logo.parentNode.insertBefore(mobileBtn, navMenu);

            // Toggle menu on click
            mobileBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                if (navMenu.classList.contains('active')) {
                    mobileBtn.innerHTML = '✕';
                } else {
                    mobileBtn.innerHTML = '☰';
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!navContainer.contains(e.target) && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileBtn.innerHTML = '☰';
                }
            });

            // Close menu when clicking on a link
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileBtn.innerHTML = '☰';
                });
            });
        }
    }
});