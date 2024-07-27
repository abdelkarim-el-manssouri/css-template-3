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

new Swiper(".swiper", {
  // Optional parameters
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
  },
  speed: 1000,
  direction: "horizontal",
  loop: true,
  lazyLoading: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // default slides per view
  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    // when window width is => 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    // when window width is => 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is => 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
