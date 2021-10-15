var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
createFlipCard("Server di Posta", loremIpsumText);
createFlipCard("Database SQL", loremIpsumText);
createFlipCard("Centralino Voip", loremIpsumText);
createFlipCard("Lorem Ipsum 1", loremIpsumText);
createFlipCard("Lorem Ipsum 2", loremIpsumText);
createFlipCard("Lorem Ipsum 3", loremIpsumText);
createFlipCard("Lorem Ipsum 4", loremIpsumText);
createFlipCard("Lorem Ipsum 5", loremIpsumText);
createFlipCard("Lorem Ipsum 6", loremIpsumText);
createFlipCard("Lorem Ipsum 7", loremIpsumText);
createFlipCard("Lorem Ipsum 8", loremIpsumText);
createFlipCard("Lorem Ipsum 9", loremIpsumText);
console.log("code ended");




function createFlipCard(title, backFaceParagraph) {
  var newCol = document.createElement('div');
  newCol.className += 'col application-cards-columns';
  newCol.id=title.toString();
  document.getElementById('flip-card-container').appendChild(newCol);
  var newDFlex =document.createElement('div');
  newDFlex.className+='d-flex justify-content-center';
  newCol.appendChild(newDFlex);
  //card
  var newCard = document.createElement('div');
  newCard.className += 'card';
  newCard.id = title.toString();
  newDFlex.appendChild(newCard);
  //front
  var newFrontFace = document.createElement('div');
  newFrontFace.className += 'front-face';
  var newFrontTitle = document.createElement('h3');
  newFrontTitle.className += 'front-card-title text-center';
  newFrontTitle.innerHTML = title.toString();
  newFrontFace.appendChild(newFrontTitle);
  var buttonsFrontGrid=document.createElement('div');
  buttonsFrontGrid.className+='d-flex justify-content-between';
  newFrontFace.appendChild(buttonsFrontGrid);

  var installFrontButton = document.createElement('button');
  installFrontButton.className += 'btn btn-sm button-red-card';
  installFrontButton.innerHTML = 'Installa';
  buttonsFrontGrid.appendChild(installFrontButton);
  var buttonFrontFlip = document.createElement('button');
  buttonFrontFlip.className += "card-flipper-button-front";
  buttonFrontFlip.onclick = function () {
    const targetCard = lookForCardElement(this);
    targetCard.style.transform = "rotateY(180deg)";
    newBackFace.style.display='';
    setTimeout(function(){newFrontFace.style.display='none';}, 800);
  }
  var imgFrontFlip = document.createElement('img');
  imgFrontFlip.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/add_circle_white_24dp.svg"
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonsFrontGrid.appendChild(buttonFrontFlip);
  newCard.appendChild(newFrontFace);
  const frontHeight=newFrontFace.offsetHeight;
  //back
  var newBackFace = document.createElement('div');
  newBackFace.className += 'back-face';
  newCard.appendChild(newBackFace);
  var newBackTitle = document.createElement('h5');
  newBackTitle.className += 'back-card-title';
  newBackTitle.innerHTML = title.toString();
  newBackFace.appendChild(newBackTitle);
  var newBackParagraph = document.createElement('p');
  newBackParagraph.className += 'back-card-paragraph';
  newBackParagraph.innerHTML = backFaceParagraph.toString();
  newBackFace.appendChild(newBackParagraph);
  var ButtonDflex=document.createElement('div');
  ButtonDflex.className+='d-flex justify-content-around';
  newBackFace.appendChild(ButtonDflex);
  var button1=document.createElement('button');
  button1.className+='btn btn-sm button-red-card';
  button1.innerHTML='Installa';
  ButtonDflex.appendChild(button1);
  var button2=document.createElement('button');
  button2.className+='btn btn-sm button-white-to-black';
  button2.innerHTML='Cost Calculator';
  ButtonDflex.appendChild(button2);

  var buttonBackFlip = document.createElement('button');
  buttonBackFlip.className += "card-flipper-button-back";
  buttonBackFlip.onclick = function () {
    const targetCard = lookForCardElement(this);
    targetCard.style.transform = "rotateY(0deg)";
    newFrontFace.style.display='';
    setTimeout(function(){newBackFace.style.display='none';}, 800);
  }

  var imgBackFlip = document.createElement('img');
  imgBackFlip.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/remove_circle_black_24dp.svg"
  buttonBackFlip.appendChild(imgBackFlip);
  ButtonDflex.appendChild(buttonBackFlip);



  const backHeight=newBackFace.offsetHeight;
  if(backHeight>frontHeight){
    newCard.style.height=backHeight.toString()+'px';
    newFrontFace.style.height=backHeight.toString()+'px';
  } else{
    newCard.style.height=frontHeight.toString()+'px';
    newFrontFace.style.height=frontHeight.toString()+'px';
  }


}



function lookForCardElement(element) {
  if (element.parentElement.className === "card") {
    return element.parentElement;
  }
  return lookForCardElement(element.parentElement);
}
