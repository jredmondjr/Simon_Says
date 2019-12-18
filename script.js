const blueSound = new Audio("./sounds/blue.mp3");
const greenSound = new Audio("./sounds/green.mp3");
const redSound = new Audio("./sounds/red.mp3");
const yellowSound = new Audio("./sounds/yellow.mp3");
const wrongSound = new Audio("./sounds/wrong.mp3");
let level = 1
let computer = [];
let gameStart = false
let clickedButton = null;
let lose = false;
$("body").on("keydown", (e) => {
    $("#level-title").text("Level " + level)
    if (!gameStart){gameStart = true; ComputerChoice();}
})
$(document).on("click", ".btn", (e) => {
    clickedButton = e.target.id;
});
$("#green").on("click", (e) => {
    e = greenSound.play();
    changeColor($("#green"));    
})

$("#red").on("click", (e) => {
    e = redSound.play();
    changeColor($("#red"));
})

$("#yellow").on("click", (e) => {
    e = yellowSound.play();
    changeColor($("#yellow"));
})

$("#blue").on("click", (e) => {
    e = blueSound.play();
    changeColor($("#blue"));
})
/// -------WHERE I AM AT-----///
 
// while(!lose && gameStart){
//     switch (clickedButton) {
//         case null:
//             ComputerChoice();
//             break;
        
//         default:
//             computer.forEach(computer => {
//                 if(computer)
//             });
//             break;
//     }
// }

function changeColor(btn){
    btn.addClass("pressed");
    setTimeout(() => {
        btn.removeClass("pressed");
    }, 100)
}

function ComputerChoice(){
    let key = Math.floor(Math.random() * 4) + 1
    if (Choice(key) != "ERROR"){computer.push(key); clickedButton = null;}
    else{ComputerChoice()}
}

function Choice(key){
    switch (key) {
        case 1:
            $("#green").trigger("click");
            return key;
        case 2:
            $("#red").trigger("click");
            return key;
        case 3:
            $("#yellow").trigger("click");
            return key;
        case 4:
            $("#blue").trigger("click");
            return key;
        default:
            return "ERROR";
    }
}