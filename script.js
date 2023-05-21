const nav =document.querySelector('nav');
window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>40){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
})