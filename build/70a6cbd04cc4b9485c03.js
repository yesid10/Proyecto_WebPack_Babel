var menuItems = document.querySelectorAll('.header__select > li');
menuItems.forEach(function (item) {
  var submenu = item.querySelector('.submenu');
  item.addEventListener('mouseenter', function () {
    submenu.style.display = 'block';
  });
  item.addEventListener('mouseleave', function () {
    submenu.style.display = 'none';
  });
});