document.querySelector(".btnSubmit").addEventListener("click",addData);


let data=JSON.parse(localStorage.getItem("userData"))||[];
function addData(){



    let userObj={
        userName:document.querySelector("#name").value,
        userEmail:document.querySelector("#email").value,
        userPhone:document.querySelector("#phone").value,
        userPassword:document.querySelector("#password").value
    }
    
data.push(userObj);
localStorage.setItem("userData",JSON.stringify(data));
location.href = "Loginpage.html";
}

document.querySelector(".home").addEventListener("click",home);
function home(){
    location.href = "Index.html";
}

document.querySelector(".btnAlready").addEventListener("click",already);
function already(){

    location.href="Loginpage.html"
}
export default login;