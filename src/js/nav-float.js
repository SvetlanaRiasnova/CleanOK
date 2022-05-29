const floatNav = document.querySelector('.header');
const floatBtn = document.querySelector('.header__btn-float');
const bodyPos = document.querySelector('.intro');

window.addEventListener('scroll', function () {
	const scrollCount = document.documentElement.scrollTop;
    if (scrollCount > 50) {
        floatNav.classList.add('fixed');
        floatBtn.classList.remove('hidden');
        bodyPos.classList.add('move');
    } else {
        floatNav.classList.remove('fixed');
        floatBtn.classList.add('hidden');
        bodyPos.classList.remove('move');
    }
floatNav.getAnimations({
        behavior: 'smooth' });
    });