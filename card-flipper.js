function lookForCardElement(element) {
  if(element.parentElement.className !== "card") {
    return lookForCardElement(element.parentElement);
  }
  return element.parentElement;
}


function flip(event) {
  const buttonClicked = event.currentTarget;
  const targetCard = lookForCardElement(buttonClicked);
  if (targetCard.style.transform == "rotateY(180deg)") {
    if(buttonClicked.className === 'card-flipper-button-back'){
    targetCard.style.transform = "rotateY(0deg)";
    }
  }
  else {
    if(buttonClicked.className === 'card-flipper-button-front'){
    targetCard.style.transform = "rotateY(180deg)";
    }
  }
};