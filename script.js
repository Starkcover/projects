

$(".box").click(function(){
    $(this).addClass("active").delay(1000).queue(function(next){
      $(this).removeClass("active");
      next();
    });
  });
  
  

$(".reset").click(function(){
  $(this).addClass("active").delay(1000).queue(function(next){
    location.reload();
    $(this).removeClass("active");
    next();
  });
});

