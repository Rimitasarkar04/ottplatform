let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
var swiper = new Swiper(".home", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  grabCursor: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
document.addEventListener("DOMContentLoaded", () => {
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((btn) => {
    const title = btn.dataset.title;
    if (localStorage.getItem(title) === "true") {
      btn.classList.add("active");
      btn.textContent = "❤️";
    }

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const isFavorite = btn.classList.contains("active");
      btn.textContent = isFavorite ? "❤️" : "♡";
      localStorage.setItem(title, isFavorite);
    });
  });
});
 function showForm() {
   document.getElementById("loginForm").style.display = "block";
 }
 function hideForm() {
   document.getElementById("loginForm").style.display = "none";
 }


