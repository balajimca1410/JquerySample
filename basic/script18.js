$(document).ready(function(){
    // $('#focus').focusout(function(){
    //     alert('I\'m focused!');
    // });
    $('#myForm').submit(function(){
        alert('yout have submitter me!');
        return false;
    });
});