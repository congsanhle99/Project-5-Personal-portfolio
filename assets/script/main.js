const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
console.log("navbarOffsetTop", navbarOffsetTop);
const sections = document.querySelectorAll("section");
console.log(sections);
const navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      console.log("window.pageYOffset", window.pageYOffset);
      console.log("section.offsetTop", section.offsetTop);
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[index].classList.add("change");
    }
  });
});
