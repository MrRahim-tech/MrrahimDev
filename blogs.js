// post.js

function toggleMenu() { const menu = document.getElementById('mobileMenu'); menu.classList.toggle('active'); }

document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post-card');

    posts.forEach(post => {
        const readMoreBtn = post.querySelector('.read-more');
        const postFull = post.querySelector('.post-full');
        const postPreview = post.querySelector('.post-preview');

        readMoreBtn.addEventListener('click', function() {
            const isFullVisible = postFull.style.display === 'block';
            postFull.style.display = isFullVisible ? 'none' : 'block';
            postPreview.style.display = isFullVisible ? 'block' : 'none';
            this.textContent = isFullVisible ? 'Read More' : 'Read Less';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});