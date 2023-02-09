const imageContainerEl=document.querySelector(".image-container");

const btnEl=document.querySelector(".btn");

btnEl.addEventListener("click",()=>{
addNewImages();
});

function addNewImages(){
   for (let index = 0; index < 4; index++) {
    const newImg=document.createElement("img");
    newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEl.appendChild(newImg);
    
   }
}