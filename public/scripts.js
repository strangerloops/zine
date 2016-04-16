$(function(){

  var current_page = 0;
  var zineview = $("#zine-view");

  zineview.click(function(e){
    current_page++;
    zineview.removeClass("zine-cover");
    zineview.attr("src", "pages/zine" + current_page +  ".jpg");
  });
});