function showPassword(selector) {
    // get element)
    const TARGET = document.querySelector(selector);
    const TARGET_VALUE = TARGET.getAttribute("type")
    TARGET_VALUE == "password" ? TARGET.setAttribute("type", "text") : TARGET.setAttribute("type", "password")

    // hide eye icon

}

const getUserRole = (element) => {
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    return DATA
}

const getDataFromField = (element) => {
    const VALUE = element.value;
    const TYPE = element.getAttribute("name")
    return VALUE
    // if (VALUE.length >= 3) {
    //     return VALUE
    // } else {
    //     alert("Lastname to short")
    //     return null
    // }
}


// start point
document.addEventListener("DOMContentLoaded", () => {
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock");
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock");
    const LF_BLOCK = document.querySelector(".form__top_LFor");
    const CHECK_BOX = document.querySelector(".form__input_checkbox");
    const SUBMIT_BTN = document.querySelector(".form__input_sumbit");
    const REGISTER_FORM = document.querySelector(".form");
    // get user data element
    const INPUT_NAME = document.querySelector(".form__input_first_name");
    const INPUT_EMAIL = document.querySelector(".form__input_email");
    const INPUT_LAST_NAME = document.querySelector(".form__input_second_name");
    const INPUT_PASSWORD = document.querySelector(".form__input_password");
    const INPUT_CONFIRM_PASSWORD = document.querySelector(".form__input_password_reat");

    // switch user role
    LF_BLOCK.addEventListener("click", () => {
        LEFT_BLOCK.classList.toggle('active');
        RIGHT_BLOCK.classList.toggle('active');
    })
    // get value form checkbox on click
    CHECK_BOX.addEventListener("click", function (e) {
        const CHECK_BOX_VALUE = CHECK_BOX.checked
        // CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = !CHECK_BOX_VALUE : SUBMIT_BTN.disabled = !CHECK_BOX_VALUE;
        CHECK_BOX_VALUE ? SUBMIT_BTN.disabled = false : SUBMIT_BTN.disabled = true;
    })
    // submit form
    REGISTER_FORM.addEventListener("submit", (e) => {
        e.preventDefault();
        // get data form
        let role = getUserRole(LF_BLOCK);
        let userLastName = getDataFromField(INPUT_LAST_NAME);
        let userName = getDataFromField(INPUT_NAME);
        let userEmail = getDataFromField(INPUT_EMAIL);
        let userPassword = getDataFromField(INPUT_PASSWORD);
        let userConfirmPassword = getDataFromField(INPUT_CONFIRM_PASSWORD);


        // create data frame
        const USER_DATA = {
            role, userName, userLastName, userEmail, userPassword
        }
        console.log("USER_DATA", USER_DATA)
    })
})