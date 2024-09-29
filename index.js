var score1 = 0;
var score2 = 0;

function rollDice() {
    var randomRoll1 = Math.floor(Math.random() * 6) + 1;
    var randomRoll2 = Math.floor(Math.random() * 6) + 1;

    var dice1 = "./images/PngItem_" + randomRoll1 + ".png";
    var dice2 = "./images/PngItem_" + randomRoll2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", dice1);
    document.querySelectorAll("img")[1].setAttribute("src", dice2);

    if (randomRoll1 > randomRoll2) {
        document.querySelector("h2").innerHTML="Player 1 wins!";
        score1++;
        document.querySelectorAll("p")[0].innerHTML="Player 1 (" + score1 + ")";
        document.querySelectorAll("p")[1].innerHTML="Player 2 (" + score2 + ")";
    } else if (randomRoll2 > randomRoll1) {
        document.querySelector("h2").innerHTML="Player 2 wins!";
        score2++;
        document.querySelectorAll("p")[0].innerHTML="Player 1 (" + score1 + ")";
        document.querySelectorAll("p")[1].innerHTML="Player 2 (" + score2 + ")";
    } else {
        document.querySelector("h2").innerHTML="It's a draw.";
        document.querySelectorAll("p")[0].innerHTML="Player 1 (" + score1 + ")";
        document.querySelectorAll("p")[1].innerHTML="Player 2 (" + score2 + ")";
    }
}