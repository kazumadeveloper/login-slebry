let password = document.getElementById("password");
let viewIcon = document.getElementById("viewIcon");

viewIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        viewIcon.src = "img/hide.png";
    }else{
        password.type = "password";
        viewIcon.src = "img/view.png";
    }
}