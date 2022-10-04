// ed2drvv8bF07tSc7rBiysdNgPSFltxnUgldYPoen my key 

// APOD
function getAPOD(){
    $.ajax({
        url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
        method: 'GET',
        success: (data)=>{
            $('#apodTitle').text(data.title);
            $('#apodArticle').text(data.explanation);
            $('#apodImg').attr('src',data.hdurl);
            $('#apodAnchor').attr('href', data.hdurl);
        }
    })
}

window.onload = getAPOD;

// Mars Rover
$('#date').datepicker({
    dateFormat: "yy-mm-dd"
});

// $('marsBtn').on(()=>{
//     $('#imgContainer').empty();
// })
$('#marsBtn').click(()=>{
    const currDate = $('#date').val();
    console.log(typeof(currDate));
    if(currDate !=''){
        $.ajax({
            url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
            method: 'GET',
            data: {
                earth_date: currDate,
                api_key: 'DEMO_KEY'
            },
            success: (data)=>{
                const gallery = data.photos;
                if(gallery.length == 0){
                    $('#imgContainer').append(`
                        <figure>
                            <figcaption>No Image Found</figcaption>
                            <img src="../astronomyPicsAndArticle/3024051.jpg" alt="" style="height=100px;width=200px;"> 
                        </figure>
                    `)
                }else{
                    let count = 0;
                    for(let pic in gallery){
                        count++;
                        if(count > 50){
                            break;
                        }
                        $('#imgContainer').append(`
                        <figure>
                            <a href="${gallery[pic].img_src}" target="_blank" download>
                                <img src="${gallery[pic].img_src}" alt="img">
                            </a>
                        </figure>
                        `)
                    }
                }
            }
        })
    }else{
        alert('Enter the Date');
    }
})
