console.log('app')
interface AppData{
  appNameIta:string;
  appNameEng:string;
  descriptionIta:string;
  descriptionEng:string;
}
fetch("../data_from_backend/applications.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
   const applicationsData = data as AppData[];
  //  console.log(resources)
   for(let i=0;i<applicationsData.length;i++){
     createAppFlipCard(applicationsData[i].appNameIta,applicationsData[i].appNameEng,applicationsData[i].descriptionIta,applicationsData[i].descriptionEng);
   }

  if(window.localURL.includes('/pages/')){
    console.log('app called')
    applicationsCard();
  }else{
    console.log('home called')
    homepageCard();
  }
  })






function createAppFlipCard(titleIT, titleEN, backFaceParagraphIT, backFaceParagraphEN):void {
  const isHomepage: boolean = !window.location.href.includes('/pages/');
  var newCol: HTMLDivElement = document.createElement('div');
  newCol.className += 'col application-cards-columns';
  newCol.id = titleIT.toString();
  document.getElementById('flip-card-container').appendChild(newCol);
  var newDFlex: HTMLDivElement = document.createElement('div');
  newDFlex.className += 'd-flex justify-content-center';
  newCol.appendChild(newDFlex);
  //card
  var newCard: HTMLDivElement = document.createElement('div');
  newCard.className += 'card';
  newCard.id = titleIT.toString();
  newDFlex.appendChild(newCard);
  //front
  var newFrontFace: HTMLDivElement = document.createElement('div');
  newFrontFace.className += 'front-face';
  var newFrontTitle: HTMLHeadingElement = document.createElement('h3');
  newFrontTitle.className += 'front-card-title text-center IT';
  newFrontTitle.innerHTML = titleIT.toString();
  newFrontFace.appendChild(newFrontTitle);
  //english version
  var newFrontTitleEN: HTMLHeadingElement = document.createElement('h3');
  newFrontTitleEN.className += 'front-card-title text-center EN';
  newFrontTitleEN.innerHTML = titleEN.toString();
  newFrontTitleEN.style.display = 'none';
  newFrontFace.appendChild(newFrontTitleEN);
  //en

  var buttonsFrontGrid: HTMLDivElement = document.createElement('div');
  buttonsFrontGrid.className += 'd-flex justify-content-between';
  newFrontFace.appendChild(buttonsFrontGrid);

  var installFrontButton: HTMLButtonElement = document.createElement('button');
  installFrontButton.className += 'btn btn-sm button-red-card';
  installFrontButton.innerHTML = 'Installa';
  buttonsFrontGrid.appendChild(installFrontButton);
  var buttonFrontFlip: HTMLButtonElement = document.createElement('button');
  buttonFrontFlip.className += "card-flipper-button-front";
  buttonFrontFlip.onclick = function () {
    const targetCard: HTMLElement = appLookForCardElement(this as HTMLElement);
    targetCard.style.transform = "rotateY(180deg)";
  }
  var imgFrontFlip: HTMLImageElement = document.createElement('img');
  imgFrontFlip.src = isHomepage ? './img/svg/add_circle_white_24dp.svg' : './../img/svg/add_circle_white_24dp.svg';
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonsFrontGrid.appendChild(buttonFrontFlip);
  newCard.appendChild(newFrontFace);
  const frontHeight: number = newFrontFace.offsetHeight;
  //back
  var newBackFace: HTMLDivElement = document.createElement('div');
  newBackFace.className += 'back-face';
  newCard.appendChild(newBackFace);
  var newBackTitle: HTMLHeadingElement = document.createElement('h5');
  newBackTitle.className += 'back-card-title IT';
  newBackTitle.innerHTML = titleIT.toString();
  newBackFace.appendChild(newBackTitle);
  //english version
  var newBackTitleEN: HTMLHeadingElement = document.createElement('h5');
  newBackTitleEN.className += 'back-card-title EN';
  newBackTitleEN.innerHTML = titleEN.toString();
  newBackTitleEN.style.display = 'none';
  newBackFace.appendChild(newBackTitleEN);
  //en
  var newBackParagraph: HTMLParagraphElement = document.createElement('p');
  newBackParagraph.className += 'back-card-paragraph IT';
  newBackParagraph.innerHTML = backFaceParagraphIT.toString();
  newBackFace.appendChild(newBackParagraph);
  //english version
  var newBackParagraphEN: HTMLParagraphElement = document.createElement('p');
  newBackParagraphEN.className += 'back-card-paragraph EN';
  newBackParagraphEN.innerHTML = backFaceParagraphEN.toString();
  newBackParagraphEN.style.display = 'none';
  newBackFace.appendChild(newBackParagraphEN);
  //en
  var ButtonDflex: HTMLDivElement = document.createElement('div');
  ButtonDflex.className += 'd-flex justify-content-around';
  newBackFace.appendChild(ButtonDflex);
  var button1: HTMLButtonElement = document.createElement('button');
  button1.className += 'btn btn-sm button-red-card';
  button1.innerHTML = 'Installa';
  ButtonDflex.appendChild(button1);
  var button2: HTMLButtonElement = document.createElement('button');
  button2.className += 'btn btn-sm button-white-to-black';
  button2.innerHTML = 'Cost Calculator';
  ButtonDflex.appendChild(button2);

  var buttonBackFlip: HTMLButtonElement = document.createElement('button');
  buttonBackFlip.className += "card-flipper-button-back";
  buttonBackFlip.onclick = function () {
    const targetCard: HTMLElement = appLookForCardElement(this as HTMLElement);
    targetCard.style.transform = "rotateY(0deg)";
  }

  var imgBackFlip: HTMLImageElement = document.createElement('img');
  imgBackFlip.src = isHomepage ? './img/svg/remove_circle_black_24dp.svg' : './../img/svg/remove_circle_black_24dp.svg';
  buttonBackFlip.appendChild(imgBackFlip);
  ButtonDflex.appendChild(buttonBackFlip);
  const backHeight: number = newBackFace.offsetHeight;
  //sets the card height = to the biggest child component
  if (backHeight > frontHeight) {
    newCard.style.height = backHeight.toString() + 'px';
    newFrontFace.style.height = backHeight.toString() + 'px';
  } else {
    newCard.style.height = frontHeight.toString() + 'px';
    newBackFace.style.height = frontHeight.toString() + 'px';
  }
}



