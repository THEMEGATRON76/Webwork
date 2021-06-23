var diceNumber1=Math.floor( Math.random()*6)+1;
var diceNumber2=Math.floor( Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+diceNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+diceNumber2+".png");

if(diceNumber1<diceNumber2){
    document.querySelector("h1").textContent ="Deepanshi won voila";
}else if(diceNumber1>diceNumber2){
    document.querySelector("h1").textContent ="Geetansh won voila";
}else{
    document.querySelector("h1").textContent ="Its a draw try again";
}
