const floatNav=document.querySelector(".header__container-float")

function showNav() {
    floatNav.classList.remove("hidden");
}

window.addEventListener('scroll', showNav);