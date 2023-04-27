function clickMenu() {
    if(menuMobile.style.display == 'block') {
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'block';
    }
}

function mudouTamanho() {
    if(window.innerWidth >= 768) {
        menuMobile.style.display = 'none';
    } else {
        menuMobile.style.display = 'display';
    }
}








