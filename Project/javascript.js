
const listbar = document.querySelector(".listbar");
const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeMenu");

function openMenu() {
    listbar.classList.add("open");      
    menuBtn.style.display = "none";     
    closeBtn.style.display = "block";    
}

function closeMenu() {
    listbar.classList.remove("open");   
    menuBtn.style.display = "block";     
    closeBtn.style.display = "none";    
}


const slides = document.querySelectorAll('.slide');
const video = document.getElementById('sliderVideo');
const muteBtn = document.getElementById('muteBtn');
let currentIndex = 0;
let scrollTimer;


video.muted = true;
video.play();


function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');

  currentIndex = i;

  if (slides[i].contains(video)) {
   
    video.play();
  } else {
    video.pause();
  }
}


document.querySelector('.next').addEventListener('click', () => {
  let i = (currentIndex + 1) % slides.length;
  showSlide(i);
});


document.querySelector('.prev').addEventListener('click', () => {
  let i = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(i);
});


muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});


window.addEventListener('scroll', () => {
  if (!slides[currentIndex].contains(video)) return;

  video.pause();

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
   
    if (slides[currentIndex].contains(video)) {
      video.play();
    }
  }, 250);
});
