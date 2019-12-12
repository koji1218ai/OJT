$(function(){

  $('#fadeToggle').children('img').css({ opacity: '0'});
  $('#fadeToggle img:first').stop().animate({ opacity: '1' }, 2000);
  setInterval(function(){
    $('#fadeToggle :first-child').animate({opacity:'0'},2000).next('img').animate({opacity:'1'},3000).end().appendTo('#fadeToggle');
},7000);
  
})

$(function(){

$(".js-hamburger").on("click", function() {
  $(this).toggleClass("on");
  $('.a-menu').toggleClass("in", 1000);
})

});