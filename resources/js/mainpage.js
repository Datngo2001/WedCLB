function DropDown() {
    var rightNavBav = document.getElementById('right-navBav');
    rightNavBav.classList.toggle('drop');
}
function onOFFLogin() {
    document.getElementById('loginPortal-container').classList.toggle('show');
}

var navBarPosition_old;
function activeNavBarWhenScrollUp() {
    var navbar = document.getElementById('navBar');
    var navBarPlaceHolder = document.getElementById('navBarPlaceHolder');
    var navBarPosition_new = navBarPlaceHolder.getBoundingClientRect().top;
    //navBarPosition_new and navBarPosition_old are negative
    if (navBarPosition_new > navBarPosition_old) {
        navbar.classList.remove('scrollDownDisappear');
    } else {
        navbar.classList.add('scrollDownDisappear');
    }
    navBarPosition_old = navBarPosition_new;
}
document.addEventListener('scroll', activeNavBarWhenScrollUp);
