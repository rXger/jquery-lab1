$(document).ready(function(){

});

function swapFunction(){
  var what = prompt("how many squares?");
  $('#wrapper').append(gridFunction((what)*(what)-1));
  var padnum = (400 / what);
  $('.grid').css('padding' , padnum);
  $('.grid').mouseover(function(){
        var opacityNow = $(this).css('opacity');
        if(opacityNow > 0 ){
          $(this).css("opacity", opacityNow - 0.1);
        }

      });


};

function gridFunction(num){
  var gridsquare = '<div class="grid"></div>';
  var grid ="";

  for( var i = 0; i <= num; i++){
    grid += gridsquare;
  };

document.getElementById('wrapper').innerHTML = grid;



};


