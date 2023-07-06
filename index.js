
var randomnumber1 = Math.floor(Math.random()*6)+1 ;

var diceimg1 = "images/dice"+ randomnumber1+".png"
document.querySelector(".img1").setAttribute("src", diceimg1);

var randomnumber2 = Math.floor(Math.random()*6)+1 ;

var diceimg2 = "images/dice"+ randomnumber2+".png"
document.querySelector(".img2").setAttribute("src", diceimg2);


if (randomnumber1 > randomnumber2){
    document.querySelector(" .container h1").innerHTML = "Player 1 Wins"
}
else if(randomnumber1 < randomnumber2){
    document.querySelector(" .container h1").innerHTML = "Player 2 Wins"
}
else{
    document.querySelector(" .container h1").innerHTML = "Match Draw"
}