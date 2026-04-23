// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }

  // Contact form validation (required + email format)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('formFeedback');
      
      if (name === '' || email === '' || message === '') {
        feedback.style.color = '#B00020';
        feedback.innerText = '❌ All fields are required. Please complete the form.';
        return;
      }
      const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
      if (!emailPattern.test(email)) {
        feedback.style.color = '#B00020';
        feedback.innerText = '❌ Please enter a valid email address.';
        return;
      }
      feedback.style.color = '#2E7D32';
      feedback.innerText = '✅ Thank you, ' + name + '! Your message has been sent. We\'ll reply soon.';
      contactForm.reset();
      setTimeout(() => { feedback.innerText = ''; }, 4000);
    });
  }

  // Smooth scroll for anchor links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});