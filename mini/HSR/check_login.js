function service() {    
    var signIn = sessionStorage.getItem("signIn");    
    
    if(signIn ==null){
        alert("로그인을 해주세요");
        location.href="/mini/HSR/page2.html";
    } 
    
}

$(document).ready(function(){
    service();
});