// mostrare / nascondere il menu principale

/* Strumenti

- document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});

*/

const elementHamburgerIcon = document.querySelector("a > .fas.fa-bars");
/* console.log(elementHamburgerIcon); */

const elementHamburgerMenu = document.querySelector(".hamburger-menu");
/* console.log(elementHamburgerMenu); */

const elementCloseMenu = document.querySelector(".close > .fas.fa-times");

elementHamburgerIcon.addEventListener("click", function () {
  /* elementHamburgerMenu.style.display = "block"; */
  elementHamburgerMenu.className += " active";
});

elementCloseMenu.addEventListener("click", function () {
  /*  elementHamburgerMenu.style.display = "none"; */
  elementHamburgerMenu.classList.remove("active");
});
