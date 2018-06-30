$(function(){

var color, width, height;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();//get color picked by user
width= $('#inputWeight').val();//get row of grid
height= $('#inputHeight').val();//get Column of grid
makeGrid(height, width);
});

function makeGrid(x,y) {
// Your code goes here!
//creating Canvas table
$('tr').remove();
for (n=1;n<=x; n++){
   $('#pixelCanvas').append('<tr id=table'+n+'></tr>');
   for(m=1;m<=y;m++){
       $('tr').filter(':last').append('<td></td>');
       $('#pixelCanvas'+n).append('<td></td>');
   }
}
//inserting picked color
$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
})
}

})
