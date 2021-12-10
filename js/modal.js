const modalWindow = document.querySelector(".modal");
const modalButton = document.querySelector(".nav__burger");
const modalFon = document.querySelector(".modal_fon");

function showModal() {
    modalFon.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
}

// modalFon.addEventListener("click", showModal); 
    

    document.addEventListener('keydown', function(evt) {
    // Проверяем, что код клавиши равен 27
        if (evt.keyCode === 27) {
        modalWindow.classList.add("hidden");
        }
        });

// modalFon.addEventListener('click', function(evt) {
            
//             if (evt.target.className != 'modal' && evt.target.className != 'nav__burger')  {
//             modalWindow.classList.add('hidden');
//                 }
    
// });

modalFon.addEventListener('click', showModal);

modalButton.addEventListener("click", showModal);