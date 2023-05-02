const menuItems = document.querySelectorAll(".header__select > li");
const menuItems2 = document.querySelectorAll(".header__selectMobile > li");
let timeOut;

menuItems.forEach((item) => {
  if (item.classList.contains("header__select--dropdown")) {
    const submenu = item.querySelector(".submenu");
    item.addEventListener("mouseenter", () => {
      submenu.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      submenu.style.display = "none";
    });
  }
});

menuItems2.forEach((item) => {
  if (item.classList.contains("header__select--dropdownMobile")) {
    const submenu = item.querySelector(".submenuMobile");
    item.addEventListener("mouseenter", () => {
      submenu.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      submenu.style.display = "none";
    });
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("header__menuResponsive")) {
    const menu = document.querySelector(".main__navBarMobile2");
    const menu2 = document.querySelector(".main__navBarMobile");
    menu.style.display = "block";
    menu2.style.display = "block";
  }

  if (event.target.classList.contains("navBarMobileClose")) {
    const menu = document.querySelector(".main__navBarMobile2");
    const menu2 = document.querySelector(".main__navBarMobile");
    menu.style.display = "none";
    menu2.style.display = "none";
  }
});
