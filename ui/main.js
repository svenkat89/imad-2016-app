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
    request.open('Get','http://svenkat89.imad.hasura-app.io/counter1',true);
  request.send(null);
  };
  
  //submit name
  //get the value from the text box
  var element3 = document.getElementById('submit_btn');
  
 
  element3.onclick = function() {
      //send name to server
      var request = new XMLHttpRequest();
      //render the response as a list
      request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.Done){
          if(request.status === 200){
            var list='';
            var nameresponse = request.responseText;//storin the response
            nameresponse = JSON.parse(nameresponse);//converting to array again from JSON
            for(var i =0 ; i < nameresponse.length ; i++){
                list+='<li>'+ nameresponse[i] +'</li>';
            }
        var ul= document.getElementById('namelist');
        ul.innerHTML=list;
        }
      }
      };
      var nameInput = document.getElementById('name');
      var name1 = nameInput.value;
      request.open('Get','http://svenkat89.imad.hasura-app.io/submit?name='+ name1,true);
      request.send(null);
  };
  