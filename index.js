var noOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonName = this.innerHTML;
    makeSound(buttonName);
    makeDark(buttonName);
  });
}

document.addEventListener("keydown", function(event){
    var keyName = event.key;
    makeSound(keyName);
    makeDark(keyName);
    }
);


function makeSound(buttonOrKey){
          var sound;
        switch (buttonOrKey) {
          case 'w':
                    sound = new Audio("sounds/tom-1.mp3");
                    sound.play();
                    break;
          case 'a':
                    sound = new Audio("sounds/tom-2.mp3");
                    sound.play();
                    break;
          case 's':
                    sound = new Audio("sounds/tom-3.mp3");
                    sound.play();
                    break;
          case 'd':
                    sound = new Audio("sounds/tom-4.mp3");
                    sound.play();
                    break;
          case 'j':
                    sound = new Audio("sounds/snare.mp3");
                    sound.play();
                    break;
          case 'k':
                    sound = new Audio("sounds/kick-bass.mp3");
                    sound.play();
                    break;
          case 'l':
                    sound = new Audio("sounds/crash.mp3");
                    sound.play();
                    break;
          default:
        }
}

function makeDark(buttonOrKey)
{
    document.querySelector("."+buttonOrKey).classList.add("pressed");//add shadow
    setTimeout(function(){
      document.querySelector("."+buttonOrKey).classList.remove("pressed");//remove shadow after .1 sec
    }, 100);
}
