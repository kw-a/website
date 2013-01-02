$(function(){
   // Startups list
   $(".itemslist.startups a").live("click", function(){
      var result = $(this).parent().attr("class"),
          pos = $(".large .list ."+result).offset().top,
          currentpos = $(window).scrollTop();
      
      $(".large .list .result").removeClass("active");
      $(".large .list ."+result).addClass("active");
      $(".itemslist.startups li").removeClass("active");
      $(this).parent().addClass("active");
      
      $("html, body").animate({scrollTop:pos-25}, 500);
      
      return false;
   });
      // Center image
      $(".list .result img").each(function(){
         var enterpriseimgwidth = $(this).width(),
             enterpriseimgheight = $(this).height();
         $(this).addClass("js");
         $(this).css({marginTop:"-"+enterpriseimgheight/2+"px", marginLeft:"-"+enterpriseimgwidth/2+"px"});
      });
   
});