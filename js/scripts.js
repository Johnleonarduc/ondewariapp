let menuBtn = document.getElementById('navicon');
let menuIcon = menuBtn.firstChild.nextSibling;
let menuList = document.getElementById('primaryNav');
let clickCount = 0;
console.log(menuIcon.classList.contains("fa-bars"));

menuBtn.addEventListener('click', function(e){
    clickCount +=1;
    menuList.classList.toggle("closed");
    if(clickCount === 1){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    }
    else{
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
        clickCount = 0;
    }

    e.stopPropagation;
});