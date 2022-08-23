// let us write our javascript to close and open the navmenu



let btnOpen=document.querySelector('.btn-open');
let btnClose=document.querySelector('.btn-close');
let navItems=document.querySelector('.nav_items');



btnOpen.addEventListener('click', ()=>{
navItems.style.display="block";
btnClose.style.display="flex"
btnOpen.style.display='none'
})


function close(){

    navItems.style.display="none";
btnOpen.style.display="flex"
btnClose.style.display='none'
}


btnClose.addEventListener('click', close);


// swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 3,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // let us set our breakpoints

  breakpoints:{
    // when windows width is >=600
    600:{
      slidesPerView:2
    },

    1024: {
slidesPerView:3
    }
  }
});