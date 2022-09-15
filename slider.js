const images=[
    "players/player-1.png",
    "players/player-2.png",
    "players/player-3.png",
    "players/player-4.png",
    "players/player-5.png",
    "players/player-6.png",
];
let imageIndex=0; 

const image=document.getElementById("carousel-img");

setInterval( () => {
    if(imageIndex===images.length){
        imageIndex=0;
    }
    const imgLink= images[imageIndex];
    image.setAttribute('src',imgLink);
    imageIndex++;
},1000);