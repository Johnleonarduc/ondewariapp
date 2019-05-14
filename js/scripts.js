let menuBtn = document.getElementById('navicon');
let menuIcon = menuBtn.firstChild.nextSibling;
let menuList = document.getElementById('primaryNav');
let clickCount = 0;

menuBtn.addEventListener('click', function(e){
    clickCount +=1;
    if(clickCount === 1){
        menuIcon.className = "fas fa-times";
        menuList.className = "open";
    }
    else{
        menuIcon.className = "fas fa-bars";
        menuList.className = "closed";
        clickCount = 0;
    }

    e.stopPropagation;
});