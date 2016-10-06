console.log('Loaded!');
var element = document.getElementById("image");
var element1 = document.getElementById("main");
element1.innerHTML='New World';
var main = function(){
    element.onclick(function() {
        element.animate({
            left:"10px"
        },200);
        });
    };
$(document).ready(main);