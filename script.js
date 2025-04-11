// Collapsible Sections
document.querySelectorAll('.section').forEach(section => {
    const header = section.querySelector('h2');
    const content = section.querySelector('.content');
    
    header.addEventListener('click', () => {
        section.classList.toggle('active');
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const button = document.getElementById('backToTop');
    button.style.display = window.scrollY > 500 ? 'block' : 'none';
});

document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Language Toggle (Placeholder)
document.getElementById('languageToggle').addEventListener('click', () => {
    alert('Language toggle coming soon!');
});

// Auto-Update Last Updated Date
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString('en-GB');
 function toggleMenu() {
      const nav = document.getElementById('mobile-menu');
      const toggleBtn = document.querySelector('.menu-toggle');
      nav.classList.toggle('active');
      toggleBtn.classList.toggle('active');
    }