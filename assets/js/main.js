// Mobile Navigation Toggle - FIXED
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

function toggleMobileMenu() {
  mainNav.classList.toggle('open');
  navToggle.classList.toggle('open');
}

if (navToggle && mainNav) {
  // Toggle on hamburger click
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Close menu when clicking any nav link (MOBILE ONLY)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Submitting...';
    
    // Simulate API call
    setTimeout(() => {
      formStatus.textContent = 'Thank you! Your enquiry has been sent. We will contact you within 24 hours.';
      formStatus.style.color = '#10b981';
      contactForm.reset();
    }, 1500);
  });
}

// Smooth scrolling for anchor links
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

// Close mobile menu on window resize (desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
  }
});
