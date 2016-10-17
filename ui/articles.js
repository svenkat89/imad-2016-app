console.log('loaded');
  //comments.push(commentvalue);
  //res.send(JSON.stringify(comments));
  var comments=[];
var element4 = document.getElementById('submitcomment');
    element4.onclick = function() {
        //console.log(document.getElementById('comment1').value);
        var commentlist='';
            comments=(document.getElementById('comment1').value);
        for(var i =0 ; i < comments.length ; i++){
            commentlist+='<textrea>'+ comments[i] +'</textarea>';
            }
        var ul= document.getElementById('comment_section');
        ul.innerHTML=commentlist;
    };