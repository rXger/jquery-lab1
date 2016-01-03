$(document).ready(function(){

});

function swapFunction(){
  var what = prompt("how many squares?");
  $('#wrapper').append(gridFunction((what)*(what)-1));
  var padnum = (400 / what);
  $('.grid').css('padding' , padnum);
  $('.grid').mouseover(function(){
  $(this).css('background-color' , 'blue')});
  $('.grid').mouseout(function(){
  $(this).css('background-color' , 'red')});

};

function gridFunction(num){
  var gridsquare = '<div class="grid"></div>';
  var grid ="";

  for( var i = 0; i <= num; i++){
    grid += gridsquare;
  };

document.getElementById('wrapper').innerHTML = grid;



};


