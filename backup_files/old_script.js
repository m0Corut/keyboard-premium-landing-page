/**
 * KeyCloud - Scroll-Driven Frame Animation
 * Premium Mechanical Keyboard Landing Page
 */

// Configuration
const CONFIG = {
    frameCount: 192,
    frameDir: 'images/',
    framePrefix: '',
    frameSuffix: '.png',
    frameDigits: 5,
    scrollMultiplier: 1
};

// State
let images = [];
let loadedCount = 0;
let currentFrame = 0;
let canvas, ctx;
let isLoading = true;
let scrollProgress = 0;

// DOM Elements
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const scrollProgressBar = document.getElementById('scroll-progress-bar');
const navbar = document.getElementById('navbar');

/**
 * Get frame filename
 */
function getFrameFilename(index) {
    const frameNumber = String(index).padStart(CONFIG.frameDigits, '0');
    return `${CONFIG.frameDir}${CONFIG.framePrefix}${frameNumber}${CONFIG.frameSuffix}`;
}

/**
 * Preload all images
 */
function preloadImages() {
    return new Promise((resolve) => {
        for (let i = 1; i <= CONFIG.frameCount; i++) {
            const img = new Image();
            img.src = getFrameFilename(i);
            
            img.onload = () => {
                loadedCount++;
                const progress = Math.round((loadedCount / CONFIG.frameCount) * 100);
                
                // Update preloader
                progressBar.style.width = `${progress}%`;
                progressPercent.textContent = `${progress}%`;
                
                if (loadedCount === CONFIG.frameCount) {
                    resolve();
                }
            };
            
            img.onerror = () => {
                loadedCount++;
                console.warn(`Failed to load frame ${i}`);
                
                if (loadedCount === CONFIG.frameCount) {
                    resolve();
                }
            };
            
            images[i] = img;
        }
    });
}

/**
 * Initialize canvas
 */
function initCanvas() {
    canvas = document.getElementById('keyboard-canvas');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', debounce(resizeCanvas, 100));
}

/**
 * Resize canvas to match container
 */
function resizeCanvas() {
    const container = document.getElementById('frame-container');
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = container.offsetWidth * dpr;
    canvas.height = container.offsetHeight * dpr;
    canvas.style.width = `${container.offsetWidth}px`;
    canvas.style.height = `${container.offsetHeight}px`;
    
    ctx.scale(dpr, dpr);
    
    // Redraw current frame
    drawFrame(currentFrame);
}

/**
 * Draw a specific frame
 */
function drawFrame(frameIndex) {
    const img = images[frameIndex];
    if (!img || !img.complete) return;
    
    const container = document.getElementById('frame-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, containerWidth, containerHeight);
    
    // Calculate cover fit
    const imgRatio = img.width / img.height;
    const containerRatio = containerWidth / containerHeight;
    
    let drawWidth, drawHeight, drawX, drawY;
    
    if (containerRatio > imgRatio) {
        drawWidth = containerWidth;
        drawHeight = containerWidth / imgRatio;
        drawX = 0;
        drawY = (containerHeight - drawHeight) / 2;
    } else {
        drawHeight = containerHeight;
        drawWidth = containerHeight * imgRatio;
        drawX = (containerWidth - drawWidth) / 2;
        drawY = 0;
    }
    
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

/**
 * Handle scroll for frame animation
 */
function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calculate scroll progress (0-1) across the entire site
    scrollProgress = Math.min(scrollTop / docHeight, 1);
    
    // Update scroll progress bar
    scrollProgressBar.style.width = `${scrollProgress * 100}%`;
    
    // Update navbar state
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Calculate frame based on hero section scroll distance
    const heroSection = document.getElementById('hero');
    const heroHeight = heroSection.offsetHeight;
    const scrollStep = window.innerHeight; // One viewport of "silent" scroll before starting frames optionally
    
    // Total distance the animation should take
    // We want frames 1-192 to complete within the 500vh hero section
    const animationDistance = heroHeight - window.innerHeight;
    const heroProgress = Math.min(scrollTop / animationDistance, 1);
    
    // Map scroll to frame (1 to 192)
    const targetFrame = Math.min(
        Math.max(1, Math.ceil(heroProgress * CONFIG.frameCount)),
        CONFIG.frameCount
    );
    
    if (targetFrame !== currentFrame) {
        currentFrame = targetFrame;
        requestAnimationFrame(() => drawFrame(currentFrame));
    }

    // Interactive UI elements fading based on progress
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Hero content fades out as we scroll deep into frames
    if (heroProgress > 0.1) {
        heroContent.style.opacity = Math.max(0, 1 - (heroProgress - 0.1) * 3);
        scrollIndicator.style.opacity = Math.max(0, 1 - heroProgress * 5);
    } else {
        heroContent.style.opacity = 1;
        scrollIndicator.style.opacity = 1;
    }
    
    // Trigger scroll animations for other sections
    handleScrollAnimations();
}

/**
 * Animate elements on scroll
 */
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.85;
        
        if (inView) {
            el.classList.add('aos-animate');
        }
    });
}

/**
 * Smooth scroll for navigation links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

/**
 * Update active nav link on scroll
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/**
 * Debounce utility
 */
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

/**
 * Throttle utility
 */
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

/**
 * Hide preloader and show content
 */
function hidePreloader() {
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    isLoading = false;
    
    // Draw first frame
    drawFrame(1);
}

/**
 * Initialize the application
 */
async function init() {
    // Prevent scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Initialize canvas
    initCanvas();
    
    // Preload all frames
    await preloadImages();
    
    // Short delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Hide preloader
    hidePreloader();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Handle scroll with throttle
    window.addEventListener('scroll', throttle(() => {
        handleScroll();
        updateActiveNavLink();
    }, 16));
    
    // Initial scroll check
    handleScroll();
    
    console.log('KeyCloud initialized successfully!');
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !isLoading) {
        drawFrame(currentFrame);
    }
});
