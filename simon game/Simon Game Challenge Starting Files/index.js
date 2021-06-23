var start = 0;
var seq = [];
level= 1;
$(document).on("keypress", function (event) {
    start++;
    if (start === 1) {

        gameStart(level);
        start=0;
    }
});
//game start function
function gameStart(times) {
    $("#level-title").text("Level-" + times)
    var rand = Math.floor(Math.random() * 4);
    console.log(rand);
    seq.push(rand);
    console.log(seq);

    //color autogeneration 

    randAnimation(rand);

    //event listner for button
    
    $(".btn").on("click", function () {
        animations($(this).attr("id"));
        gameFlow(seq, $(this).attr("id"));

    });
    


}
//game flow functon called when the button is clicked
function gameFlow(arr, butt) {
    var i = 0;
    if (butt === "green") {
        butt = 0;
    } else if (butt === "red") {
        butt = 1;
    } else if (butt === "yellow") {
        butt = 2;
    } else if (butt === "blue") {
        butt = 3;
    }else{
        console.log("wrong input");
    }


        
     if (arr[i] === butt) {
            level++
            gameStart(level);
     } else {
            console.log("wrong")
            //gameStart(1);


            i++;
        }

    


}

// random number animation
function randAnimation(numm) {
    switch (numm) {
        case 0:
            animations("green")

            break;
        case 1:
            animations("red")

            break;
        case 2:
            animations("yellow")

            break;
        case 3:
            animations("blue")

            break;

        default:
            break;
    }
}

// animation function

function animations(butn) {
    //calling animate class, with a call back function

    $("#" + butn).animate({}, function () {
        setTimeout(function () {
            $("#" + butn).addClass("pressed");
            var sound = new Audio("sounds/" + butn + ".mp3");
            sound.play();
        }, 400);
        //timer for removing the pressed class

        setTimeout(function () {

            $("#" + butn).removeClass("pressed");

        }, 800);

    });


}