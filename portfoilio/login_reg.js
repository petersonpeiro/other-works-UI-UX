// setting error messages of the login form
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('.form_message');

    messageElement.textContent = message;
    messageElement.classList.remove(".form_message_error", ".form_message_success");
    messageElement.classList.add(".form_message_${type}");
}

// setting the input error messages
function setInputError(inputElement, message){
    inputElement.classList.add("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = message;
}

// clearing input error 
function clearInputError(inputElement){
    inputElement.classList.remove("form_input_error");
    inputElement.parentElement.querySelector(".form_input_error_message").textContent = "";
}

// listening to all the DOM elements in our html document
document.addEventListener("DOMContentLoaded", () => { 
    const loginform =document.querySelector("#sign_in");
    const registerform =document.querySelector("#sign_up");
    
// onclick on the submit button, it should either take you to the sign_in or sign_up

// sign_in
    document.querySelector("#LinkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.add("form_hidden");
        registerform.classList.remove("form_hidden");
    });

    // sign_up
    document.querySelector("#LinkLogIn").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.remove("form_hidden");
        registerform.classList.add("form_hidden");
    });

    // submitting the form

    loginform.addEventListener("submit", e => {
        e.preventDefault();

        // perform Ajax/fetch login

        setFormMessage(loginform, "error", "Invalid username/password combination");
    });
    // adding event listener for adding error messages on input field
    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if (e.target.id === "username" && e.target.value.length >0 && e.target.value.length < 10){
                setInputError(inputElement, "UserName must be atleast 10 characters long");
            }else if(e.target.id === "email" && e.target.value.length > 0 && e.target.value.length < 5){
                setInputError(inputElement, "Email must be atleast 5 characters long");
            }else if(e.target.id === "password" && e.target.value.length > 0 && e.target.value.length < 8){
                setInputError(inputElement, "Password must be atleast 8 characters long");
            }
            // else if(e.target.id === "cPassword" && e.target.value.querySelector("#cPassword") === e.target.value.querySelector("#password")){
            //     setInputError(inputElement, "Email must be atleast Passwords not matched");
            // }
        });
        // event listener for clearing input error
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});