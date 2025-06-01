const body = document.querySelector("body");

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg", "6.jpg"];

function paintImage(img){
    const image = new Image();
    image.src = `img/${img}`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function randomImg(){
    const number = images[Math.floor(Math.random() * images.length)];
    return number;
}

function init(){
    const randomNumber = randomImg();
    paintImage(randomNumber);
}

init();