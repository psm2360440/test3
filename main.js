let imageIndex = 0;
let postion = 0;
const IMAGE_WIDTH = 470;
const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".feed1_image")

function prev(){
  if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    imageIndex = imageIndex -1;
  }
  if(imageIndex == 0){
    btnPrevious.setAttribute('disabled', 'true')
  }
}
function next(){
    if(imageIndex < 2){
      btnPrevious.removeAttribute("disabled")
      postion -= IMAGE_WIDTH;
      images.style.transform = `translateX(${postion}px)`;
      imageIndex = imageIndex + 1;
    }
    if(imageIndex == 2){
      btnNext.setAttribute('disabled', 'true')
    }
}

function init(){
  btnPrevious.setAttribute('disabled', 'true')
  btnPrevious.addEventListener("click", prev)
  btnNext.addEventListener("click", next)
}

init();