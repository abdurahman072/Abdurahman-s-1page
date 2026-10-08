// ==========================================================
// WAIT UNTIL THE WHOLE PAGE IS LOADED BEFORE RUNNING CODE
// ==========================================================
document.addEventListener("DOMContentLoaded", function () {

  // --------------------------------------------------------
  // 1. SELECT ELEMENTS WE NEED TO WORK WITH
  // --------------------------------------------------------
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");
  const viewProjectsBtn = document.getElementById("viewProjectsBtn");
  const sayHelloBtn = document.getElementById("sayHelloBtn");
  const contactMessage = document.getElementById("contactMessage");

  // --------------------------------------------------------
  // 2. HAMBURGER MENU: OPEN / CLOSE ON CLICK
  // --------------------------------------------------------
  hamburger.addEventListener("click", function () {
    // "toggle" adds the class if it's missing, removes it if it's present.
    // This is what lets clicking ☰ open the menu, and clicking again close it.
    navLinks.classList.toggle("open");
  });

  // --------------------------------------------------------
  // 3. CLOSE MENU AUTOMATICALLY WHEN A NAV LINK IS CLICKED
  // --------------------------------------------------------
  // Smooth scrolling to each section is already handled by the CSS rule
  // "html { scroll-behavior: smooth; }" combined with the href="#section" links.
  // Here we just make sure the mobile menu closes after a link is clicked.
  navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  // --------------------------------------------------------
  // 4. "VIEW MY PROJECTS" BUTTON: SMOOTH SCROLL TO PROJECTS
  // --------------------------------------------------------
  viewProjectsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const projectsSection = document.getElementById("projects");
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (!projectsSection) return;

    const targetY = projectsSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  });

  // --------------------------------------------------------
  // 5. "SAY HELLO" BUTTON: SHOW A CONTACT MESSAGE
  // --------------------------------------------------------
  sayHelloBtn.addEventListener("click", function () {
    contactMessage.textContent = "👋 Hello there! Thanks for visiting my portfolio.";

    // Adding the "show" class triggers the CSS opacity transition,
    // making the message fade into view.
    contactMessage.classList.add("show");
  });

});
