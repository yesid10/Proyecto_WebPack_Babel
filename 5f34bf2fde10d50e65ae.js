var timeOut,menuItems=document.querySelectorAll(".header__select > li"),menuItems2=document.querySelectorAll(".header__selectMobile > li");menuItems.forEach((function(e){if(e.classList.contains("header__select--dropdown")){var n=e.querySelector(".submenu");e.addEventListener("mouseenter",(function(){n.style.display="block"})),e.addEventListener("mouseleave",(function(){n.style.display="none"}))}})),menuItems2.forEach((function(e){if(e.classList.contains("header__select--dropdownMobile")){var n=e.querySelector(".submenuMobile");e.addEventListener("mouseenter",(function(){n.style.display="block"})),e.addEventListener("mouseleave",(function(){n.style.display="none"}))}})),document.addEventListener("click",(function(e){if(e.target.classList.contains("header__menuResponsive")){var n=document.querySelector(".main__navBarMobile2"),t=document.querySelector(".main__navBarMobile");n.style.display="block",t.style.display="block"}if(e.target.classList.contains("navBarMobileClose")){var l=document.querySelector(".main__navBarMobile2"),o=document.querySelector(".main__navBarMobile");l.style.display="none",o.style.display="none"}}));