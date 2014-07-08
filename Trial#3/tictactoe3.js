var playerX = "X";
var playerO = "O";
var turn = 0;
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

var xWin = false;
var oWin = false;

$(document).ready(function() {
  newGame();
});

function newGame() {
  $('td').on({
    mouseover: function(){
      $(this).css("background-color", "gray");
    },
    mouseleave: function(){
      $(this).css("background-color", "white");
    },
    click: function(event) {
    if (turn === 0) {
      $(this).text(playerX).off('click');
      checkBoard();
      checkWin();
      clearBoard();
      turn = 1;
    } else {
      $(this).text(playerO).off('click');
      checkBoard();
      checkWin();
      clearBoard();
      turn = 0;
    }
      $(this).off('mouseover');
    }
  });
}

function checkBoard() {
  a1 = $('#a1').html();
  a2 = $('#a2').html();
  a3 = $('#a3').html();
  b1 = $('#b1').html();
  b2 = $('#b2').html();
  b3 = $('#b3').html();
  c1 = $('#c1').html();
  c2 = $('#c2').html();
  c3 = $('#c3').html();
}

function checkWin() {
  if ((a1 == a2 && a1 == a3 && (a1 == "X")) ||
      (b1 == b2 && b1 == b3 && (b1 == "X")) ||
      (c1 == c2 && c1 == c3 && (c1 == "X")) ||
      (a1 == b1 && a1 == c1 && (a1 == "X")) ||
      (a2 == b2 && a2 == c2 && (a2 == "X")) ||
      (a3 == b3 && a3 == c3 && (a3 == "X")) ||
      (a1 == b2 && a1 == c3 && (a1 == "X")) ||
      (a3 == b2 && a3 == c1 && (a3 == "X"))
  ) {
    xWin = true;
    alert("X Wins!");
  } else if ((a1 == a2 && a1 == a3 && (a1 == "O")) ||
      (b1 == b2 && b1 == b3 && (b1 == "O")) ||
      (c1 == c2 && c1 == c3 && (c1 == "O")) ||
      (a1 == b1 && a1 == c1 && (a1 == "O")) ||
      (a2 == b2 && a2 == c2 && (a2 == "O")) ||
      (a3 == b3 && a3 == c3 && (a3 == "O")) ||
      (a1 == b2 && a1 == c3 && (a1 == "O")) ||
      (a3 == b2 && a3 == c1 && (a3 == "O"))
    ) {
      oWin = true;
      alert("O Wins!");
  } else if (((a1 == "X") || (a1 == "O")) &&
      ((a2 == "X") || (a2 == "O")) &&
      ((a3 == "X") || (a3 == "O")) &&
      ((b1 == "X") || (b1 == "O")) &&
      ((b2 == "X") || (b2 == "O")) &&
      ((b3 == "X") || (b3 == "O")) &&
      ((c1 == "X") || (c1 == "O")) &&
      ((c2 == "X") || (c2 == "O")) &&
      ((c3 == "X") || (c3 == "O"))
    ) {
      alert("It's a tie!");
    }
}

function clearBoard(){
  $('#restart').click(function(){
    $('td').empty();
  });
}