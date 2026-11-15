document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  const closeMenu = (returnFocus) => {
    if (!toggle || !nav) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    if (returnFocus) toggle.focus();
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => closeMenu(false)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) closeMenu(true);
    });
    document.addEventListener("click", event => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      closeMenu(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 680) closeMenu(false);
    });
  }

  document.querySelectorAll("[data-year]").forEach(node => {
    node.textContent = new Date().getFullYear();
  });
});
