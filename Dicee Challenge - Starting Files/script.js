let randomNumber1 = Math.floor(Math.round() * 6) + 1;

document.querySelector(".roll-button").addEventListener("click", function () {
    // Player 1'ın zarı
    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var diceImage1 = "dice" + randomNum1 + ".png";
    document.querySelector(".img1").setAttribute("src", "./images/" + diceImage1);
  
    // Player 2'nin zarı
    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var diceImage2 = "dice" + randomNum2 + ".png";
    document.querySelector(".img2").setAttribute("src", "./images/" + diceImage2);
  
    // Kazananı kontrol etmek için
    if (randomNum1 > randomNum2) {
      document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNum2 > randomNum1) {
      document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
      document.querySelector("h1").textContent = "It's a Draw!";
    }
  });