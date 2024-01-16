
let btnRoll=document.querySelector('#btn-roll-dice');
let btnHold=document.querySelector('#btn-hold');
let btnNewGame=document.querySelector('#btn-new-game');
let dice=document.querySelector('.dice');
let section0=document.querySelector('.player--0');
let section1=document.querySelector('.player--1');

let sum0= 0;
let sum1=0;

function displayScore0(message){
    document.querySelector('#score--0').textContent=message;
}

function displayScore1(message){
    document.querySelector('#score--1').textContent=message;
}

function displayCurrentScore0(message){
    document.querySelector('#current--0').textContent=message;
}
function displayCurrentScore1(message){
    document.querySelector('#current--1').textContent=message;
}
function setImg(imgNumber){
    dice.src="dice-"+imgNumber+".png";
}
function resetGame(){
    sum0=0;
    displayScore0(0);
    displayCurrentScore0(0);
    sum1=0;
    displayScore1(0);
    displayCurrentScore1(0);
}


btnNewGame.addEventListener('click',function(){
    resetGame();
})


btnHold.addEventListener('click',function(){
    section0.classList.toggle('player--active');
    section1.classList.toggle('player--active');
})
btnRoll.addEventListener('click', function(){
if (section0.classList.contains('player--active')){
    let randInt = Math.floor(Math.random()*6)+1;
        if(sum0<20){
            if (randInt==1){
                setImg(randInt);
                sum0=0;
                displayScore0(sum0);
                displayCurrentScore0(randInt);
                }else{    
                setImg(randInt);
                sum0+=randInt;
                displayScore0(sum0);
                displayCurrentScore0(randInt);
                }
            }else{
                btnHold.disabled= true;
                btnRoll.disabled= true;
                }
}else
    if(section1.classList.contains('player--active')){
        let randInt = Math.floor(Math.random()*6)+1;
        if(sum1<20){
            if (randInt==1){
                setImg(randInt);
                sum1=0;
                displayScore1(sum1);
                displayCurrentScore1(randInt);
                }else{    
                setImg(randInt);
                sum1+=randInt;
                displayScore1(sum1);
                displayCurrentScore1(randInt);
                }
            }else{
                btnHold.disabled= true;
                btnRoll.disabled=true;
                }
    }
})


