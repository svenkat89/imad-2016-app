console.log('loaded');
  //comments.push(commentvalue);
  //res.send(JSON.stringify(comments));
var element4 = document.getElementById('submitcomment');

    element4.onclick = function() {
        //console.log(document.getElementById('comment1').value);
        alert(document.getElementById('comment1').value);
        //send name to server
      var request = new XMLHttpRequest();
      request.open('Get','http://svenkat89.imad.hasura-app.io/article-1',true);
      request.send(null);
      //render the response as a list
      request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.Done){
          if(request.status === 200){
            var commentlist='';
            var comments = request.responseText;//storin the response
            comments = JSON.parse(comments);//converting to array again from JSON
            for(var i =0 ; i < comments.length ; i++){
                commentlist+='<textrea>'+ comments[i] +'</textarea>';
            }
        var ul= document.getElementById('comment_section');
        ul.innerHTML=commentlist;
        }
      }
};
        
    };