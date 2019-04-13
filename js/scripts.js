let menuBtn = document.getElementById('navicon');
let menuList = document.getElementById('primaryNav');
menuBtn.addEventListener('click', function(e){
    menuList.classList.toggle("closed");
    e.stopPropagation;
});
