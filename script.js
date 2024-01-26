function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// window.onscroll = function () {
//   myFunction();
// };

// var navlist = document.getElementById("desktop-nav");
// var sticky = navlist.offsetTop;

// /* Function to stick the nav bar */
// function myFunction() {
//   if (window.scrollY >= sticky) {
//     navlist.classList.add("sticky");
//   } else {
//     navlist.classList.remove("sticky");
//   }
// }
