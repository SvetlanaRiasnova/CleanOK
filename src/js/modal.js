const modalWindow = document.querySelector(".modal");
const modalButton = document.querySelector(".nav__burger");
const modalFon = document.querySelector(".modal-fon");

function showModal() {
    
    modalWindow.classList.toggle("hidden");
    modalFon.classList.toggle("hidden");

}

    document.addEventListener('keydown', function(evt) {
        if (evt.keydown === 27) {
        modalWindow.classList.add("hidden");
        modalFon.classList.toggle("hidden");
        }
        });

modalFon.addEventListener('click', showModal);

modalButton.addEventListener("click", showModal);