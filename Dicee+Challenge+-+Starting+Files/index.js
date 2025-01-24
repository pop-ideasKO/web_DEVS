//first image to randomized
function randomNumber()
{
    var randomNum = Math.floor(Math.random()*6)+1;
    return randomNum;
}

var randomimg1= randomNumber();
var randomimage = "dice"+randomimg1+".png";
var randomimageSource = './images/'+randomimage;
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomimageSource);

//second image to randomized
var randomimg2=randomNumber();
var randomimage = "dice"+randomimg2+".png";
var randomimageSource = './images/'+randomimage;
var image = document.querySelectorAll("img")[1];
image.setAttribute("src",randomimageSource);

if (randomimg1>randomimg2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if (randomimg1<randomimg2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else
{
    document.querySelector("h1").innerHTML="DRAW";
}