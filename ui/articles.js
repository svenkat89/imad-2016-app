console.log('loaded');
  //comments.push(commentvalue);
  //res.send(JSON.stringify(comments));
var element4 = document.getElementById('submitcomment');
    element4.onclick = function() {
        var comments=[];
        //console.log(document.getElementById('comment1').value);
        comments=(document.getElementById('comment1').value);
        //send name to server
        console.log(comments);
            var commentlist='';
        
            //comments = JSON.parse(comments);//converting to array again from JSON
            for(var i =0 ; i < comments.length ; i++){
                commentlist+='<textrea>'+ comments[i] +'</textarea>';
            }
        var ul= document.getElementById('comment_section');
        ul.innerHTML=commentlist;
    };