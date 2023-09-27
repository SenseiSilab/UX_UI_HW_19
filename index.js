console.log("Your index.js file is loaded correctly!");

/*translate image and introduction statement into frame 
when user lands on the homepage*/


/*fade in for project cards*/
$(document).ready(function(){
    $("button.projecsButton").click(function(){
      $(".caseStudy1").fadeIn();
      $(".caseStudy2").fadeIn("slow");
      $(".caseStudy3").fadeIn(3000);
    });
  });

