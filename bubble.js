let timer=10
let score=0;
let hitrandom;

function makeBubble(){
    let createBubble = "";

    for(let i=1;i<=68; i++)
    {
        let rn=Math.floor(Math.random()*10);
        createBubble+= `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbottom").innerHTML=createBubble;
}
//CREATE TIMER

function runTimer()
{
     var timerInterval = setInterval(function( ) {
        if(timer>0)
        { 
            timer-- ;
            document.getElementById("timerValue").textContent = timer;
        }
        else
        {
            clearInterval(timerInterval);
            document.querySelector(".pbottom").innerHTML=`<h1>Game Over</h1>`;
            
        }
       
    },1000);
}
function getNewHit(){
    hitrandom =Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrandom;
}
function IncreaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;

}
document.querySelector(".pbottom").addEventListener('click', function(detail)
{
    var clickedBubble = Number(detail.target.textContent);
    if(clickedBubble === hitrandom) 
    {
        IncreaseScore();
        makeBubble();
        getNewHit();
    }

})

makeBubble();
getNewHit();
IncreaseScore();
runTimer();





