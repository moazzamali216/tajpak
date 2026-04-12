  
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
  const navLinks = document.querySelectorAll("#navbar ul li a");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {

      // Navbar background
      navbar.classList.remove("bg-transparent","py-4");
      navbar.classList.add("bg-white", "shadow-md","py-1");

      // Links color
      navLinks.forEach(link => {
        link.classList.remove("text-gray-100");
        link.classList.add("text-gray-700");
      });

    } else {

      // Reset navbar
      navbar.classList.add("bg-transparent","py-4");
      navbar.classList.remove("bg-gray-200", "shadow-md","py-1");

      // Reset links
      navLinks.forEach(link => {
        link.classList.remove("text-gray-700");
        link.classList.add("text-gray-100");
      });

    }
  });

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