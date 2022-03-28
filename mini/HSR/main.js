// main.js
function search() {
    var word = $("#inp").val();
    var check = $('input:radio[id=a]').is(':checked');
        if( check === true){
            location.href="https://help.douzone.com/pboard/index.jsp?pid=10&s_category_id=all&type=all&code=faq10&s_keyword=" + word;
        }
        else {
            location.href="https://help.douzone.com/pboard/index.jsp?code=qna12&pid=12&type=all&s_category_id=all&s_keyword=" + word;
        }
    
    
}


function setWord1() {    
    $('#inp').val('변환오류');    
}
function setWord2() {
    $('#inp').val('간이지급명세서');;    
}
function setWord3() {
    $('#inp').val('수집실패');  
}
function setWord4() {
    $('#inp').val('연말정산');  
}

function moveLogin() {    
    location.href="page2.html";
}
function tab_li_set(){
    //a 가 체크되었는지 확인 맞으면 true 아니면 b이므로 false  
    var check = $('input:radio[id=a]').is(':checked'); 
    if( check === true){   
        //tab-a tab-b 변경         
        $(".tab-b" ).removeClass('tab-b');
        $("#tab-a").addClass('tab-a');        
    }
    else {
         //tab-a tab-b 변경
        $(".tab-a").removeClass('tab-a');
        $("#tab-b").addClass('tab-b');                
    }    
    $('input:radio[name=filter-options]').click( function(){

        //a 가 체크되었는지 확인 맞으면 true 아니면 b이므로 false  
        var check = $('input:radio[id=a]').is(':checked');
        if( check === true){
            //tab-a tab-b 변경
            $(".tab-b" ).removeClass('tab-b');
            $("#tab-a").addClass('tab-a');
            // SearchBox ul dl 체크된 값에 맞게 표출
            $("#Smart").text("Smart A 2.0");            
            $("dl").show();
        }
        else {
            //tab-a tab-b 변경
            $(".tab-a").removeClass('tab-a');
            $("#tab-b").addClass('tab-b');
            // SearchBox ul dl 체크된 값에 맞게 표출
            $("#Smart").text("iU");
            $("dl").hide();
        }
    });
}

$(document).ready(function(){
    const hide = document.querySelectorAll("ul.loginmenu");
    hide(1).style.hide();
    var check = $('input:radio[id=a]').is(':checked');
    tab_li_set();

    
});




