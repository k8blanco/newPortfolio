//Portfolio 2
var demoLink = "";

//Initialize SideNav, Floating Action Button
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $(".dropdown-trigger").dropdown();

    var instance = M.Carousel.getInstance(".carousel");


    $(".carousel").carousel({
      //On each new carousel item, 
      onCycleTo: function(data) {
        //assign demolink 
        demoLink = $("#" + data.id).attr("href");
        $("#demoBtn").attr("href", demoLink);
      }
    });

    $(".demoBtn").on("click", function() {
      console.log("you clicked me! My href is: ", demoLink);
    })
 
  });
  



  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
  
  // $("$demo").on("click", function(){

  // };