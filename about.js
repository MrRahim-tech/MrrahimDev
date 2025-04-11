// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
    easing: 'ease-in-out-quad'
});

// Back to Top Button
window.addEventListener('scroll', () => {
    const button = document.querySelector('.back-to-top');
    button.classList.toggle('show', window.scrollY > 500);
});

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Project Card Hover Effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Generate Particles
function createParticles() {
    const container = document.querySelector('.particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${3 + Math.random() * 3}s infinite`;
        container.appendChild(particle);
    }
}

// Initialize
window.addEventListener('load', () => {
    createParticles();
    AOS.refresh(); // Refresh animations after dynamic content
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.classList.toggle('active');
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form Data:', Object.fromEntries(formData));
    alert('Message sent successfully!');
    e.target.reset();
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loading-screen').remove();
        }, 1000);
    }, 2000);
});

// Enhanced Particles
function createParticles() {
    const container = document.querySelector('.particles');
    const colors = ['#64ffda', '#57cbff', '#ff57a4'];
    
    for (let i = 0; i < 150; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 4}px;
            height: ${Math.random() * 4}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            animation: float ${3 + Math.random() * 5}s infinite;
        `;
        container.appendChild(particle);
    }
}