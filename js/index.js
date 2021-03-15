var nav =document.querySelector(".tt_header_box")
console.log(nav)
window.onscroll=function(){
    var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrolltop>nav.offsetHeight*3){
        nav.style.backgroundColor="rgb(255,0,0,1)"
    }
    else if(scrolltop>nav.offsetHeight*2){
        nav.style.backgroundColor="rgb(255,0,0,0.5)"
    }
    else if(scrolltop>nav.offsetHeight){
        nav.style.backgroundColor="rgb(255,0,0,0.3)"
    }
    else if(scrolltop==0){
        nav.style.backgroundColor="rgb(255,0,0,0)"
    }
}
var lis =document.querySelectorAll(".pull-left ul li")
var s1 =9;
var s2 =5;
var m1 =9;
var m2 =5;
var h =8;
var timer=setInterval(function(){
    if(h==0&m2==0&m1==0&s2==0&s1==0){
        clearInterval(timer);
    }
    s1--;
    if(s1<0){
        s1=9;
        s2--;
        if(s2<0){
            s2=5;
            m1--;
            if(m1==0){
                m1=9;
                m2--;
                if(m2<0){
                    m2=5;
                    h--;
                }
            }
        }
    }
    lis[5].innerHTML=s1;
    lis[4].innerHTML=s2;
    lis[3].innerHTML=m1;
    lis[2].innerHTML=m2;
    lis[1].innerHTML=h;
},1000)