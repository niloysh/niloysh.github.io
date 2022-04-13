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

/* highlight current link in navbar */
const navItem = document.querySelectorAll('.navbar a');
navItem.forEach(el => {
    if (el.pathname === (location.pathname)) {
      el.classList.add("active")
    }
  })