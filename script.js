
// document.addEventListener('contextmenu', event => event.preventDefault());

function darkmode() {
    document.body.classList.toggle('darkmode');
    document.getElementsByClassName('darkmode-icon')[0].classList.toggle('fa-moon');
    document.getElementsByClassName('darkmode-icon')[0].classList.toggle('fa-sun');
}
