console.log("Your index.js file is loaded correctly!");

/*jquery fcn for "on click" event listener*/
$(".primary-button").on("click", function( event ) {
  $(event.delegateTarget).css("background-color", "#DE4200");
});

$(".secondary-button").on("click", function( event ) {
  $(event.delegateTarget).css("background-color", "#DE4200");
});

/*jquery fcn for "on hover" event listener*/
$(".primary-button").on("mouseover", function() {
  $(this).css("background-color", "#DE4200");
});

$(".secondary-button").on("mouseover", function() {
  $(this).css("background-color", "#DE4200");
});


/* These are notes for me*/ 

/*change button color on click using vanilla js
function changeColor() {
  document.getElementById('seeMyresume').style.color = "#DE4200";
}*/

/*jQuery 
$('#').click(function( {
  $('#name').css("color", "#DE4200")
}));*/

/*fade in for project cards
$(document).ready(function(){
    $("button.projecsButton").click(function(){
      $(".caseStudy1").fadeIn();
      $(".caseStudy2").fadeIn("slow");
      $(".caseStudy3").fadeIn(3000);
    });
  });*/

/*copying your email address to clipboard
function copyToClipboard() {
  document.getElementById('myEmail').select();
  document.execCommand("Copy");
  alert("Copied the text: emailAddress@gmail.com");
}*/