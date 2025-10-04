let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let full=document.querySelector('.full');
window.onscroll=function(){
    let value = scrollY;
    stars.style.right= value +'px';
    moon.style.top = value*4+'px';
    mountains3.style.top=value*2+'px';
    mountains4.style.top=value*1.2+'px';
    river.style.top=value+'px';
    boat.style.top=value+'px';
    boat.style.left=value*2+'px';
    full.style.fontSize= value + 'px';
    if(scrollY>=44){
    full.style.fontSize=44 + 'px';
    full.style.position= 'fixed';
    if(scrollY>=400){
        full.style.display='none';
    }else{
        full.style.display='block';
    }
    if(scrollY>=75){
        document.querySelector('.main').style.background='linear-gradient(#242c57,#41a0b6)'
    }else{
        document.querySelector('.main').style.background='linear-gradient(#000017,#000271)'
    }

    }
    }
  
    function togglePopup(){
        document.getElementById("popup-1").classList.toggle("active");
    }
    function toggleContact(){
        document.getElementById("contact-1").classList.toggle("active");
    }
    function windowopen(){
        window.open("index2.html","blank","height=700,width=700");
    }