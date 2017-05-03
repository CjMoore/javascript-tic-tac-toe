var counter = 0
var allX = []
var allO = []

function makeMove(){
  if(this.innerHTML == ""){
    if(counter % 2 ==0) {
      $(this).append("<img class = 'x' src= 'http://www.dreamincode.net/forums/uploads/post-97990-1260678617.png'>")
      counter++
      window.setTimeout(gameOver, 2000)
    } else if (counter % 2 != 0) {
      $(this).append("<img class = 'o' src= 'https://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png'>")
      counter++
      window.setTimeout(gameOver, 2000)
    }
  } else {
    alert("Wrong, Try Again")
    }
  }

  function checkWin(array) {

  }

  function gameOver(){
    if(counter == 9) {
      alert("Game Over")
      counter = 0
      location.reload(true);
    }
  }


$(document).ready(function(){
  $("#one").on('click', makeMove)
  $("#two").on('click', makeMove)
  $("#three").on('click', makeMove)
  $(".four").on('click', makeMove)
  $("#five").on('click', makeMove)
  $("#six").on('click', makeMove)
  $("#seven").on('click', makeMove)
  $("#eight").on('click', makeMove)
  $("#nine").on('click', makeMove)
});
