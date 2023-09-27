console.log("Your index.js file is loaded correctly!");

/*change button color on click*/
function changeColor() {
  document.getElementById('seeMyresume').style.color = "#DE4200";
}

/*jQuery*/ 
$('#').click(function( {
  $('#name').css("color", "#DE4200")
}));


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

/*copying your email address to clipboard*/
function copyToClipboard() {
  document.getElementById('myEmail').select();
  document.execCommand("Copy");
  alert("Copied the text: emailAddress@gmail.com");
}