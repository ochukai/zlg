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
    $abContentWrapper.css({ top: gap });
  }

  setServiceItemsPositioin();

  /**
   * 每次窗口大小改变
   */
  $(window).resize(function () {
    console.log('resize');
    setServiceItemsPositioin();
  });

  /**
   * 语言选择
   */
  function changeArrow() {
    var src = $('.arrow-img').eq(0).attr('src');
    if (src === 'imgs/home/cc.png') {
      $('.arrow-img').eq(0).attr('src', 'imgs/home/ccc.png');
    } else {
      $('.arrow-img').eq(0).attr('src', 'imgs/home/cc.png');
    }
  }

  $('.menu-search-row .dropdown-toggle').on('click', changeArrow);

  $('.dropdown li').on('click', function () {
    var html = $(this).html();
    $('.header-container .dropdown-toggle span').html(html);
    changeArrow();
  });

  
//  landing pic change
  $('.carousel').carousel({
    interval: 5000
  });
  
  $('.landing-pic .small-bar').on('click', function () {
    console.log('next picture');
    $('.carousel').carousel('next');
  })
});