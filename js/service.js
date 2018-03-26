$(function () {
  $("#service .img-list li").each(function () {
    var order = ['a','b','c','d','e','f'];
    var index = $(this).index();
    $(this).find('>img').attr('src','./imgs/service/icon-'+order[index]+'.png');
  });

  $("#service .img-list li").on('click',function () {
    var index = $(this).index();
    //小球
    var order = ['#afd5e7','#85c5d8','#5bb5d6','#509acc','#4683be','#2d528d'];
    $("#service .img-list li div").css('background','transparent');
    $(this).find('div').css('background',order[index]);
    //下方文字
    var text = [
      'Project Management',
      'Technology Package',
      'Equipmen',
      'Optimizaton & Improvement',
      'Commissioning',
      '24hr service'
    ];
    $('#service .reactive-title').text(text[index]);
  });
});