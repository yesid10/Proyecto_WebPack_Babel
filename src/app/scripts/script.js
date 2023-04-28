const menuItems = document.querySelectorAll('.header__select > li');

menuItems.forEach(item => {
  const submenu = item.querySelector('.submenu');
  
  item.addEventListener('mouseenter', () => {
    submenu.style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
    
  });

  
});
