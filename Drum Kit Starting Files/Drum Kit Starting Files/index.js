// To check which button has clicked

var buttonNumber = document.querySelectorAll(".drum").length;

for (i = 0; i < buttonNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        makeSound (this.innerHTML);
        makeAnimation (this.innerHTML);
    });
}

// To check which Keyboard button has pressed

document.addEventListener("keypress", function (event) {
    makeSound (event.key);
    makeAnimation (event.key);
})

// The common function that detects a perticular button and **Play the Sound** accordingly

function makeSound (key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        default:
            break;
    }
}

// The common function that detects a perticular button and **Change the CSS / Style** accordingly

function makeAnimation (currentKey){
    var pressedKey = document.querySelector ("." + currentKey );
    pressedKey.classList.add("pressed");

    setTimeout( function () {
        pressedKey.classList.remove("pressed")
    }, 200 );
}