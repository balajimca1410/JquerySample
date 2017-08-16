$(document).ready(function(){
    var maxLen=150;

    var textBox=$('#characterCount');
    var status=$('#status');
    status.text(maxLen+'Characher left')
    textBox.keydown(function(){
        var characters =$(this).val().length;
        status.text((maxLen-characters)+'Characters left..');
        if(maxLen< characters){
            status.css('color','red');

        }
        else
            {
                status.css('color','black');
            }
    });

});