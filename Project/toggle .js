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
