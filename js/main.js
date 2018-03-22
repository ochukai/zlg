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


  /**
   * 设置 service 垂直剧中显示
   */
  function setServiceItemsPositioin() {
    var $serviceList = $('.service-list');
    var height = $serviceList.height();

    var $abContentWrapper = $('.ab-content-wrapper');
    var abHeight = $abContentWrapper.find('.container').height();

    var gap = (height - abHeight) / 2;
    $abContentWrapper.css({top: gap});
  }

  setServiceItemsPositioin();

  /**
   * 每次窗口大小改变
   */
  $(window).resize(function () {
    console.log('resize');
    setServiceItemsPositioin();
  })

});