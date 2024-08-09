const create = document.querySelector(".create-container button");
const required = document.querySelectorAll("input")

create.addEventListener("click", ()=> {
    required.forEach((ele) => ele.className = "required");
});