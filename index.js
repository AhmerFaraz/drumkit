var noofdrums = document.querySelectorAll(".drum").length

for(i=0;i<noofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",playaudio);
}
function playaudio(){
    var buttonInner = this.innerHTML;
    makesound(buttonInner);
    buttonAnimation(buttonInner);
            
    
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound(key){
    switch (key) {
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
            var tom3 = new Audio("sounds/snare.mp3");
            tom3.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/crash.mp3");
            tom3.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/kick-bass.mp3");
            tom3.play();
            break;
        default:
            break;
    }
    
}
function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
}

    
