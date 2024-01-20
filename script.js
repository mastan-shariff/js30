const canvas=document.querySelector('#canvas');
const ctx=canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isdrawing=false;
let lastX=0;
let lastY=0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isdrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
  
    hue++;
    if (hue >= 360) {
      hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
  
    if(direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }

} 
window.addEventListener('mousedown',(e)=>{
    isdrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY];
});
window.addEventListener('mousemove',draw);
window.addEventListener('mouseup',()=>isdrawing=false);
window.addEventListener('mouseout',()=>isdrawing=false);
