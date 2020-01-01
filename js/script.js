let slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot'),
    sliderIndex = 1;
    
showSlides(sliderIndex);

function showSlides(n){
    if (n > slides.length) {
        sliderIndex = 1; 
    }
    if (n < 1) {
        sliderIndex = slides.length;
    }
  
    slides.forEach(item => item.style.display = 'none');
    dots.forEach(item => item.classList.remove('dot-active'));

    slides[sliderIndex - 1].style.display = "block";
    dots[sliderIndex - 1].classList.add('dot-active');
}

function plusSlide(n){
    showSlides(sliderIndex += n);
}

function curSlide(n){
    showSlides(sliderIndex = n);
}

next.addEventListener('click', () => {
    plusSlide(1);
});

prev.addEventListener('click', () => {
    plusSlide(-1);
});
//делигирование
dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++){
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]){
            curSlide(i);
        }
    }
});