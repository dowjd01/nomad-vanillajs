const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usename";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(usename){
    greeting.innerText = `안녕, ${usename}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsename = localStorage.getItem(USERNAME_KEY);

if(savedUsename === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsename);
}