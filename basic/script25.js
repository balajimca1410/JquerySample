$(function(){
    $('ul.parent > li').hover(function(){
        $(this).find('ul.child').show(200);
    },function(){

    });
});