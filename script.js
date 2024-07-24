const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const prinmaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  prinmaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  prinmaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
