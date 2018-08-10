$(document).ready(function(){
  $('.menu').click(function(){
    $(this).siblings().removeClass('active-sub-menu');
    $('ul').toggleClass('active-sub-menu')
  })
  $('ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  })
})

//Top 50 Covers img_gallery
//Top 50 Covers Left Gallery VARIABLES
const currentL = document.querySelector('#TopCoversCurrentImgL');
const imgsL = document.querySelectorAll('.top-covers-imgs-l img');
//Top 50 Covers Middle Gallery VARIABLES
const currentM = document.querySelector('#TopCoversCurrentImgM');
const imgsM = document.querySelectorAll('.top-covers-imgs-m img');
//Top 50 Covers Right Gallery VARIABLES
const currentR = document.querySelector('#TopCoversCurrentImgR');
const imgsR = document.querySelectorAll('.top-covers-imgs-r img');

const opacity = 0.4;

imgsL.forEach(img => img.addEventListener('click',
imgClick));
imgsM.forEach(img => img.addEventListener('click',
imgClickMid));
imgsR.forEach(img => img.addEventListener('click',
imgClickRight));


function imgClick(e){
  //Reset the opacity
  imgsL.forEach(img => (img.style.opacity =1));
  //change current left image to src of clicked left ten covers
  currentL.src = e.target.src;
  //Add tcFadeIn animation class to selected current Left covers
  currentL.classList.add('top-covers-fade-in');
  //Remove tcFadeIn animation class
  setTimeout(() => currentL.classList.remove('top-covers-fade-in'),500);
//Change the opacity to opacity Variable
  e.target.style.opacity = opacity;
}
//Middle Gallery function for selecting image
function imgClickMid(e){
  //Reset the opacity
  imgsM.forEach(img => (img.style.opacity =1));
  //change current left image to src of clicked left ten covers
  currentM.src = e.target.src;
  //Add tcFadeIn animation class to selected current Left covers
  currentM.classList.add('top-covers-fade-in');
  //Remove tcFadeIn animation class
  setTimeout(() => currentM.classList.remove('top-covers-fade-in'),500);
//Change the opacity to opacity Variable
  e.target.style.opacity = opacity;
}
//Right Gallery function for selecting image
function imgClickRight(e){
  //Reset the opacity
  imgsR.forEach(img => (img.style.opacity =1));
  //change current left image to src of clicked left ten covers
  currentR.src = e.target.src;
  //Add tcFadeIn animation class to selected current Left covers
  currentR.classList.add('top-covers-fade-in');
  //Remove tcFadeIn animation class
  setTimeout(() => currentR.classList.remove('top-covers-fade-in'),500);
//Change the opacity to opacity Variable
  e.target.style.opacity = opacity;
}
