document.querySelectorAll(".star").forEach(star => {
    star.style.top = Math.floor(Math.random()*innerHeight/2)+ "px";
    star.style.left = Math.floor(Math.random()*innerWidth)+ "px";
});