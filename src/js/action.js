const
loginTel = document.querySelector(".sphone"),
errorTel = document.querySelector(".error-tel"),
sendBtn = document.querySelector(".action__btn"),
clientName = document.querySelector(".sname"),
errorName = document.querySelector(".error-name");

function submitForm(evt) {
    const loginTelRegEx = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    const isTelValid = loginTelRegEx.test(loginTel.value);
    const isNameValid = clientName.value.length > 1 && clientName.value.trim() !== "";
    
            if (isTelValid) {
            loginTel.classList.remove("invalid");
            errorTel.classList.add("hidden");
            } else {
                evt.preventDefault();  
                loginTel.classList.add("invalid");
                errorTel.classList.remove("hidden");
                
            }
            if (isNameValid) {
            clientName.classList.remove("invalid");
            errorName.classList.add("hidden");
            } else {
                evt.preventDefault();  
                clientName.classList.add("invalid");
                errorName.classList.remove("hidden");
            };            
        };

sendBtn.addEventListener("click", submitForm);