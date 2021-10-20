var loremIpsumText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d";

const imgUrl1='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/autoconfigurante.svg';
const imgUrl2='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/semplicita.svg';
const imgUrl3='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/sicuro.svg';
const imgUrl4='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/veloce.svg';
const imgUrl5='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/autoconfigurante.svg';
const imgUrl6='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/autoconfigurante.svg';


createFlipCard("flip-card-container","Autoconfigurante",imgUrl1, loremIpsumText);
createFlipCard("flip-card-container","Smart",imgUrl2, loremIpsumText);
createFlipCard("flip-card-container","Veloce",imgUrl3, loremIpsumText);
createFlipCard("flip-card-container","Sicuro",imgUrl4, loremIpsumText);
createFlipCard("flip-card-container-2","Componenti scalabili",imgUrl5, loremIpsumText);
createFlipCard("flip-card-container-2","Senori per consultare dati in uscita",imgUrl6, loremIpsumText);




function createFlipCard(parentEl,title,imgLink,backFaceParagraph){
var newCol=document.createElement('div');
newCol.className+='col d-flex justify-content-center app-column';
document.getElementById(parentEl.toString()).appendChild(newCol);
//card
var newCard=document.createElement('div');
newCard.className+='card';
newCard.id='icons-card-dispositivi';
newCard.id=title.toString();
newCol.appendChild(newCard);
//front
var newFrontFace=document.createElement('div');
newFrontFace.className+='front-face';
var newGrid=document.createElement('div');
newGrid.className+='d-flex justify-content-center';
newFrontFace.appendChild(newGrid);
var newFrontImg=document.createElement('img');
newFrontImg.className+='icon-img';
newFrontImg.src=imgLink.toString();
newGrid.appendChild(newFrontImg)
var newFrontTitle=document.createElement('p');
newFrontTitle.className+='text-center icon-card-front-title';
newFrontTitle.innerHTML=title.toString();
newFrontTitle.style.paddingBottom='30px';
newFrontFace.appendChild(newFrontTitle);
var buttonFrontFlip=document.createElement('button');
buttonFrontFlip.className+="card-flipper-button-front";
buttonFrontFlip.onclick=function () {
  const targetCard = lookForCardElement(this);
  targetCard.style.transform = "rotateY(180deg)";
}
var imgFrontFlip=document.createElement('img');
imgFrontFlip.src="file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/add_circle_black_24dp.svg"
buttonFrontFlip.appendChild(imgFrontFlip);
buttonFrontFlip.style.position='absolute';
buttonFrontFlip.style.bottom='5px';
buttonFrontFlip.style.right='5px';
newFrontFace.appendChild(buttonFrontFlip);
newCard.appendChild(newFrontFace);

const frontHeight=newFrontFace.offsetHeight;
//back
var newBackFace=document.createElement('div');
newBackFace.className+='back-face';
newCard.appendChild(newBackFace);
var newBackTitle=document.createElement('h5');
newBackTitle.className+='icon-card-back-title';
newBackTitle.innerHTML=title.toString();
newBackFace.appendChild(newBackTitle);
var newBackParagraph=document.createElement('p');
newBackParagraph.className+='icon-card-paragraph';
newBackParagraph.innerHTML=backFaceParagraph.toString();
newBackFace.appendChild(newBackParagraph);
var backButtonContainer=document.createElement('div');
backButtonContainer.className+='d-flex justify-content-end';
backButtonContainer.style.position='absolute';
backButtonContainer.style.bottom='3px';
backButtonContainer.style.right='5px';
var buttonBackFlip=document.createElement('button');
buttonBackFlip.className+="card-flipper-button-back";
buttonBackFlip.onclick=function () {
  const targetCard = lookForCardElement(this);
  targetCard.style.transform = "rotateY(0deg)";
}
var imgBackFlip=document.createElement('img');
imgBackFlip.src="file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/remove_circle_white_24dp.svg"
buttonBackFlip.appendChild(imgBackFlip);
newBackFace.appendChild(backButtonContainer);
backButtonContainer.appendChild(buttonBackFlip);

const backHeight=newBackFace.offsetHeight;
if(backHeight>frontHeight){
  newCard.style.height=backHeight.toString()+'px';
  newFrontFace.style.height=backHeight.toString()+'px';
} else{
  newCard.style.height=frontHeight.toString()+'px';
  newBackFace.style.height=frontHeight.toString()+'px';
}

}


  function lookForCardElement(element) {
    if(element.parentElement.className === "card") {
      return element.parentElement;
    }
    return lookForCardElement(element.parentElement);
  }
  