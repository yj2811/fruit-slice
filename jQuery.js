var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'apricot', 'avocado', 'banana', 'cherry', 'coconut', 'kiwi', 'mango', 'orange', 'peach', 'pear', 'pineapple', 'strawberry', 'watermelon'];

$(function(){
    // CLick on startreset button
    $("#startreset").click(function(){
        // If user is playing
        if(playing == true){
            location.reload();
        } else{
            // If the user is not playing
            // Inititate game
            playing = true;

            // Set score to zero
            score = 0;
            $("#scorevalue").html(score);

            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            // Change button text to "Reset Game"
            $("#startreset").html("Reset Game");

            // Start dropping fruits
            startAction();

        }
    })

});

function addHearts(){
    for(i=0; i<trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/redHeart.png" class="life">');
    }
}

function startAction(){
    $("#fruitId").show();
    //Generate a random fruit
    choosefruit();
    $("#fruitId").css({'left' : Math.round(650*Math.random()), 'top': -50});
}

function choosefruit(){
    $("#fruitId").attr('src', 'images/' + fruits[Math.round(13*Math.random())] + '.png');
}
