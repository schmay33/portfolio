const arrow = document.getElementById('down-arrow');
document.addEventListener('scroll', () => {
    let dataScroll = window.scrollY;
    if (dataScroll > 100) {
        arrow.classList.add('full');
    } else if (dataScroll < 60 && dataScroll > 10) {
        arrow.classList.remove('full');
        arrow.classList.add('half');
    } else if (dataScroll < 10) {
        arrow.classList.remove('full');
        arrow.classList.remove('half');
    }

    document.documentElement.dataset.scroll = dataScroll;
});