$('#btn').click(()=>{
    $.get('https://codingninjas.in/api/v3/courses',(courses)=>{
        $('.btn-container').hide();

        const courseGroup = courses.data.courses;
        for(let item in courseGroup){
            if(courseGroup[item].preview_image_url!=""){
                $('#container').append(`
                <figure>
                        <img src="${courseGroup[item].preview_image_url}" alt="">
                    <figcaption>
                        ${courseGroup[item].name}
                    </figcaption>
                    <aside>
                        ${courseGroup[item].level}
                    </aside>
                </figure>
            `);
            }
            
        }
    })
})

