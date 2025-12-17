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

