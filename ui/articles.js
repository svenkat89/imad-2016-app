console.log('loaded');
  //comments.push(commentvalue);
  //res.send(JSON.stringify(comments));
  var comments='';
var element4 = document.getElementById('submitcomment');
    element4.onclick = function() {
        //console.log(document.getElementById('comment1').value);
        var commentlist='';
        for(var i =0 ; i < comments.length ; i++){
            commentlist+='<textrea>'+ (document.getElementById('comment1').value) +'</textarea>';
            }
        var ul= document.getElementById('comment_section');
        ul.innerHTML=commentlist;
    };