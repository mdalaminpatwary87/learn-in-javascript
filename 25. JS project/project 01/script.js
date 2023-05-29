var totalElements = document.querySelectorAll('.slideshow-element'); 
console.log(totalElements)

var countElement = 1;
setInterval(()=>{
    countElement++;
    let currentSlider = document.querySelector('.current');
    currentSlider.classList.remove('current');

    if(countElement > totalElements.length){
        totalElements[0].classList.add('current')
        countElement = 1;
    }else{
        currentSlider.nextElementSibling.classList.add('current');
    }
},2000)