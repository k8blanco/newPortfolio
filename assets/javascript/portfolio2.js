//Portfolio 2

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
        let demoLink = $("#" + data.id).attr("href");
          if (this.pressed) {
            console.log("tapped!");
            // location.href === demoLink;
          };
        // $("#demoBtn").attr("href", demoLink);
        console.log();
      }
    });
  });
  



  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
  
  // $("$demo").on("click", function(){

  // };