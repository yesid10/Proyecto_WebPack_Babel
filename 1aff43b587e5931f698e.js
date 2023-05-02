var menuItems = document.querySelectorAll(".header__select > li");
var menuItems2 = document.querySelectorAll(".header__selectMobile > li");
var timeOut;
menuItems.forEach(function (item) {
  if (item.classList.contains("header__select--dropdown")) {
    var submenu = item.querySelector(".submenu");
    item.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      submenu.style.display = "none";
    });
  }
});
menuItems2.forEach(function (item) {
  if (item.classList.contains("header__select--dropdownMobile")) {
    var submenu = item.querySelector(".submenuMobile");
    item.addEventListener("mouseenter", function () {
      submenu.style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      submenu.style.display = "none";
    });
  }
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("header__menuResponsive")) {
    var menu = document.querySelector(".main__navBarMobile2");
    var menu2 = document.querySelector(".main__navBarMobile");
    menu.style.display = "block";
    menu2.style.display = "block";
  }
  if (event.target.classList.contains("navBarMobileClose")) {
    var _menu = document.querySelector(".main__navBarMobile2");
    var _menu2 = document.querySelector(".main__navBarMobile");
    _menu.style.display = "none";
    _menu2.style.display = "none";
  }
});