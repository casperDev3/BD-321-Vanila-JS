function show_password(TARGET) {
    console.log(TARGET.type)
    const PASSWORD = document.getElementById(TARGET);
    if (PASSWORD.type === "password") {
        PASSWORD.type = "text";
    }
    else {
        PASSWORD.type = "password";
    }
}

const getUserRole = (element) => {
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute("data-role")
    return DATA
}

const getLastNameUser = (element) => {
    const VALUE =  element.value;
    if (VALUE.length >= 3){
        return VALUE
    } else {
        alert("Lastname to short")
        return null
    }
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
    const INPUT_LAST_NAME = document.querySelector(".form__input_second_name");
    
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
    REGISTER_FORM.addEventListener("submit", (e)=>{
        e.preventDefault();
        // get data form
        let role = getUserRole(LF_BLOCK);
        let lastUserName = getLastNameUser(INPUT_LAST_NAME);
        // create data frame
        const USER_DATA = {
            role, lastUserName
        }
        console.log("USER_DATA", USER_DATA)
    })
})