function appLookForCardElement(element:HTMLElement):HTMLElement {
  if (element.parentElement.className === "card") {
    return element.parentElement;
  }
  return appLookForCardElement(element.parentElement);
}

function appCardChangeLanguage(language: string):void {
  const cardItems: HTMLCollectionOf<HTMLElement> = document.getElementById('flip-card-container').getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
  for (let i: number = 0; i < cardItems.length; i++) {
    if (language === 'EN') {
      (cardItems[i].querySelector('.front-card-title.text-center.IT') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.front-card-title.text-center.EN') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.back-card-title.IT') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.back-card-title.EN') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.back-card-paragraph.IT') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.back-card-paragraph.EN') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card') as HTMLElement).innerHTML = 'install';
      (cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card') as HTMLElement).innerHTML = 'install';

    } else {
      (cardItems[i].querySelector('.front-card-title.text-center.EN') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.front-card-title.text-center.IT') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.back-card-title.EN') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.back-card-title.IT') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.back-card-paragraph.EN') as HTMLElement).style.display = 'none';
      (cardItems[i].querySelector('.back-card-paragraph.IT') as HTMLElement).style.display = '';
      (cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card') as HTMLElement).innerHTML = 'installa';
      (cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card') as HTMLElement).innerHTML = 'installa';


    }
    const card: HTMLElement = cardItems[i];
    (card.querySelector('.front-face') as HTMLElement).style.height = 'fit-content';
    (card.querySelector('.back-face') as HTMLElement).style.height = 'fit-content';
    const frontHeight = (card.querySelector('.front-face') as HTMLElement).offsetHeight;
    const backHeight = (card.querySelector('.back-face') as HTMLElement).offsetHeight;
    if (frontHeight < backHeight) {
      card.style.height = backHeight.toString() + 'px';
      (card.querySelector('.front-face') as HTMLElement).style.height = backHeight.toString() + 'px';
    } else {
      card.style.height = frontHeight.toString() + 'px';
      (card.querySelector('.back-face') as HTMLElement).style.height = frontHeight.toString() + 'px';

    }
  }
  (document.getElementById('flip-card-container') as HTMLElement).style.height = 'fit-content';

}
