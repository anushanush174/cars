class UserLogin {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

class UserInfo extends UserLogin {
    constructor(nameEmail, passw, email) {
        super(nameEmail, passw)
        this.email = email;
    }
}

const passwordLength = 6;

function userInfoToLocalStorage() {
    const currentUser = new UserInfo(document.getElementById("registerName").value,
        document.getElementById("registerPassword").value,
        document.getElementById("email").value)

    let users = JSON.parse(localStorage.getItem("curUser"));

    if (users) {
        users.push(currentUser);
    } else {
        users = [currentUser];
    }

    localStorage.setItem("curUser", JSON.stringify(users));

    location.href = "mainPage.html";
}

function registerButtonClick() {
    const userName = document.getElementById("registerName").value;
    const userEmail = document.getElementById("email").value;
    const password = document.getElementById("registerPassword").value;
    const rePassword = document.getElementById("confirmPassw").value;

    if (userName.length > 0 && userEmail.length > 0) {
        if (password.length < passwordLength || rePassword.length < passwordLength) {
            alert(`Password must be greater than ${passwordLength} !`);
        } else {
            if (password !== rePassword) {
                alert("Incorrect password!");
            } else {
                let users = JSON.parse(localStorage.getItem("curUser"));

                if (users) {
                    const emailValue = users.find(x => x.email === userEmail);
                    if (emailValue !== undefined) {
                        alert("The user with such Email already exists");
                    } else {
                        userInfoToLocalStorage();
                    }
                } else {
                    userInfoToLocalStorage();
                }
            }
        }
    } else {
        alert("All Fields are Required");
    }
}

const registerButton = document.getElementById("submit");
if (registerButton) {
    registerButton.addEventListener("click", registerButtonClick);
}


function loginButtonClick() {
    const logName = document.getElementById("loginName").value;
    const logPass = document.getElementById("loginPasswprd").value;

    if (logName == "" || (logPass.length < passwordLength)) {
        alert("Fields are Incorrect");
    } else {
        let users = JSON.parse(localStorage.getItem("curUser"));
        if (users) {
            if ((users.find(x => x.name === logName) || users.find(x => x.email === logName)) && users.find(x => x.password === logPass)) {
                location.href = "mainPage.html";
            } else {
                alert("Wrong Password or UserName");
            }
        } else {
            alert("please Register");
        }
    }
}

const loginButton = document.getElementById("loginButtonId")
if (loginButton) {
    loginButton.addEventListener("click", loginButtonClick)
}

const translateControls = document.querySelectorAll("[data-language]");
const getLanguage = document.getElementById("languageId");

class Language {
    constructor() {
        if (!Language.instance) {
            Language.instance = this;
        }

    }
    changeLang(val) {
        return import(`./${val}.js`).then(item => {

            translateControls.forEach(x => {
                x.placeholder = item.default[x.dataset.language]
                x.innerText = item.default[x.dataset.language]
            })
        })
    }
}

let changeCurrentLang = new Language()
getLanguage.addEventListener("change", event => changeCurrentLang.changeLang(event.target.value))

// function getSelectedLanguages(val) {
//     import(`./${val}.js`).then(item => {
//         translateControls.forEach(x => {
//             x.placeholder = item.default[x.dataset.language]
//             x.innerText = item.default[x.dataset.language]
//         })
//     })
// }
