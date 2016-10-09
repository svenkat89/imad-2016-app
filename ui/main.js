console.log('Loaded!');
var element = document.getElementById('image');
var counter=1;
var element2 = document.getElementById('Butt');

element.onclick = function() {
    element.style.marginRight='10px';
};


element2.onclick = function() {
  //Go to COunter 1 URL
  var request= new XMLHttpRequest();
  request.open('Get','http://svenkat89.imad.hasura-app.io/counter1',true);
  
  //Get response
  request.onreadystatechange = function() {
      if(request.readystate==XMLHttpRequest.Done){
          if(request.status == 200){
            var counter = request.responseText;
            var new1 = document.getElementById('count');
            new1.innerHTML=counter.toString();
          }
      }
  };
  };