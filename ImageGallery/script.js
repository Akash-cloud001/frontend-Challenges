const panel = document.querySelectorAll('.panel');
console.log(panel);
function toggleUpAndDown(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle("open-active")
    }
}
function toggleOpenActive(){
    this.classList.toggle("open");
}
panel.forEach(item => item.addEventListener('click',toggleOpenActive));
panel.forEach(item => item.addEventListener('transitionend',toggleUpAndDown));

