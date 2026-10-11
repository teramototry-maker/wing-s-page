const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector("#nav-menu");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  const clickedOutside = !event.target.closest(".navbar");

  if (clickedOutside) {
    navMenu.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    navMenu.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
});

const contactToggle = document.querySelector("#contact-toggle");
const contactForm = document.querySelector("#contact-form");

contactToggle.addEventListener("click", () => {
  const isHidden = contactForm.hidden;

  contactForm.hidden = !isHidden;

  const isExpanded = !contactForm.hidden;

  contactToggle.setAttribute("aria-expanded", isExpanded);

  contactToggle.textContent = isExpanded ? "Close Form" : "Contact Me";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !contactForm.hidden) {
    contactForm.hidden = true;

    contactToggle.setAttribute("aria-expanded", "false");

    contactToggle.textContent = "Contact Me";

    contactToggle.focus();
  }
});
