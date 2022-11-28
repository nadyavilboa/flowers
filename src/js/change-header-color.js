const header = document.querySelector('.page-header');

const changeHeaderColor = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    scrolled > header.offsetHeight ? header.classList.add('page-header-scroll') : header.classList.remove('page-header-scroll');
}

export { changeHeaderColor }