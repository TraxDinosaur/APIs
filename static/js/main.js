/**
 * TraxDinosaur's Magic APIs - Main JavaScript
 * Handles general website functionality and animations
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('The magic has begun! 🧙‍♂️✨');
    
    // Initialize copy buttons for API URLs
    initCopyButtons();
    
    // Add smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Add magical hover effects
    addMagicalEffects();
    
    // Add scroll animations
    addScrollAnimations();
    
    // Add magical particles on button clicks
    addMagicalParticles();
});

/**
 * Initialize clipboard functionality for copying API URLs
 */
function initCopyButtons() {
    // Create clipboard.js instance
    const clipboard = new ClipboardJS('.copy-btn');
    
    // Success event
    clipboard.on('success', function(e) {
        // Show magical copy animation
        const button = e.trigger;
        button.classList.add('copied');
        
        // Create spell cast animation
        const parent = button.closest('.api-url');
        const copyAnimation = document.createElement('div');
        copyAnimation.className = 'copy-animation';
        parent.appendChild(copyAnimation);
        
        // Create magic dust particles
        createMagicDust(button);
        
        // Change button icon temporarily to checkmark
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        
        // Reset button after animation completes
        setTimeout(function() {
            button.classList.remove('copied');
            button.innerHTML = originalHTML;
            if (parent.contains(copyAnimation)) {
                parent.removeChild(copyAnimation);
            }
        }, 800);
        
        e.clearSelection();
    });
    
    // Error event
    clipboard.on('error', function(e) {
        const button = e.trigger;
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-times"></i>';
        
        setTimeout(function() {
            button.innerHTML = originalHTML;
        }, 1000);
    });
}

/**
 * Create magical dust particles around an element
 * @param {Element} element - The element to create dust around
 */
function createMagicDust(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create multiple particles
    for (let i = 0; i < 15; i++) {
        const dust = document.createElement('div');
        dust.className = 'magic-dust';
        
        // Random position around the button
        const angle = Math.random() * Math.PI * 2; // random angle
        const distance = 10 + Math.random() * 20; // random distance
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        
        // Set position and random size
        dust.style.left = `${x}px`;
        dust.style.top = `${y}px`;
        dust.style.width = `${2 + Math.random() * 4}px`;
        dust.style.height = dust.style.width;
        
        // Random animation duration
        dust.style.animationDuration = `${1 + Math.random() * 2}s`;
        
        // Add to body
        document.body.appendChild(dust);
        
        // Remove particle after animation
        dust.addEventListener('animationend', function() {
            if (document.body.contains(dust)) {
                document.body.removeChild(dust);
            }
        });
    }
}

/**
 * Add smooth scrolling behavior to navigation links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add magical particles before scrolling
                createMagicDust(this);
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbar = document.querySelector('.navbar-collapse');
                if (navbar.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
}

/**
 * Add magical hover effects to elements
 */
function addMagicalEffects() {
    // Add wand cursor to magical buttons
    document.querySelectorAll('.magic-btn').forEach(btn => {
        btn.classList.add('wand-cursor');
        
        // Add click effect
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            
            // Position ripple at click point
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Add ripple to button
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add hover effects to API cards
    document.querySelectorAll('.api-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add active class for animations
            this.classList.add('active');
            
            // Add shimmer effect to API icon
            const icon = this.querySelector('.api-icon');
            icon.classList.add('shimmer');
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove active class
            this.classList.remove('active');
            
            // Remove shimmer effect
            const icon = this.querySelector('.api-icon');
            icon.classList.remove('shimmer');
        });
    });
}

/**
 * Add animations that trigger on scroll
 */
function addScrollAnimations() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Elements to animate
    const animatedElements = document.querySelectorAll('.demo-container, .api-card, .spell-book');
    
    // Check elements on scroll
    function checkScroll() {
        animatedElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('active')) {
                element.classList.add('active');
                
                // Add fade-in class to child elements
                const children = element.querySelectorAll('h3, p, .magic-frame');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('fade-in');
                    }, index * 100);
                });
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

/**
 * Add magical particle effects on button clicks
 */
function addMagicalParticles() {
    document.querySelectorAll('.magic-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            createMagicDust(this);
        });
    });
}

/**
 * Apply magic writing animation to text
 * @param {Element} element - Element to animate text in
 * @param {string} text - Text to write
 */
function magicWriting(element, text) {
    element.innerHTML = '';
    element.classList.add('magic-writing');
    
    // Set the text
    element.textContent = text;
    
    // Remove class after animation completes
    setTimeout(() => {
        element.classList.remove('magic-writing');
    }, 3500);
}
