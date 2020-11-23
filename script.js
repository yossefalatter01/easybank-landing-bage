$(function(){
    $('#mynbo').hide();
    $('#fixxo').hide();
    var x = 4 ;
    $('#mynato').click(()=>{
        $('#mynbo').toggle();
        $('#fixxo').toggle();
        if (x%2==0){
            $('#mynato').attr("src","images/icon-close.svg"); 
            $('#mynbo').css({
                "position":"fixed",
                "top": "59px"
            }) ;
            $('#kok').css({
                "position":"fixed",
                "top": "0",
                "z-index" : "999"
        }) ;
        }else{
            $('#mynato').attr("src","images/icon-hamburger.svg"); 
            $('#mynbo').css("position","relative") ;
            $('#kok').css("position","relative") ;
        }
        x++;
    })
});