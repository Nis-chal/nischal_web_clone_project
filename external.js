var playicon = document.querySelector(".fa-play")
var modalClose = document.querySelector('.modal-close');
var modalBg =  document.querySelector('.modal-bg');

playicon.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
})

modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');

})