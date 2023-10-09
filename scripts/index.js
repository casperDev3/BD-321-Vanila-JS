function turnOnErrorView(selector_input, selector_msg, msg_text) {
    document.querySelector(selector_input).classList.add("error")
    document.querySelector(selector_msg).classList.add("error")
    document.querySelector(selector_msg).innerHTML = msg_text;
}

function getUserData() {
    // get data
    let userName = document.querySelector(".form__name").value 
    || turnOnErrorView(".form__name", ".form__name_error", "U don't write name!");
}


// start point
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form").addEventListener("submit", function (e) {
        e.preventDefault();
        getUserData();
    })
})