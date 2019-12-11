$(function(){

  $('.a-main').fadeOut(3000);
  $('.a-main').fadeIn(3000);
  
})

$(function(){

$(".js-hamburger").on("click", function() {
  $(this).toggleClass("on");
  $('.a-menu').toggleClass("in", 1000);
})

});