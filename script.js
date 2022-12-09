const openBtn = document.getElementById("open-menu-btn");
const closeBtn = document.getElementById("close-menu-btn");
const sidenav = document.getElementById("sidenav");

function toggleSideNav() {
  sidenav.classList.toggle("translate-x-full");
}

openBtn.addEventListener("click", toggleSideNav);
closeBtn.addEventListener("click", toggleSideNav);
