//constants
const title = document.getElementById("title");
const header = document.getElementById("scroll-header");
//click on title
title.addEventListener("click", ()=>{
  changeColor()
});
const changeColor = ()=>{
  const randomClr = Math.floor(Math.random()*16777215).toString(16);
  if(randomClr === "ffffff"){
    title.style.color = "#000";
  }else{
    title.style.color = `#${randomClr}`;
  }
}
changeColor();
//toggle boders of header on scroll
window.onscroll = ()=> toggleHeaderBorder();
function toggleHeaderBorder() {
if (window.pageYOffset >= 90) {
  header.classList.add("header-scroll");
} else{
    header.classList.remove("header-scroll");
}
}
