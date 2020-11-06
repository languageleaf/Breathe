const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navList = document.getElementsByClassName("navlist")[0];
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
