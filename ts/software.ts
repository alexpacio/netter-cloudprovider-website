

  var loremIpsumText :string= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const softwareDescriptionEN:string="This is a plceholder for a text area. It's not supposed to say anything, is just here to take some space as an example for a future real text "+
  "that might be longer or shorter, like the lorem ipsum text but in english to see a different language.";

createFlipCard("Cloud Client", loremIpsumText,softwareDescriptionEN);
createFlipCard("Active Directory Agent", loremIpsumText,softwareDescriptionEN);
createFlipCard("RDP Client", loremIpsumText,softwareDescriptionEN);
createFlipCard("Migration Tool", loremIpsumText,softwareDescriptionEN);
createFlipCard("Mobile App", loremIpsumText,softwareDescriptionEN);
createFlipCard("Netter OS for Devices", loremIpsumText,softwareDescriptionEN);
createFlipCard("Lifecycle Agent", loremIpsumText,softwareDescriptionEN);
createFlipCard("Spice Agent", loremIpsumText,softwareDescriptionEN);
createFlipCard("Indirect Display Windows Driver", loremIpsumText,softwareDescriptionEN);


const itemsCards:HTMLCollectionOf<HTMLElement>=document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;

//function that resizes cards when web-page gets resized (examole on phone rotation)
window.addEventListener('resize', function(event) {
  for(let i:number=0;i<itemsCards.length;i++){
    const card:HTMLElement=itemsCards[i];
    const frontHeight:number=(card.querySelector('.front-face')as HTMLElement).offsetHeight;
    const backHeight:number=(card.querySelector('.back-face')as HTMLElement).offsetHeight;
      card.style.height=backHeight.toString()+'px';
      (card.querySelector('.front-face')as HTMLElement).style.height='100%';
  }
(this.document.querySelector('#flip-card-container')as HTMLElement).style.height='fit-content';
}, true);



function createFlipCard(titleIT:string,backFaceParagraphIT:string,backFaceParagraphEN:string):void {
 const titleEN:string =titleIT;
  var newRow:HTMLDivElement = document.createElement('div');
  newRow.className += 'row';
  document.getElementById('flip-card-container').appendChild(newRow);
  var newCol:HTMLDivElement = document.createElement('div');
  newCol.className += 'col d-flex justify-content-center';
  newRow.appendChild(newCol);
  //card
  var newCard:HTMLDivElement = document.createElement('div');
  newCard.className += 'card';
  newCard.id = titleIT.toString();
  newCol.appendChild(newCard);
  //front
  var newFrontFace:HTMLDivElement = document.createElement('div');
  newFrontFace.className += 'front-face';
  var newFrontTitle:HTMLHeadingElement = document.createElement('h3');
  newFrontTitle.className += 'front-card-title text-center IT';
  newFrontTitle.innerHTML = titleIT.toString();
  //english version
  var newFrontTitleEN:HTMLHeadingElement = document.createElement('h3');
  newFrontTitleEN.className += 'front-card-title text-center EN';
  newFrontTitleEN.innerHTML = titleEN.toString();
  newFrontTitleEN.style.display='none';
  newFrontFace.appendChild(newFrontTitleEN);
   //en
  newFrontFace.appendChild(newFrontTitle);
  var buttonsFrontGrid:HTMLDivElement = document.createElement('div');
  buttonsFrontGrid.className += 'd-flex justify-content-between';
  newFrontFace.appendChild(buttonsFrontGrid);

  var installFrontButton:HTMLButtonElement = document.createElement('button');
  installFrontButton.className += 'btn btn-sm button-red-card';
  installFrontButton.innerHTML = 'Download';
  buttonsFrontGrid.appendChild(installFrontButton);
  var buttonFrontFlip:HTMLButtonElement = document.createElement('button');
  buttonFrontFlip.className += "card-flipper-button-front";
  buttonFrontFlip.onclick = function () {
    const targetCard:HTMLElement = lookForCardElement(this as HTMLElement);
    targetCard.style.transform = "rotateY(180deg)";
    newBackFace.style.display = '';
    setTimeout(function () { newFrontFace.style.display = 'none'; }, 800);
  }
  var imgFrontFlip:HTMLImageElement = document.createElement('img');
  imgFrontFlip.src = "./../img/svg/add_circle_white_24dp.svg"
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonsFrontGrid.appendChild(buttonFrontFlip);
  newCard.appendChild(newFrontFace);
  const frontHeight:number = newFrontFace.offsetHeight;
  //back
  var newBackFace:HTMLDivElement = document.createElement('div');
  newBackFace.className += 'back-face';
  newCard.appendChild(newBackFace);
  var newBackTitle:HTMLHeadingElement = document.createElement('h5');
  newBackTitle.className += 'back-card-title IT';
  newBackTitle.innerHTML = titleIT.toString();
  newBackFace.appendChild(newBackTitle);
  //english version
  var newBackTitleEN:HTMLHeadingElement = document.createElement('h5');
  newBackTitleEN.className += 'back-card-title EN';
  newBackTitleEN.innerHTML = titleEN.toString();
  newBackTitleEN.style.display='none';
  newBackFace.appendChild(newBackTitleEN);
  //en
  var newBackParagraph:HTMLParagraphElement = document.createElement('p');
  newBackParagraph.className += 'back-card-paragraph IT';
  newBackParagraph.innerHTML = backFaceParagraphIT.toString();
  newBackFace.appendChild(newBackParagraph);
  //english version
  var newBackParagraphEN:HTMLParagraphElement = document.createElement('p');
  newBackParagraphEN.className += 'back-card-paragraph EN';
  newBackParagraphEN.innerHTML = backFaceParagraphEN.toString();
  newBackParagraphEN.style.display='none';
  newBackFace.appendChild(newBackParagraphEN);
  //en
  var buttonsBackGrid:HTMLDivElement = document.createElement('div');
  buttonsBackGrid.className += 'd-flex justify-content-between';
  newBackFace.appendChild(buttonsBackGrid);
  var installBackButton:HTMLButtonElement = document.createElement('button');
  installBackButton.className += 'btn btn-sm button-red-card';
  installBackButton.innerHTML = 'Download';
  buttonsBackGrid.appendChild(installBackButton);

  var buttonBackFlip:HTMLButtonElement = document.createElement('button');
  buttonBackFlip.className += "card-flipper-button-back";
  buttonBackFlip.onclick = function () {
    const targetCard:HTMLElement = lookForCardElement(this as HTMLElement);
    targetCard.style.transform = "rotateY(0deg)";
    newFrontFace.style.display = '';
    setTimeout(function () { newBackFace.style.display = 'none'; }, 800);
  }
  var imgBackFlip:HTMLImageElement = document.createElement('img');
  imgBackFlip.src = "./../img/svg/remove_circle_black_24dp.svg"
  buttonBackFlip.appendChild(imgBackFlip);
  buttonsBackGrid.appendChild(buttonBackFlip);
  const backHeight:number = newBackFace.offsetHeight;
  if (backHeight > frontHeight) {
    newCard.style.height = backHeight.toString() + 'px';
    newFrontFace.style.height = backHeight.toString() + 'px';
  } else {
    newCard.style.height = frontHeight.toString() + 'px';
    newFrontFace.style.height = frontHeight.toString() + 'px';
  }

}



