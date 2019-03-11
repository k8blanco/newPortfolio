//Portfolio 2

//Initialize SideNav, Floating Action Button
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $(".dropdown-trigger").dropdown();
    
    $('.carousel').carousel({
      onCycleTo: function(data) {
        let demoLink = $("#" + data.id).attr("href");
        $("#demoBtn").attr("href", demoLink);
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