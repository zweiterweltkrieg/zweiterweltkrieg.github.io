function show() {
  var x = document.getElementById("quelle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Autoscroll in jQuery #Anfang
jQuery(function($)
{
$.scrollTo(0);
$('#link1').click(function(){
    $.scrollTo($('#klik1'), 500);
});});

jQuery(function($)
{
$.scrollTo(0);
$('#link2').click(function(){
    $.scrollTo($('#klik2'), 500);
});});

jQuery(function($)
{
$.scrollTo(0);
$('#link3').click(function(){
    $.scrollTo($('#klik3'), 500);
});});
//Autoscroll in jQuery #Ende