function lookForCardElement(element:HTMLElement) :HTMLElement{
  if (element.parentElement.className === "card") {
    return element.parentElement;
  }
  return lookForCardElement(element.parentElement);
}

function changeLanguage(language:string):void{
  cardChangeLanguage(language);
  stickerElementChangeLanguage(language);
  const containerTopPage:HTMLElement=document.querySelector('.container-top-software-page');
  const softwareCardContainer:HTMLElement=document.getElementById('flip-card-container');
  const coloredBar:HTMLElement=document.querySelector('.colored-bar');
  if(language==='EN'){
   containerTopPage.querySelector('p').innerHTML='Transform any client</br> in a device';
   containerTopPage.querySelector('button').innerHTML='Create a tenant with 300€ of credit';
   softwareCardContainer.querySelector('h1').innerHTML='Downloadable</br>Software';
   coloredBar.querySelector('p').innerHTML="Download Netter app to have mobile access to the platform.";
  }else{
    containerTopPage.querySelector('p').innerHTML='Trasforma un client qualsiasi</br> in un device';
    containerTopPage.querySelector('button').innerHTML='Crea un tenant con 300€ di credito';
    softwareCardContainer.querySelector('h1').innerHTML=' Software </br>scaricabili';
    coloredBar.querySelector('p').innerHTML="Scarica l'app Netter per accedere alla piattaforma cloud anche da mobile.";

  }

}



function cardChangeLanguage(language:string):void{
  const cardItems:HTMLCollectionOf<HTMLElement>=document.getElementById('flip-card-container').getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
  for(let i:number=0;i<cardItems.length;i++){
    if(language==='EN'){
      (cardItems[i].querySelector('.front-card-title.text-center.IT')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.front-card-title.text-center.EN')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.back-card-title.IT')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.back-card-title.EN')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.back-card-paragraph.IT')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.back-card-paragraph.EN')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card')as HTMLElement).innerHTML='install';
      (cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card')as HTMLElement).innerHTML='install';

    } else{
      (cardItems[i].querySelector('.front-card-title.text-center.EN')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.front-card-title.text-center.IT')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.back-card-title.EN')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.back-card-title.IT')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.back-card-paragraph.EN')as HTMLElement).style.display='none';
      (cardItems[i].querySelector('.back-card-paragraph.IT')as HTMLElement).style.display='';
      (cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card')as HTMLElement).innerHTML='installa';
      (cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card')as HTMLElement).innerHTML='installa';


    }
  }

}
