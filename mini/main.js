
$('.hover_view').hide();

$(document).ready(function () {
    var titleid;
    $('.title').mouseenter(function () {
        titleid = this.id;
        $('#' + titleid).hide(); 
        $(".card-text").css('margin-top','15px');       
        $('#hover_view' + titleid).css('height','300px');
        $('#hover_view' + titleid).fadeIn(1000).show();
    })

    $('.hover_view').mouseout(function () {
        $('#hover_view' + titleid).finish();
        $(".card-text").css('margin-top','0px');  
        $("#hover_view" + titleid).hide();
        $('#' + titleid).show();
    });
})


