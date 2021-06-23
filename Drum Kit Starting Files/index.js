/*function aKey(){
    alert("im the A key");
}
function sKey(){
    alert("im the S key");
}
function dKey(){
    alert("im the D key");
}
function jKey(){
    alert("im the J key");
}
function kKey(){
    alert("im the K key");
}
function lKey(){
    alert("im the L key");
}*/

function check(pressedValue){

    switch (pressedValue) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
         
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
           
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            
            break;
        default:
            break;
    }

}
function animations(key){

    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){

     document.querySelector("."+key).classList.remove("pressed");
    
    }, 200);
}

//the button detectore

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        check(this.innerHTML);
        animations(this.innerHTML);
        
    });

//The key detector

}
document.addEventListener("keydown",function (event){
        check(event.key);
        animations(event.key);
        
})
/*document.querySelectorAll("button")[1].addEventListener("click",aKey);
document.querySelectorAll("button")[2].addEventListener("click",sKey);
document.querySelectorAll("button")[3].addEventListener("click",dKey);
document.querySelectorAll("button")[4].addEventListener("click",jKey);
document.querySelectorAll("button")[5].addEventListener("click",kKey);
document.querySelectorAll("button")[6].addEventListener("click",lKey);*/