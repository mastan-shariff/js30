function playsound(e){
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    
    audio.currentTime=0;
    audio.play();   
}
window.addEventListener('keydown',playsound);

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys=Array.from(document.querySelectorAll('.key'));
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
