const video = document.getElementById("video");
const playBtn = document.querySelector(".modal-buttons .btn-light");
const modalButtons = document.querySelector(".modal-buttons");
playBtn.addEventListener("click", ()=>{
    video.controls = true;
    video.play();
    if(video.requestFullscreen){
        video.requestFullscreen();
    }else if(video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();
    }
    modalButtons.style.display = "none";
});

document.querySelectorAll('.slider-wrapper').forEach(wrapper => {

  const track = wrapper.querySelector('.slider-track');
  const cards = track.querySelectorAll('.card');
  const leftBtn = wrapper.querySelector('.arrow-left');
  const rightBtn = wrapper.querySelector('.arrow-right');

  const cardsPerSlide = 5;
  let currentSlide = 0;

  const cardWidth = cards[0].offsetWidth + 12;
  const maxSlide = Math.ceil(cards.length / cardsPerSlide) - 1;

  function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * cardsPerSlide * cardWidth}px)`;
  }

  rightBtn.addEventListener('click', () => {
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateSlider();
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

});

