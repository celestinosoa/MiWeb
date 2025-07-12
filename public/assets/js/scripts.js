// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Toggle hamburger icon animation
        if (mobileMenu.classList.contains('active')) {
            hamburger.textContent = '✕';
        } else {
            hamburger.textContent = '☰';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.top-bar') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburger.textContent = '☰';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

