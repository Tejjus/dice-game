var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

var text = "Refresh Me!"
if (randomNumber1>randomNumber2){
    text = "Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    text = "Player 2 Wins!";
}else{
    text = "Draw!";
}

var h1 = document.getElementById("heading");
h1.innerHTML = text;