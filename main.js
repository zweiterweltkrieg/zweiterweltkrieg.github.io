var number = 0;
var x = document.getElementById("quelle");

function show() {
  
  if (number == 0) {
    x.style.display = "block";
    number++;
    document.getElementById("click").innerHTML = "Quellen verbergen";
  } 
  else if (number == 1){
    x.style.display = "none";
    number--;
    document.getElementById("click").innerHTML = "Quellen anzeigen";
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