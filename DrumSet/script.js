const keys = document.querySelectorAll(".keys");


function removeTransition(e){
    this.classList.remove('playing');
}

keys.forEach(key=>key.addEventListener('transitionend',removeTransition));



window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-val="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-val="${e.keyCode}"]`);A
    if(!audio) return; // stops function running alltogether
    audio.currentTime = 0; // if we press audio again & again we want it to play from start
    audio.play();
    key.classList.add('playing');
    console.log(key);
})

