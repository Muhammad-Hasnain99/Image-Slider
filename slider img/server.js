const slides = document.querySelectorAll(".slide")
const preBtn = document.querySelector(".pre-btn")
const nextBtn = document.querySelector(".next-btn")

let counte = 0;

slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})

nextBtn.addEventListener("click",function(){
    counte++;
    slider()
})

preBtn.addEventListener("click",function(){
 counte--;
 slider()
})

function slider(){
// if(counte === slides.length){
//     counte = 0;
// }
// if(counte < 0){
//     counte = slides.length-1;
// }

if(counte < slides.length-1){
    nextBtn.style.display = `block`;
}
else{
    nextBtn.style.display = `none`;
}
if(counte > 0){
    preBtn.style.display = `block`;
}
else{
    preBtn.style.display = `none`;
}
    slides.forEach(function(slide){
        slide.style.transform = `translate(-${counte * 100}%)`
    })
}

// preBtn.style.display = `none`;
