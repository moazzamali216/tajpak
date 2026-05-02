
// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.opacity = "0";
  preloader.style.transition = "opacity 0.5s ease";
  // 
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});


// Navbar scroll effect

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("#navbar > div > ul > li > a, #navbar > div > ul > li > button");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {

//     // Navbar background
//     navbar.classList.remove("bg-transparent", "py-4");
//     navbar.classList.add("bg-white", "shadow-md", "py-1");

//     // Links color
//     navLinks.forEach(link => {
//       link.classList.remove("text-gray-100");
//       link.classList.add("text-gray-700");
//     });

//   } else {

//     // Reset navbar
//     navbar.classList.add("bg-transparent", "py-4");
//     navbar.classList.remove("bg-white", "shadow-md", "py-1");

//     // Reset links
//     navLinks.forEach(link => {
//       link.classList.remove("text-gray-700");
//       link.classList.add("text-gray-100");
//     });

//   }
// });

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function openNav() {
  sideMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
}

function closeNav() {
  sideMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);




const buttons = document.querySelectorAll('.faq-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');

    document.querySelectorAll('.faq-content').forEach(el => {
      if (el !== content) el.style.maxHeight = null;
    });

    document.querySelectorAll('.faq-icon').forEach(i => {
      if (i !== icon) i.classList.remove('rotate-45');
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      icon.classList.remove('rotate-45');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.classList.add('rotate-45');
    }
  });
});


const trustedBrandsSwiper = new Swiper(".trustedBrandsSwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 2,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
  }
});


const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,
  speed: 2500, // smooth slow movement
  autoplay: {
    delay: 0, // no pause
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 }
  }
});


document.querySelectorAll('[data-tabs-target]').forEach(tab => {
  tab.addEventListener('click', () => {

    setTimeout(() => {

      const targetId = tab.getAttribute('data-tabs-target');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        const offset = 120; // adjust for navbar height
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }

    }, 120);

  });
});