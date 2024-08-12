const create = document.querySelector(".create-container button");
const required = document.querySelectorAll("input");
const email = document.querySelector("#email");

create.addEventListener("click", () => {
  //only just so that this gets triggered after the create account
  //button has been pressed

  required.forEach((ele) => ele.classList.add("required"));
});

email.classList.toggle("email-entered"); //to turn it off by default
email.addEventListener("focusout", () => {
    if(email.value !== ""){
        if(!email.classList.contains("email-entered")){
        email.classList.toggle("email-entered");
        }
    }
    else{
        if(email.classList.contains("email-entered")){
        email.classList.toggle("email-entered");
        }
    }
});

