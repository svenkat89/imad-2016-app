console.log('Loaded!');
var element = document.getelementById("image");
var element1 = document.getelementById("main");
element1.innerHTML='New World';
var main = function(){
    element.click(function() {
        element.animate({
            left:"10px"
        },200);
        });
    };
$(document).ready(main);