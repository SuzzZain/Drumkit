/*var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick(){
        alert("I got clicked");
}
}*/

//or

//loop
for(var i = 0; i<document.querySelectorAll(".drum").length; i++){

    //grab all the elements inside the class drum. loops through all the elements starting from when i=0 and add an event listener to it.
    //now we have all our buttons with eventlistener attach to it, when we click on the button its eventlistener triggers the funtion.
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

       // switch on the letter that are inside the innerhtml of each buttons.
       //create a variable that hold the value of the buttons. this button triggered the event.

       //detecting button press
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
       
    }); 
}


//When the document or the entire web page detects a key press then the document will call the function.
//detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key); 
});

function makeSound(key){
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

            default: console.log();
    }
}


    function buttonAnimation(currentKey){
       var activeButton = document.querySelector("." + currentKey);
       activeButton.classList.add("pressed");
       setTimeout(function(){
        activeButton.classList.remove("pressed");
       }, 100);
    }


