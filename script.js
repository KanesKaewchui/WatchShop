var black = document.getElementById("Black");
var orange = document.getElementById("Orange")
var purple = document.getElementById("Purple")
var pink = document.getElementById("Pink")
var watchimage = document.getElementById("watch")

black.addEventListener('click',function(){
    watchimage.src = "./png/black-watch.png";
    watchimage.alt = "smart-watch-black";
});

orange.addEventListener('click',function(){
    watchimage.src = "./png/orenge-watch.png";
    watchimage.alt = "smart-watch-orenge";
})

purple.addEventListener('click',function(){
    watchimage.src = "./png/purple-watch.png";
    watchimage.alt = "smart-watch-purple";
})

pink.addEventListener('click',function(){
    watchimage.src = "./png/pink-watch.png";
    watchimage.alt = "smart-watch-pink";
})