$(document).ready(function(){
  // $('.slider-list').slick({
  //   arrow:true,
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });
  $('#button').on('click', function (){
    $('.list-wrap').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function() {
  document.querySelector('#triger').onclick = function(){
    document.querySelector('#header').scrollIntoView();
  }
})