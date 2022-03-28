const swiper = new Swiper('.swiper-container', { 
  direction: 'horizontal', 
  slidesPerView: 1, 
  spaceBetween: 1000, 
  debugger: true, 
  mousewheel: false, 
  loop: true,  
  centeredSlides: true,   

  autoplay: { 
    delay: 3000,
    disableOnInteraction: false,
  }, 

  pagination: {  
    el: '.swiper-pagination',  
    clickable: true, 
  }, 

  navigation: { 
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev',
  } 
}); 

let acc = document.getElementsByClassName("accordion");
let i;
  
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} 
