const like = document.getElementById('like');
const heart=document.getElementById('heart');
const post=document.getElementById('post');
const save=document.getElementById('save');
console.log(save.getAttribute('fill'));
const likesCount=document.getElementsByClassName('likesCount')[0];
let basecount=120;
likesCount.textContent=`${basecount} Likes`;
const pointer=document.getElementsByClassName('cursor-pointer')[0];
const captions=document.querySelector('.captions');

pointer.addEventListener('click',()=>{
    // captions.style.whiteSpace='wrap';
    captions.style.height='fit-content';
    
    pointer.style.display='none';
})




let flag = 0;
function likedPost(){
    if (flag == 0) {
        like.firstChild.setAttribute('fill', 'red');
        like.firstChild.setAttribute('stroke', 'none');
        if(heart.hidden){
            heart.hidden=false;
            // heart.style.scale="1";
            heart.classList.toggle('animate');
            likesCount.textContent=`${++basecount} Likes`;
           
            
        }
        flag = 1;
        
    }
    else {
        like.firstChild.setAttribute('stroke', '#000000');
        like.firstChild.setAttribute('fill', 'none');
        if(!heart.hidden){
            heart.classList.toggle('animate');
            likesCount.textContent=`${--basecount} Likes`;
            heart.hidden=true;


        }
        flag = 0;
    }
}
// likedPost();
like.addEventListener('click',function(){
    likedPost();
});
post.addEventListener('dblclick',function(){
    likedPost();
});
save.addEventListener('click',(e)=>{
    if(flag==0){
        save.firstChild.setAttribute('fill','black');
        flag=1;
    }
    else{
        save.firstChild.setAttribute('fill','none');
        flag=0;
   
    }
})

