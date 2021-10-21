if(!window.location.href.includes('index.html')){
const isHomepage=window.location.href.includes('index.html');}
var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const descriptionEN="This is a plceholder for a text area. It's not supposed to say anything, is just here to take some space as an example for a future real text "+
                      "that might be longer or shorter, like the lorem ipsum text but in english to see a different language."
createFlipCard("Server di Posta","Mail Server", loremIpsumText,descriptionEN);
createFlipCard("Database SQL","Database SQL" ,loremIpsumText,descriptionEN);
createFlipCard("Centralino Voip","Voip Caller", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 1","English Title 1", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 2","English Title 2", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 3","English Title 3", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 4","English Title 4", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 5", "English Title 5",loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 6","English Title 6", loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 7","English Title 7" ,loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 8","English Title 8" ,loremIpsumText,descriptionEN);
createFlipCard("Lorem Ipsum 9", "English Title 9",loremIpsumText,descriptionEN);




function createFlipCard(titleIT,titleEN ,backFaceParagraphIT,backFaceParagraphEN) {
  var newCol = document.createElement('div');
  newCol.className += 'col application-cards-columns';
  newCol.id=titleIT.toString();
  document.getElementById('flip-card-container').appendChild(newCol);
  var newDFlex =document.createElement('div');
  newDFlex.className+='d-flex justify-content-center';
  newCol.appendChild(newDFlex);
  //card
  var newCard = document.createElement('div');
  newCard.className += 'card';
  newCard.id = titleIT.toString();
  newDFlex.appendChild(newCard);
  //front
  var newFrontFace = document.createElement('div');
  newFrontFace.className += 'front-face';
  var newFrontTitle = document.createElement('h3');
  newFrontTitle.className += 'front-card-title text-center IT';
  newFrontTitle.innerHTML = titleIT.toString();
  newFrontFace.appendChild(newFrontTitle);
  //english version
  var newFrontTitleEN = document.createElement('h3');
  newFrontTitleEN.className += 'front-card-title text-center EN';
  newFrontTitleEN.innerHTML = titleEN.toString();
  newFrontTitleEN.style.display='none';
  newFrontFace.appendChild(newFrontTitleEN);
   //en

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
  imgFrontFlip.src =isHomepage?'./img/svg/add_circle_white_24dp.svg':'./../img/svg/add_circle_white_24dp.svg';
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonsFrontGrid.appendChild(buttonFrontFlip);
  newCard.appendChild(newFrontFace);
  const frontHeight=newFrontFace.offsetHeight;
  //back
  var newBackFace = document.createElement('div');
  newBackFace.className += 'back-face';
  newCard.appendChild(newBackFace);
  var newBackTitle = document.createElement('h5');
  newBackTitle.className += 'back-card-title IT';
  newBackTitle.innerHTML = titleIT.toString();
  newBackFace.appendChild(newBackTitle);
  //english version
  var newBackTitleEN = document.createElement('h5');
  newBackTitleEN.className += 'back-card-title EN';
  newBackTitleEN.innerHTML = titleEN.toString();
  newBackTitleEN.style.display='none';
  newBackFace.appendChild(newBackTitleEN);
  //en
  var newBackParagraph = document.createElement('p');
  newBackParagraph.className += 'back-card-paragraph IT';
  newBackParagraph.innerHTML = backFaceParagraphIT.toString();
  newBackFace.appendChild(newBackParagraph);
  //english version
  var newBackParagraphEN = document.createElement('p');
  newBackParagraphEN.className += 'back-card-paragraph EN';
  newBackParagraphEN.innerHTML = backFaceParagraphEN.toString();
  newBackParagraphEN.style.display='none';
  newBackFace.appendChild(newBackParagraphEN);
  //en
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
  imgBackFlip.src =isHomepage?'./img/svg/remove_circle_black_24dp.svg':'./../img/svg/remove_circle_black_24dp.svg';
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

function cardChangeLanguage(language){
  console.log(language);
  const cardItems=document.getElementById('flip-card-container').getElementsByClassName('card');
  for(i=0;i<cardItems.length;i++){
    if(language==='EN'){
      cardItems[i].querySelector('.front-card-title.text-center.IT').style.display='none';
      cardItems[i].querySelector('.front-card-title.text-center.EN').style.display='';
      cardItems[i].querySelector('.back-card-title.IT').style.display='none';
      cardItems[i].querySelector('.back-card-title.EN').style.display='';
      cardItems[i].querySelector('.back-card-paragraph.IT').style.display='none';
      cardItems[i].querySelector('.back-card-paragraph.EN').style.display='';
      cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card').innerHTML='install';
      cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card').innerHTML='install';

    } else{
      cardItems[i].querySelector('.front-card-title.text-center.EN').style.display='none';
      cardItems[i].querySelector('.front-card-title.text-center.IT').style.display='';
      cardItems[i].querySelector('.back-card-title.EN').style.display='none';
      cardItems[i].querySelector('.back-card-title.IT').style.display='';
      cardItems[i].querySelector('.back-card-paragraph.EN').style.display='none';
      cardItems[i].querySelector('.back-card-paragraph.IT').style.display='';
      cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card').innerHTML='installa';
      cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card').innerHTML='installa';


    }
  }

}
