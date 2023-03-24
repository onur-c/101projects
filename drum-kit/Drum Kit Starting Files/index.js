// document.querySelectorAll("button").addEventListener("click", handleClick);

var clickedButton = 0;

var allDrumButtons = document.querySelectorAll(".drum");

// let timeoutId;

allDrumButtons.forEach((element, index) => {
  // PLAY SOUND WHEN YOU CLICK
  element.addEventListener(
    "click",
    (e) => {
      playSound(index);
      console.log(e);
    },
    false
  );
  // PLAY SOUND ON KEYBOARD PRESS
  document.addEventListener(
    "keydown",
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      playSoundWithKey(event.key);
      console.log(event);
      event.preventDefault();
    },
    true
  );
  //   if (index === 0) {
  //     document.addEventListener(
  //       "keyup",
  //       (event) => {
  //         playSoundWithKey(event.key);
  //         console.log(event);
  //       },
  //       false
  //     );
  //   } else {
  //     return;
  //   }

  // COLOR CHANGE ON MOUSEOVER
  element.addEventListener(
    "mouseenter",
    () => {
      element.style.color = "#aaa";
    },
    false
  );
  element.addEventListener(
    "mouseleave",
    () => {
      setTimeout(() => {
        element.style.color = "#da0463";
      }, 0);
    },
    false
  );
});

function playSound(buttonIndex) {
  switch (buttonIndex) {
    case 0:
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 1:
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 2:
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 3:
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 4:
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 5:
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 6:
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
  return;
}
function playSoundWithKey(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      break;
  }
  return;
}
