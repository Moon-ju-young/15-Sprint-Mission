const email = document.querySelector("input#email");
const nickname = document.querySelector("input#nickname");
const password = document.querySelector("input#password");
const passwordCheck = document.querySelector("input#password-check");

email.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else if (!e.target.validity.valid) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else {
        e.target.classList.remove("wrong");
        e.target.classList.add("correct");
    }
});

nickname.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else {
        e.target.classList.remove("wrong");
        e.target.classList.add("correct");
    }
});

password.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else if (e.target.value.length < 8) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else {
        e.target.classList.remove("wrong");
        e.target.classList.add("correct");
    }
});

passwordCheck.addEventListener("focusout", (e) => {
    if (password.value !== passwordCheck.value) {
        e.target.classList.add("wrong");
        e.target.classList.remove("correct");
    } else {
        e.target.classList.remove("wrong");
        e.target.classList.add("correct");
    }
});