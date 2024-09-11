/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
} else {
  console.error("navToggle element not found");
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
} else {
  console.error("navClose element not found");
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== SWIPER FAVORITES ===============*/
const swiperFavourites = new Swiper(".favourites__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 30,
});

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
  const scrollup = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  // Default options
  origin: "bottom",
  distance: "60px",
  duration: 1500,
  delay: 200,
  reset: true, // Reset animation on view
});

sr.reveal(".home__data, .favourites__container, .footer__container", {
  // Overriding options for this specific element
  origin: "left",
  distance: "100px",
});

sr.reveal(".home__circle, .home__img", { delay: 600, scale: 0.5 });
sr.reveal(".home__chips-1, .home__chips-2, .home__chips-3", {
  delay: 1000,
  interval: 100,
});
sr.reveal(".home__tomato-1, .home__tomato-2", { delay: 1400, interval: 100 });
sr.reveal(".home__leaf", { delay: 1200 });
sr.reveal(".care__img ", { origin: "left" });
sr.reveal(".care__list, .contact__data", { origin: "right" });
sr.reveal(".banner__item, .products__card", { interval: 100 });
sr.reveal(".contact__img", { origin: "left" });
