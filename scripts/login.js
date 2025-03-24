const email = document.querySelector("input#email");
const password = document.querySelector("input#password");

email.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        e.target.classList.add("wrong");
    } else if (!e.target.validity.valid) {
        e.target.classList.add("wrong");
    } else {
        e.target.classList.remove("wrong");
    }
});

password.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        e.target.classList.add("wrong");
    } else if (e.target.value.length < 8) {
        e.target.classList.add("wrong");
    } else {
        e.target.classList.remove("wrong");
    }
});