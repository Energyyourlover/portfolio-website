// Smooth scroll + active state update
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);

      // Smooth scroll
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update active class manually
      document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Highlight active section while scrolling
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120; // offset for navbar height
  document.querySelectorAll('section[id]').forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      let id = section.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
      let activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});
