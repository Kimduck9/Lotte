$(document).ready(function(){
  //팝업
  $(".banner > div").click(function(){
    $(".pop_up").fadeIn(200)
  });
  $(".pop_up button").click(function(){
    $(".pop_up").fadeOut(200)
  })



  //f_site
  $(".f_site").click(function(){
    $(".f_site ul li").slideToggle(10);
    $(".f_site ul").toggleClass("height");
  });


  //sub_menu
  $(".nav > ul > li").mouseover(function(){
    $(".sub_menu").stop().slideDown(200)
    $("#navbg").stop().slideDown(200)
  });
  $(".nav > ul > li").mouseout(function(){
    $(".sub_menu").stop().slideUp(200)
    $("#navbg").stop().slideUp(200)
  });

  //main
  const main_BTN = $(".main_btn ul li")
  const main_TXT = $(".main_txt > div")
    main_TXT.hide().eq(0).show()
    main_BTN.click(function(e){
      e.preventDefault()
      let target = $(this)
      let index = target.index()
      console.log(index)
      main_BTN.removeClass("on")
      target.addClass("on")
      main_TXT.hide().eq(index).show()
    });

  //tab_menu
  const TAB_btn = $(".tab_btn ul li")
  const TAB_txt = $(".tab_txt > div")
    TAB_txt.hide().eq(0).show()
    TAB_btn.click(function(e){
      e.preventDefault();
      
      let target = $(this)
      let index = target.index()
      console.log(index)

      TAB_btn.removeClass("active")
      target.addClass("active")
      TAB_txt.hide().eq(index).show()
    });

  //slider_slick
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed:3000,
        arrows:true
      });
});