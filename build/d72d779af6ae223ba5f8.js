var menuItems = document.querySelectorAll(".header__select > li");
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