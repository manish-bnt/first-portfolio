const menuIcon = document.querySelector(".fa-bars");
const discardIcon = document.querySelector(".fa-xmark");
const navbar = document.querySelector(".nav");
const headContainer = document.querySelector(".head-container");
const logoContainer = document.querySelector(".logo-container");

discardIcon.style.display = "none";

menuIcon.addEventListener("click", () => {
  navbar.style.visibility = "visible";
  discardIcon.style.display = "block";
  menuIcon.style.display = "none";
  headContainer.style.height = "350px";
});

discardIcon.addEventListener("click", () => {
  headContainer.style.height = "";
  discardIcon.style.display = "none";
  menuIcon.style.display = "block";
});

// footer load

document.addEventListener("DOMContentLoaded", () => {
  fetch("assets/components/footer.html")
    .then((response) => response.text())
    .then(
      (data) => (document.querySelector(".footer-section").innerHTML = data)
    );
});
