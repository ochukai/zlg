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


//

  if(BaiduMap) {

    var map = new BaiduMap({
      id: "container3",
      level: 16, //  选填--地图级别--(默认15)
      zoom: true, // 选填--是否启用鼠标滚轮缩放功能--(默认false)
      type: [ "地图", "卫星", "三维" ], // 选填--显示地图类型--(默认不显示)
      width: 320, // 选填--信息窗口width--(默认自动调整)
      height: 70, // 选填--信息窗口height--(默认自动调整)
      titleClass: "title",
      contentClass: "content",
      showPanorama: true, // 是否显示全景控件(默认false)
      showMarkPanorama: true, // 是否显示标注点全景图(默认false)
      showLabel: false, // 是否显示文本标注(默认false)
      mapStyle: "normal", // 默认normal,可选dark,light
      icon: { // 选填--自定义icon图标
        url: "img/marker2.png",
        width: 34,
        height: 94
      },
      centerPoint: { // 中心点经纬度
        lng: 118.106586,
        lat: 24.467207
      },
      index: 3, // 开启对应的信息窗口，默认-1不开启
      animate: true, // 是否开启坠落动画，默认false
      points: {
        lng: "116°23′",
        lat: "39°54′"
      }, // 标注点--id(唯一标识)
      callback: function (id) { // 点击标注点回调
        $(".list").find("li").eq(id - 1).addClass("active").siblings().removeClass("active");
      }
    });
  }
});