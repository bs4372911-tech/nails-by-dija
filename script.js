// NAILS BY DIJA — WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for links inside the website
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // Reveal sections smoothly while scrolling
  const revealItems = document.querySelectorAll(
    ".service-card, .gallery-grid figure, .contact-item, .about-content, .about-logo"
  );

  revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(25px)";
    item.style.transition =
      "opacity 0.7s ease, transform 0.7s ease";
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach(item => observer.observe(item));


  // Navbar shadow when scrolling
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow =
        "0 10px 35px rgba(0, 0, 0, 0.18)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

});
