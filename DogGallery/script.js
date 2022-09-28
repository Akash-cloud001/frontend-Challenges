// USING XML & VANILLA-JS
// const fetchBtn = document.getElementById('fetchBtn');
// const imgDiv = document.getElementById('dogImg');

// function fetchRadomDogImage(){
//     const xhrRequest = new XMLHttpRequest();    // object of the request;
//     xhrRequest.onload = ()=>{
//         const jsonParser = JSON.parse(xhrRequest.response); //converting the JSON into the object 
//         console.log(jsonParser);        
//         const imgUrl = jsonParser.message;
//         console.log(imgUrl);
//         imgDiv.setAttribute('src',imgUrl);
//     }
//     xhrRequest.open('GET','https://dog.ceo/api/breeds/image/random');   //open the request to the server
//     xhrRequest.send(); // send request to the server
// }

// fetchBtn.addEventListener('click',fetchRadomDogImage);

// USING JQUERY 
const fetchBtn = $('#fetchBtn');
const imgDiv = $('#dogImg');

function fetchRandomDogImage(){
// FIRST METHOD
//     $.ajax({
//         url:'https://dog.ceo/api/breeds/image/random',
//         method:'GET',
//         success:(data)=>{
//             const imgUrl = data.message;
//             console.log(imgUrl);
//             imgDiv.attr('src',imgUrl);
//         }
//     })
// SECOND METHOD
$.get('https://dog.ceo/api/breeds/image/random',(data)=>{
                const imgUrl = data.message;
                imgDiv.attr('src',imgUrl);
}).fail(()=>{
    console.error("Request Failed");
})
}
fetchBtn.click(fetchRandomDogImage);


// BREED WITH IMAGES

// Funcionality to fill the select tag in HTML Dynamically
const selectBreed = $('#breeds');
function breedName(){
    $.get('https://dog.ceo/api/breeds/list/all',(data)=>{
        const lists = data.message;
        for(const item in lists){
            selectBreed.append(`<option value=${item}>${item}</option>`)
        }
    });
}
window.onload = breedName();

// functionality to get the image 
const breedBtn = $('#getBreedImg');
 

function dogImgBreedWise(){
    const dogBName = $('#breeds').val();
    $.get(`https://dog.ceo/api/breed/${dogBName}/images/random`,(data)=>{
        const breedImgUrl = data.message;
        // console.log(breedArray);
        $("#dog-breed-img").attr('src',breedImgUrl);
    })
}

breedBtn.click(dogImgBreedWise);