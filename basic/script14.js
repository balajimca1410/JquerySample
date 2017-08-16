function colorThis(){
    $(this).css('background','orange');
    //$(this) and this jQuery()
}

$(document).ready(function(){
   $('li').click(colorThis);
});