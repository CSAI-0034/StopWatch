const playButton=document.querySelector(".play");
const lapButton=document.querySelector(".lap");
const resetButton=document.querySelector(".reset");
const minute=document.querySelector(".minute");
const second=document.querySelector(".sec");
const msec=document.querySelector(".msec");
const laps=document.querySelector(".laps");
const clearbutton=document.querySelector(".lap-clear");
const outer=document.querySelector(".outer-circle");
let isPlay=false;
let centiCounter=0;
let centiSec;
let secCounter=0;
let sec;
let minCounter=0;
let min;
let isreset =false;
let lapItem=0;

const toggleButton = () =>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    if(!isPlay && !isreset){
        playButton.innerHTML='Pause';
        outer.classList.add("animation-bg");
        min = setInterval(()=>{
                minute.innerHTML=` ${++minCounter} : `;
            },60*1000);
        sec = setInterval(()=>{
            if(secCounter===60)
                    secCounter=0;
                second.innerHTML=` &nbsp;${++secCounter} : `;
            },1000);
        centiSec=setInterval(()=>{
                if(centiCounter===100)
                    centiCounter=0;
                msec.innerHTML=` &nbsp;${++centiCounter}`;
            },10);
        isPlay=true;
        isreset=true;
    }
    else{
        playButton.innerHTML='Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay=false;
        isreset=false;
        outer.classList.remove("animation-bg");
    }
    toggleButton();
}

const reset = () => {
    isreset=true;
    clearAll();
    play();
    centiCounter = 0;
    secCounter = 0;
    minCounter = 0;
    second.innerHTML="&nbsp;0 : ";
    msec.innerHTML="&nbsp;0";
    minute.innerHTML="0 :";
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}

const clearAll = () => {
    laps.innerHTML='';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapItem=0;
}

const lap = () => {
    const li =document.createElement("li");
    const number=document.createElement("span");
    const time=document.createElement("span");
    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    time.setAttribute("class","time-stamp");
    number.innerHTML=`#${++lapItem}`;
    time.innerHTML=`${minCounter} : ${secCounter} : ${centiCounter}`;
    li.append(number,time);
    laps.append(li);
    clearbutton.classList.remove("hidden");
}

playButton.addEventListener("click",play);

resetButton.addEventListener("click",reset);

lapButton.addEventListener("click",lap);

clearbutton.addEventListener("click",clearAll);