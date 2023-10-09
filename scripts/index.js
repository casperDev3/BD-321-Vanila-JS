function turnOnErrorView(selector_input, selector_msg, msg_text) {
    console.log("test Err")
    document.querySelector(selector_input).classList.add("error")
    document.querySelector(selector_msg).classList.add("error")
    document.querySelector(selector_msg).innerHTML = msg_text;
}

function turnOffErrorView(selector_input, selector_msg){
    console.log("test")
    document.querySelector(selector_input).classList.remove("error")
    document.querySelector(selector_msg).classList.remove("error")
}

function getUserData() {
    // get data
    let userName = document.querySelector(".form__name").value
    userName ? turnOffErrorView(".form__name", ".form__name_error")
    : turnOnErrorView(".form__name", ".form__name_error", "U don't write name!")
   
    
}


// start point
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form").addEventListener("submit", function (e) {
        e.preventDefault();
        getUserData();
    })
})