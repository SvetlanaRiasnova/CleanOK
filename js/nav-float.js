// const floatNav=document.querySelector(".header__container-float");

// function showNav() {
//     if (document.scrollY + 100 +'px');
//     floatNav.classList.remove("hidden");
// }

// window.addEventListener('scroll', showNav);

var floatNav = document.querySelector('.header__container-float');
window.addEventListener('scroll', function () {
	var st = document.documentElement.scrollTop;
  if (st > 60) {
  	floatNav.classList.remove('hidden');
  } else {
    floatNav.classList.add('hidden');
  }
});