var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
createFlipCard("Cloud Client", loremIpsumText);
createFlipCard("Active Directory Agent", loremIpsumText);
createFlipCard("RDP Client", loremIpsumText);
createFlipCard("Migration Tool", loremIpsumText);
createFlipCard("Mobile App", loremIpsumText);
createFlipCard("Netter OS for Devices", loremIpsumText);
createFlipCard("Lifecycle Agent", loremIpsumText);
createFlipCard("Spice Agent", loremIpsumText);
createFlipCard("Indirect Display Windows Driver", loremIpsumText);


const itemsCards=document.getElementsByClassName('card');

//function that resizes cards when web-page gets resized (examole on phone rotation)
window.addEventListener('resize', function(event) {
  console.log(itemsCards.length);
  for(i=0;i<itemsCards.length;i++){
    const card=itemsCards[i];
    const frontHeight=card.querySelector('.front-face').offsetHeight;
    const backHeight=card.querySelector('.back-face').offsetHeight;
      card.style.height=backHeight.toString()+'px';
      card.querySelector('.front-face').style.height='100%';
  }
}, true);



function createFlipCard(title, backFaceParagraph) {
  var newRow = document.createElement('div');
  newRow.className += 'row';
  document.getElementById('flip-card-container').appendChild(newRow);
  var newCol = document.createElement('div');
  newCol.className += 'col d-flex justify-content-center';
  newRow.appendChild(newCol);
  //card
  var newCard = document.createElement('div');
  newCard.className += 'card';
  newCard.id = title.toString();
  newCol.appendChild(newCard);
  //front
  var newFrontFace = document.createElement('div');
  newFrontFace.className += 'front-face';
  var newFrontTitle = document.createElement('h3');
  newFrontTitle.className += 'front-card-title text-center';
  newFrontTitle.innerHTML = title.toString();
  newFrontFace.appendChild(newFrontTitle);
  var buttonsFrontGrid = document.createElement('div');
  buttonsFrontGrid.className += 'd-flex justify-content-between';
  newFrontFace.appendChild(buttonsFrontGrid);

  var installFrontButton = document.createElement('button');
  installFrontButton.className += 'btn btn-sm button-red-card';
  installFrontButton.innerHTML = 'Download';
  buttonsFrontGrid.appendChild(installFrontButton);
  var buttonFrontFlip = document.createElement('button');
  buttonFrontFlip.className += "card-flipper-button-front";
  buttonFrontFlip.onclick = function () {
    const targetCard = lookForCardElement(this);
    targetCard.style.transform = "rotateY(180deg)";
    newBackFace.style.display = '';
    setTimeout(function () { newFrontFace.style.display = 'none'; }, 800);
  }
  var imgFrontFlip = document.createElement('img');
  imgFrontFlip.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/add_circle_white_24dp.svg"
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonsFrontGrid.appendChild(buttonFrontFlip);
  newCard.appendChild(newFrontFace);
  const frontHeight = newFrontFace.offsetHeight;
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
  var buttonsBackGrid = document.createElement('div');
  buttonsBackGrid.className += 'd-flex justify-content-between';
  newBackFace.appendChild(buttonsBackGrid);
  var installBackButton = document.createElement('button');
  installBackButton.className += 'btn btn-sm button-red-card';
  installBackButton.innerHTML = 'Download';
  buttonsBackGrid.appendChild(installBackButton);

  var buttonBackFlip = document.createElement('button');
  buttonBackFlip.className += "card-flipper-button-back";
  buttonBackFlip.onclick = function () {
    const targetCard = lookForCardElement(this);
    targetCard.style.transform = "rotateY(0deg)";
    newFrontFace.style.display = '';
    setTimeout(function () { newBackFace.style.display = 'none'; }, 800);
  }
  var imgBackFlip = document.createElement('img');
  imgBackFlip.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/remove_circle_black_24dp.svg"
  buttonBackFlip.appendChild(imgBackFlip);
  buttonsBackGrid.appendChild(buttonBackFlip);
  const backHeight = newBackFace.offsetHeight;
  if (backHeight > frontHeight) {
    newCard.style.height = backHeight.toString() + 'px';
    newFrontFace.style.height = backHeight.toString() + 'px';
  } else {
    newCard.style.height = frontHeight.toString() + 'px';
    newFrontFace.style.height = frontHeight.toString() + 'px';
  }
  var width=newCard.offsetWidth;

}

function resizeCard(){
  console.log("resized card!! funzione sotto");
}


function lookForCardElement(element) {
  if (element.parentElement.className === "card") {
    return element.parentElement;
  }
  return lookForCardElement(element.parentElement);
}
