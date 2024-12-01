const slides=["image/conception-billets-invitation-iftar_605397-186.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg"];
let currenstSlide = 0;
// fonction pour changer l'image
function changeSlide(){
    const slideshow = document.querySelector(".slideshow");
    slideshow.computedStyleMap.backgroundImage = 'url(${slides[currentSlide]})';
    currenstSlide= (currenstSlide+1)% slides.length;
}
//lancement automatique du diaporama toutes les 5s
setInterval(changeSlide,5000);
// changer la premiere image image au debut
document.addEventListener("DOMContentLoaded", changeSlide);