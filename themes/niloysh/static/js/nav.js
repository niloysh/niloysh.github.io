const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.sidebar')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        sideBar.setAttribute('data-visible', true);
        document.body.classList.add('disable-scroll');
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        sideBar.setAttribute('data-visible', false);
        document.body.classList.remove('disable-scroll');
    }
})

var sidebarProfileContent = document.querySelector('.sidebar__profile');
var profileContent = document.querySelector('.profile');


document.addEventListener("DOMContentLoaded", () => {
    profileContent.innerHTML = sidebarProfileContent.innerHTML;
    
})