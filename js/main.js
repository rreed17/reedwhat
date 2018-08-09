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
