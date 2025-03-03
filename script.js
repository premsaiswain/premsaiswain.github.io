document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default jump
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active navigation link while scrolling
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function updateActiveLink() {
    let scrollPosition = window.scrollY + 100; // Adjust for better detection
    sections.forEach((section, index) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});

document.addEventListener("DOMContentLoaded", function () {
  // ✅ Smooth Scrolling for Navigation Links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // ✅ Highlight Active Section in Navigation
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function updateActiveLink() {
    let scrollPosition = window.scrollY + 100;
    sections.forEach((section, index) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveLink);

  // ✅ Scroll to Top Button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerText = "↑";
  scrollToTopBtn.id = "scrollToTop";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // ✅ Mobile Navigation Toggle
  const navToggle = document.createElement("button");
  navToggle.innerText = "☰";
  navToggle.id = "navToggle";
  document.body.insertBefore(navToggle, document.body.firstChild);

  navToggle.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show");
  });

  // ✅ Dark/Light Mode Toggle
  const themeToggle = document.createElement("button");
  themeToggle.innerText = "🌙";
  themeToggle.id = "themeToggle";
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    themeToggle.innerText = document.body.classList.contains("light-mode")
      ? "☀"
      : "🌙";
  });

  // ✅ Fade-in Animation on Scroll
  const fadeSections = document.querySelectorAll("section");

  function fadeInOnScroll() {
    fadeSections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
        section.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run on load
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.getElementById("theme-toggle");

  // Check local storage for theme preference
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Save user preference in local storage
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});
