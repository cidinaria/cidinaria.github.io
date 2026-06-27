const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});
const activateNavOnScroll = () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href").replace("#", "");
    if (href === currentSection) {
      link.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activateNavOnScroll);
window.addEventListener("load", activateNavOnScroll);
