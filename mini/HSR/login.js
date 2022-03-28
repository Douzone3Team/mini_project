
$.ajax({
    url:"user.json",
    type:"get",
    dataType:"json",
    success:function(json) {            
        let str = JSON.stringify(json);            
        let result = 0;
        for(var i = 0; i < json.length; i++){
            localStorage.setItem(json[i].ID,json[i].PASS);
        }
    },
    error:function() {        
    }
});





function login() {
    let id = $("#ID").val();
    let pass = $("#PASS").val();
    
    let get2 =localStorage.getItem(id);
    console.log(get2);
    if(localStorage.getItem(id) == pass){
        sessionStorage.setItem(id,pass);
        sessionStorage.setItem('signIn','in');
        $("#login-form").submit();
    }else{
        alert("ID나 PASSWORD를 확인하세요")
    }
    $.ajax({
        url:"user.json",
        type:"get",
        dataType:"json",
        success:function(json) {
            let str = JSON.stringify(json);            
            let result = 0;
            for(var i = 0; i < json.length; i++){
                localStorage.getItem(json[i].ID,json[i].PASS)
                if(json[i].ID == id && json[i].PASS == pass)  {
                    result = 1;
                    
                    break
                }
                else{
                    result = 2;
                }
            }
            if(result == 2){
                alert("ID 나 PASSWORD가 틀렸습니다.");
            }
        },
        error:function() {
            alert('error');
        }
    });   
}