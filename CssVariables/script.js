const blur=document.querySelector('#blur');
const space=document.querySelector('#space');
const photo=document.querySelector('.photo');
const color=document.querySelector('#color');
const js=document.querySelector('.js');

blur.addEventListener('input',function(){
    let blurValue=blur.value;
    blurValue=blurValue*0.5;
    photo.style.filter=`blur(${blurValue}px)`
});
space.addEventListener('input',function(){
    photo.style.paddingTop=`${space.value}px`;
    photo.style.paddingLeft=`${space.value}px`;
});
color.addEventListener('input',function(){
    console.log(color.value);
    
    photo.style.backgroundColor=`${color.value}`;
    js.style.color=`${color.value}`;
})




