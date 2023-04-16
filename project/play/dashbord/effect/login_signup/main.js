
// function for setting error message for the sign in form

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form_message');

     messageElement.textContent = message;
     messageElement.classList.remove(".form_message_success", ".form_message_error");
     messageElement.classList.add(".form_message_${type}");
}

// setFormMessage(loginForm, "success", "You are logged in!");

// function for setting error message of the sign up form input fields

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove('form_input_error');
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#sign_in");
    const createAcountForm = document.querySelector("#sign_up");

    document.querySelector("#LinkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        createAcountForm.classList.remove("form_hidden");
    });
    document.querySelector("#LinkLogIn").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        createAcountForm.classList.add("form_hidden");
    }); 

    // setting error message for sign in form

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

// setting error message for input elements

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            // e.preventDefault();
            if ((e.target.id === "usernameInput") && (e.target.value.length > 0) && (e.target.value.length < 5)) {
                setInputError(inputElement, "username must be at least 5 characters long");
            }
        });
       inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
       });
    });
});