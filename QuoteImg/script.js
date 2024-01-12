const panels=document.querySelectorAll('.panel');


panels.forEach((panel)=>{
    panel.addEventListener('mouseover',(e)=>{
        panel.style.flex='5';
        panel.classList.add('open-active');
        panel.style.filter=`none`;
      

        
    });
    panel.addEventListener('mouseout',(e)=>{
      
           
            panel.style.flex='1';
            panel.style.filter=`grayscale(1)`;
            panel.classList.remove('open-active');
        
        
       
        
    });
 
});





