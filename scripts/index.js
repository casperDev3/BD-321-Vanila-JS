function show_password(TARGET) {
    console.log(TARGET.type)
    const PASSWORD = document.getElementById(TARGET);
    if(PASSWORD.type === "password") {
        PASSWORD.type = "text";
    } 
    else {
        PASSWORD.type = "password";
    }
  }



// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock");
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock");
    const LF_BLOCK = document.querySelector(".form__top_LFor");
    const CHECK_BOX = document.querySelector(".form__input_checkbox");
    // switch user role
    LF_BLOCK.addEventListener("click", ()=>{
        LEFT_BLOCK.classList.toggle('active');
        RIGHT_BLOCK.classList.toggle('active');
    })
    // get value form checkbox on click
    CHECK_BOX.addEventListener("click", function(e){
        alert('test')
    })    
})