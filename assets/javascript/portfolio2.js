//Portfolio 2
var demoLink = "";


$(document).ready(function(){

    //Materialize Initializers and Options/Functions
    $('.sidenav').sidenav({
      isFixed: true
    });

    $('.fixed-action-btn').floatingActionButton({
      direction: "left"
    });

    $(".dropdown-trigger").dropdown({
      closeOnClick: true
    });

    $(".carousel").carousel();

    $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
      onCycleTo: function(ele) {
        //console log entire element and index of element
        console.log(ele);
        console.log($(ele).index());
        //assign demoLink
        demoLink = $("#" + ele.id).attr("href");
        console.log("element id: ", ele.id);
        $(".demoBtn").attr("href", demoLink);
        console.log("demo link: ", demoLink);

      }
    });
    $(".demoBtn").on("click", function() {
      console.log("you clicked me! My href is: ", demoLink);
    })

    // $(".demoBtn").on("click", function() {
    //   console.log("you clicked me! My href is: ", demoLink);
    // })
 
  });
  




  
  // $("$demo").on("click", function(){

  // };