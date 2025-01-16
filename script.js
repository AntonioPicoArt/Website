function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide menu
  }
  

// Smooth scroll with offset to prevent cutting off content
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      // Scroll to the section with a slight offset for the sticky navbar
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Offset height of the navbar
        behavior: 'smooth'
      });
    });
  });
  