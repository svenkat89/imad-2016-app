console.log('loaded');
  //comments.push(commentvalue);
  //res.send(JSON.stringify(comments));
  var comments=[];
    var element4 = document.getElementById('submitcomment');
    element4.onclick = function() {
        var valuecomment=(document.getElementById('comment1').value);
        //console.log(document.getElementById('comment1').value);
        var commentlist='';
         comments.push(valuecomment);
        for(var i =0 ; i < comments.length ; i++){
            console.log(comments[i]);
            commentlist+='<li>'+ comments[i] +'</li>';
            }
        var ul= document.getElementById('comment_section');
        ul.innerHTML=commentlist;
    };