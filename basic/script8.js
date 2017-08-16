function mouseEnter(){
    console.log('Mouse Entered');
}
function mouseOut(){
    console.log('Mouse Leave');
}
$(document).ready(function(){
//$('#myDiv').mouseenter(mouseEnter);
//$('#myDiv').mouseout(mouseOut);
$('#myDiv').hover(mouseEnter,mouseOut);
 });