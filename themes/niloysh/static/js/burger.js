const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.sidebar-content')
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        sideBar.setAttribute('data-visible', true);
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        sideBar.setAttribute('data-visible', false);
    }
})