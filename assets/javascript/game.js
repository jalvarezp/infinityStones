/*
1) Se asigna aleatoriamente un numero al jugador
2) Se muestras 6 gemas con valor desconocido aleatorios pero al ser iniciado el juego quedan fijos.
3) El jugador cada vez que selecciona una gema,  se le muestra el valor, para que realice el calculo de su avance en el score.
4) El jugador gana la partida si empata con el numero aleatorio inicial.

create var playerRandomNum

*/

$(document).ready(function() {

  //Global variables
  var stoneRanVal1;
  var stoneRanVal2;
  var stoneRanVal3;
  var stoneRanVal4;
  var stoneRanVal5;
  var stoneRanVal6;

  var goalRanVal;

  var currentUserVal;

  var userWins = 0;
  var userLosses = 0;
  $("#wins").text(userWins);
  $("#losses").text(userLosses);

  //GAME BEGINS ! ! ! ! 
  assignRanVal();

  //Function created to reset the stone's values after they're run once
  function assignRanVal() {
    //Number to reach without passing
    goalRanVal = Math.floor(Math.random() * 111 + 19);
    //Stone's current value
    stoneRanVal1 = Math.floor(Math.random() * 12 + 1);
    stoneRanVal2 = Math.floor(Math.random() * 12 + 1);
    stoneRanVal3 = Math.floor(Math.random() * 12 + 1);
    stoneRanVal4 = Math.floor(Math.random() * 12 + 1);
    stoneRanVal5 = Math.floor(Math.random() * 12 + 1);
    stoneRanVal6 = Math.floor(Math.random() * 12 + 1);
    //user's current clicks
    currentUserVal = 0;
    $("#target").text(goalRanVal);
    $("#score").text(currentUserVal);
  }

  //Function to call when user wins
  function woohoo() {
    alert("Congrats! You won!");
    userWins++;
    $("#wins").text(userWins);
    assignRanVal();
  }

  //Function to call when user loses
  function loser() {
    alert("Sorry! You lose!");
    userLosses++;
    $("#losses").text(userLosses);
    assignRanVal()
  }

  $("#stone1").on("click", ".image1", function() {
    currentUserVal += stoneRanVal1;
    $("#score").text(currentUserVal); 
        if (currentUserVal == goalRanVal){
          woohoo();
        }
        else if ( currentUserVal > goalRanVal){
          loser();
        }   
  });

  $("#stone2").on ("click", ".image2", function() {
    currentUserVal += stoneRanVal2;
    $("#score").text(currentUserVal); 
    if (currentUserVal == goalRanVal){
      woohoo();
    }
    else if ( currentUserVal > goalRanVal){
      loser();
    }   
  });

  $("#stone3").on ("click", ".image3", function() {
    currentUserVal += stoneRanVal3;
    $("#score").text(currentUserVal);

    if (currentUserVal == goalRanVal){
      woohoo();
    }
    else if ( currentUserVal > goalRanVal){
      loser();
    }   
  });

  $("#stone4").on ("click", ".image4", function() {
    currentUserVal += stoneRanVal4;
    $("#score").text(currentUserVal);

    if (currentUserVal == goalRanVal){
      woohoo();
    }
    else if ( currentUserVal > goalRanVal){
      loser();
    }   
  });

  $("#stone5").on ("click", ".image5", function() {
    currentUserVal += stoneRanVal5;
    $("#score").text(currentUserVal);

    if (currentUserVal == goalRanVal){
      woohoo();
    }
    else if ( currentUserVal > goalRanVal){
      loser();
    }   
  });

  $("#stone6").on ("click", ".image6", function() {
    currentUserVal += stoneRanVal6;
    $("#score").text(currentUserVal); 
      
    if (currentUserVal == goalRanVal){
      woohoo();
    }
    else if ( currentUserVal > goalRanVal){
      loser();
    }   
  });   
}); 