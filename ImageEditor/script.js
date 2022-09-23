const ele = document.querySelector(":root");
const propEle = getComputedStyle(ele);

// console.log(propEle.getPropertyValue('--color'));


// fetching the all inputs from doc
const inputs  = document .querySelectorAll('.tools input');

function handleUpdate(){
    // console.log(this.value);
    const suffix = this.dataset.sizing || ''; // the input have attri data- we need that else we set is empty
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));


console.log(inputs);