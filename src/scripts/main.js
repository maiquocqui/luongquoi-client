$(document).ready(function () {
  $('.page-name').text($('.breadcrumb').children('li:nth-child(2)').text())

  $('.btn-showmenu').click(() => {
    $('.btn-showmenu').toggleClass('invert');
    $('.menu').toggleClass('open');
    $('.overlay').fadeToggle(500);
  })
  $('.overlay').click(function () {
    $('.menu').removeClass('open')
    $('.btn-showmenu').removeClass('invert')
    $('.overlay').fadeOut(500)
  })

  $('.cert-slide').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  })

  $('.staff-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false,
  })
  for (let i = 2; i <= 4; i++) {
    $('.home-product .tab-content .tab-pane:nth-child(' + i + ')').attr('id', 'tab' + i.toString()).removeClass('show').removeClass('active')
    console.log(i)
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    //clearHeader, not clearheader - caps H
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
})
