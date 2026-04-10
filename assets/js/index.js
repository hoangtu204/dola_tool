
$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'slide',     // mặc định
    autoplay: true,
    effect: "fade",
fadeEffect: {
  crossFade: true
}
});
var swiper_header_bot = new swiper_header_bot(".mySwiper_header_bot", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        slidesPerView:7,
      },
    });
})
let targetDate = new Date("May 31, 2026 23:59:59").getTime();


setInterval(function(){

  let now = new Date().getTime();
  let distance = targetDate - now;
  
  let days = Math.floor(distance / (1000*60*60*24));
  let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  let seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);



   

