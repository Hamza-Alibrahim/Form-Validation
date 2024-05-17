let submit = document.querySelector(".submit"),
    fix = document.getElementById("fix"),
    name = document.getElementById("name"),
    phone = document.getElementById("phone"),
    email = document.getElementById("email"),
    message = document.getElementById("message");
submit.onclick = () => {
    if (validatName() && validatPhone() && validatEmail() && validatMessage()) return true;
    else {
        fix.textContent = "Please fix error to submit";
        setTimeout(() => { fix.textContent = ""; }, 3000);
        return false;
    };
};
function validatName() {
    let theName = document.querySelectorAll("form div input")[0].value;
    if (theName.length == 0) name.textContent = "Name is requared";
    else if (!theName.match(/\w+\s\w+/)) name.textContent = "Write full name";
    else {
        name.innerHTML = `<i class="fas fa-check-circle"></i>`;
        return true;
    };
    return false;
};
function validatPhone() {
    let thePhone = document.querySelectorAll("form div input")[1].value;
    if (thePhone.length == 0) {
        phone.textContent = "Phone is requared";
        return false;
    } else if (thePhone.length != 10) {
        phone.textContent = "Phone no should be 10 digits";
        return false;
    }
    if (thePhone.match(/\d{10}/)) {
        phone.innerHTML = `<i class="fas fa-check-circle"></i>`;
        return true;
    } else {
        phone.textContent = "Only digits please";
        return false;
    };
};
function validatEmail() {
    let theEmail = document.querySelectorAll("form div input")[2].value;
    if (theEmail.length == 0) email.textContent = "Email is requared";
    else if (!theEmail.match(/\w+@\w+\.\w{3,}/i)) email.textContent = "Invalid email";
    else {
        email.innerHTML = `<i class="fas fa-check-circle"></i>`;
        return true;
    };
    return false;
};
function validatMessage() {
    let theMessage = document.querySelector("form div textarea").value;
    if (theMessage.length == 0) message.textContent = "email is requared";
    else if (theMessage.length < 30) message.textContent = `message need ${30 - theMessage.length} hrf more `;
    else {
        message.innerHTML = `<i class="fas fa-check-circle"></i>`;
        return true;
    };
    return false;
};