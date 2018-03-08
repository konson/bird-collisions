// Show and hide hamburger menu

$('.menu-btn').on('click', function() {
    $(this).hide(); // hide the menu
    $('.exit-btn').show();
    $('.main-nav').show();
});

$(".exit-btn").click(function() {
  $(this).hide();
  $('.menu-btn').show();
  $(".main-nav").hide();
});
