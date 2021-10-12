// mostrare / nascondere il menu principale

/* Strumenti

- document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});

*/

const elementHamburgerIcon = document.querySelector("a > .fas.fa-bars");
/* console.log(elementHamburgerIcon); */

const elementHeaderRight = document.querySelector(".header-right ul");
/* console.log(elementHeaderRight); */

const showMenu = elementHamburgerIcon.addEventListener("click", function () {
  elementHeaderRight.style.display = "block";
  /* elementHamburgerIcon.style.display = "none"; */
});
