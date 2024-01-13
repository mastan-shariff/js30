const open=document.querySelectorAll('.open');
const header=document.getElementsByTagName('header')[0];
const openwindow=document.querySelector('.openwindow');
const closewindow=document.querySelector('.closewindow');
open[0].addEventListener('click',(e)=>{
    openwindow.classList.toggle('toggleclass');
    header.classList.toggle('close');

    closewindow.classList.toggle('toggleclass');
});
open[1].addEventListener('click',(e)=>{
    openwindow.classList.toggle('toggleclass');
    header.classList.toggle('close');

    closewindow.classList.toggle('toggleclass');
});
