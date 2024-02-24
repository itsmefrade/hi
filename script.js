document.addEventListener('DOMContentLoaded', function() {

const button = document.getElementById('blueButton');


button.addEventListener('click', function() {
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;
    
    const randomLeft = parseInt(Math.random() * maxWidth);
    const randomTop = parseInt(Math.random() * maxHeight);
    
    button.style.margin = `${randomTop}px ${randomLeft}px`;
 
    //button.style.margin =  `${parseInt(Math.random() * 800)}px ${parseInt(Math.random() * 500)}px`;
});


})