const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const button = document.querySelector("button.complete-btn");

const email = document.querySelector("input#email");
const nickname = document.querySelector("input#nickname");
const password = document.querySelector("input#password");
const passwordCheck = document.querySelector("input#password-check");

function wrongInput(node, text){
    node.classList.add("wrong");
    node.classList.remove("correct");

    let wrongMessage;
    if (node.nextElementSibling?.tagName === 'DIV'){
        wrongMessage = node.nextElementSibling;
    } else {
        wrongMessage = document.createElement('div');
        wrongMessage.setAttribute("class","wrong-message");
    }
    wrongMessage.textContent = text;
    node.after(wrongMessage);
}

function correctInput(node) {
    node.classList.add("correct");
    node.classList.remove("wrong");

    if (node.nextElementSibling?.tagName === 'DIV'){
        node.nextElementSibling.remove();
    }
}

function passwordMatch() {
    if (password.value !== passwordCheck.value) {
        wrongInput(passwordCheck, "비밀번호가 일치하지 않습니다.");
    } else {
        correctInput(passwordCheck);
    }
}

email.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        wrongInput(e.target, "이메일을 입력해주세요.");
    } else if (!e.target.validity.valid) {
        wrongInput(e.target, "잘못된 이메일 형식입니다.");
    } else {
        correctInput(e.target);
    }
});

nickname?.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        wrongInput(e.target, "닉네임을 입력해주세요.");
    } else {
        correctInput(e.target);
    }
});

password.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        wrongInput(e.target, "비밀번호를 입력해주세요.");
    } else if (e.target.value.length < 8) {
        wrongInput(e.target, "비밀번호를 8자 이상 입력해주세요.");
    } else {
        correctInput(e.target);
    }
});

if (passwordCheck) {
    password.addEventListener("change", () => {
        if (passwordCheck.value) {
            passwordMatch();
        }
    });
    passwordCheck.addEventListener("input", () => {
        if (password.value) {
            passwordMatch();
        }
    });
}

form.addEventListener("focusout", () => {
    for (let input of inputs) {
        if (!input.classList.contains("correct")){
            return;
        }
    }
    button.removeAttribute("disabled");
});