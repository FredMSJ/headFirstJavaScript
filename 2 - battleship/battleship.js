var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6) :");

  if (guess < 0 || guess > 6) {
    alert("Please enter a number between 0 and 6!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits = hits + 1;
    }
  }
}

//adicionado validacao do palpite.
//adicionado incremento a variavel "hits" se o palpite for correto.
//continuar na pagina 56
