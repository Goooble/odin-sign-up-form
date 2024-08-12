const create = document.querySelector(".create-container button");
const required = document.querySelectorAll("input");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const repass = document.querySelector("#repassword");
const phone = document.querySelector("#phone");

create.addEventListener("click", () => {
  //only just so that this gets triggered after the create account
  //button has been pressed

  required.forEach((ele) => ele.classList.add("required"));
  
  if (pass.value !== repass.value) {
    if (!repass.classList.contains("pass-no-match"))
      repass.classList.toggle("pass-no-match");
    repass.setCustomValidity("passwords dont match");
   
  } else {
    if (repass.classList.contains("pass-no-match"))
      repass.classList.toggle("pass-no-match");
    repass.setCustomValidity("");
    
  }
});
//to turn them off by default
email.classList.toggle("email-entered");
repass.classList.toggle("pass-no-match");
phone.classList.toggle("phone-invalid");
email.addEventListener("focusout", () => {
  if (email.value !== "") {
    if (!email.classList.contains("email-entered")) {
      email.classList.toggle("email-entered");
    }
  } else {
    if (email.classList.contains("email-entered")) {
      email.classList.toggle("email-entered");
    }
  }
});

phone.addEventListener("focusout", () => {
  phone.value.split("").forEach((ele, index) => {
    if (
      phone.value.charCodeAt(index) < 48 ||
      phone.value.charCodeAt(index) > 57 ||
      phone.value.length !== 10
    ) {
      phone.setCustomValidity("not a number");
      if (!phone.classList.contains("phone-invalid")) {
        phone.classList.toggle("phone-invalid");
      }
    } else {
      phone.setCustomValidity("");
      if (phone.classList.contains("phone-invalid")) {
        phone.classList.toggle("phone-invalid");
      }
    }
  });
});
