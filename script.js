var player1 = {
  mark: 'X',
  name: 'Player 1',
  style: 'player1_cell',
  score_el: 'player1_wins',
  wins: 0
};
var player2 = {
  mark: 'O',
  name: 'Player 2',
  style: 'player2_cell',
  score_el: 'player2_wins',
  wins: 0
};
var players = [player1, player2];
var current_player = 0;
var num_of_cols = num_of_rows = 3;

$(document).ready(function(){
  // $('td').hover(
  //   function(){
  //     $(this).append($("<span>X</span>"));
  //   }, function(){
  //     $(this).find("span:last").remove();
  //   }
  // );

  // $('td').click(function(){
  //   $(this).toggle();
  // })

  // got this to choose x and o
  // var x = false;
  // $('td').click(function(){
  //   if (!x){
  //     $(this).toggleClass('user1');
  //     x = true;
      
  //       $('body').append($("<p>Your turn O</p>"));
        
      
  //   } else {
  //     $(this).toggleClass('user2');
  //     x = false;
  //     $('body').append($("<p>Your turn X</p>"));
  //   }
  // });

  // $('button').click(function(){
  //   $('td').removeClass("user1 user2");
  // });

  //   var tableRows = $('table tbody tr')
  //   tableRows.each(function(n){
  //     if('td').has('.user1')
  //   });
  initialGame();
});

function initialGame(){
  $("#game_board").empty();
  for (var i=0; i<num_of_cols*num_of_rows; i++){
    var cell = $('<div></div>')
      .addClass('cell')
      .appendTo("#game_board");
    if (i % num_of_cols === 0){
      cell.before('<div class="clear"></div>');
    };
  };

  $('#game_board .cell')
    .bind("click", playMove)
    .bind("mouseover", hoverCell)
    .bind("mouseout", leaveCell);

  initialTurn(current_player);
};

function playMove(ev){
  var cell = $(this);
  cell
    .addClass(players[current_player].style)
    .addClass("marked")
    .text(players[current_player].mark)
    .trigger("mouseout")
    .unbind("click mouseover mouseout");

  if ( !checkAndProcessWin() ){
    current_player = (++current_player) % players.length;
    initialTurn(current_player);
  };
  return false;
};

function initialTurn(){
  $('#player_name').text(players[current_player].name);
  $('#player_mark').text(players[current_player].mark);
};

function hoverCell(ev){
  $(this).addClass("hover");
  return false;
};

function leaveCell(ev){
  $(this).removeClass("hover");
  return false;
};

function checkAndProcessWin(){
 
}

