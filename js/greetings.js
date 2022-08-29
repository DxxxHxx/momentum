const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.getElementById("greeting");
const reload=document.querySelector("#reload");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText="안녕하세요 "+username;
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText=`안녕하세요 ${username}님 🔥`; //🔥
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
}
else{
   paintGreetings(savedUsername);
}
