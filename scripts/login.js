const email = document.querySelector("input#email");
const password = document.querySelector("input#password");

function wrong(node, text){
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

function correct(node) {
    node.classList.add("correct");
    node.classList.remove("wrong");

    if (node.nextElementSibling?.tagName === 'DIV'){
        node.nextElementSibling.remove();
    }
}

email.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        wrong(e.target, "이메일을 입력해주세요.");
    } else if (!e.target.validity.valid) {
        wrong(e.target, "잘못된 이메일 형식입니다.");
    } else {
        correct(e.target);
    }
});

password.addEventListener("focusout", (e) => {
    if (!e.target.value) {
        wrong(e.target, "비밀번호를 입력해주세요.");
    } else if (e.target.value.length < 8) {
        wrong(e.target, "비밀번호를 8자 이상 입력해주세요.");
    } else {
        correct(e.target);
    }
});