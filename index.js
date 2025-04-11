 function toggleMenu() { const menu = document.getElementById('mobileMenu'); menu.classList.toggle('show'); }

document.addEventListener('click', function(event) { const menu = document.getElementById('mobileMenu'); const icon = document.querySelector('.menu-icon'); if (!menu.contains(event.target) && !icon.contains(event.target)) { menu.classList.remove('show'); } });

// Smooth scroll to next section
document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});