const button = document.querySelector(".toggle-button");
const navBar = document.querySelector(".header .navbar ");
button.addEventListener("click", () => {
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }
});
