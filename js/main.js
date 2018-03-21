$(function () {

  $('.main-menus')
    .on('mouseenter', '.hover-menu', function (e) {
      var $li = $(this);
      $li.find('.hover-menus-wrapper').slideDown();
    })
    .on('mouseleave', '.hover-menu', function (e) {
      var $li = $(this);
      $li.find('.hover-menus-wrapper').slideUp();
    });

});