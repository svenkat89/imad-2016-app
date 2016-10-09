console.log('Loaded!');
var element = document.getElementById("image");
var element1 = document.getElementById("main");
var counter=1;
element1.innerHTML='New World';
element.onclick = function() {
    element.style.marginRight='10px';
};
var element2 = document.getElementById("button");
element.onclick = function() {
  //Go to COunter 1 URL
  var request= new XMLHttpRequest();
  request.open('Get','http://svenkat89.imad.hasura-app.io/counter1',true);
  
  //Get response
  request.onreadystatechange = function() {
      if(request.readystate==XMLHttpRequest.Done){
          if(request.status == 200){
            var counter = counter*2;
            var new1 = document.getElementById("count");
            new1.innerHTML=counter.toString();
          }
      }
  };
  };