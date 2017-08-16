$(document).ready(function(){
    $('input').change(function(){
        console.log($('input[type="checkbox"]').is(':checked'));
    });

});