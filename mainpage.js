function DropDown(){
    var rightNavBav = document.getElementById('right-navBav');
    rightNavBav.classList.toggle('drop');
}
function onOFFLogin(event){
    document.getElementById('loginPortal-container').classList.toggle('show');
    console.log(event);
}
