/* -------------------------------------------------------
   Dairy Consulting – Tiny vanilla JS
   Smooth scroll for anchor links
   ------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links (except forms)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});