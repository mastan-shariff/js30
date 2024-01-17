let dice={
    sides:6,
    roll:function(){
        return Math.floor(Math.random()*this.sides)+1;
    }
} 

const face=document.querySelector('.dice');
const rolldice=document.querySelector('#button');
function print(result){
    face.innerHTML=result;
}

rolldice.addEventListener('click',function(){
    let result=dice.roll();
    print(result);
});
