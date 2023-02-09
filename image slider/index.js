const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");
const imageContainerEl=document.querySelector(".image-container");
const imgsEl=document.querySelectorAll("img");

let currentImage=1;
let timeOut;

nextEl.addEventListener("click",()=>{
    currentImage++;
    clearTimeout(timeOut);
    updateImage();
})

prevEl.addEventListener("click",()=>{
    currentImage--;
    clearTimeout(timeOut);
    updateImage();
})

updateImage();

function updateImage(){
    if(currentImage>imgsEl.length)
    {
        currentImage=1;
    }else if(currentImage<1)
    {
        currentImage=imgsEl.length;
    }
imageContainerEl.style.transform=`translateX(-${(currentImage-1)*500}px)`;

timeOut=setTimeout(()=>{
currentImage++;
updateImage();
},2500);
}