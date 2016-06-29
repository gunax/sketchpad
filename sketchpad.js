var numBoxes = 16;
var $container;
$(document).ready(function () {
    "use strict";
    $container = $('#container');
    reset();
    
    //reset button
    $('#resetButton').click(function () {
        //store the text field's value
        numBoxes = $('#boxNumberField').val();
        reset();
    });
});

var reset = function () {
    //empty the container of old boxes
    $container.empty();
    
    //create new boxes inside $container
    for (var j=0; j<numBoxes; j++){
        for (var i=0; i<numBoxes; i++){
            $container.append('<div class="box"></div>');
        }
        $container.append('<br>');
    }
    
    //change background of each box when moused-over
    $('.box').mouseenter(function () {
        $(this).css('background-color', 'black');
    });
}