/*console.log('app')
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
  })*/
var loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
    " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const englishText = "This is a plceholder for a text area. It's not supposed to say anything, is just here to take some space as an example for a future real text " +
    "that might be longer or shorter, like the lorem ipsum text but in english to see a different language.";
const app1 = {
    appNameIta: "Server di Posta",
    appNameEng: "Mail Server",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app2 = {
    appNameIta: "Database SQL",
    appNameEng: "Database SQL",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app3 = {
    appNameIta: "Centralino Voip",
    appNameEng: "Voip Caller",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app4 = {
    appNameIta: "Lorem Ipsum 1",
    appNameEng: "English Title 1",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app5 = {
    appNameIta: "Lorem Ipsum 2",
    appNameEng: "English Title 2",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app6 = {
    appNameIta: "Lorem Ipsum 3",
    appNameEng: "English Title 3",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app7 = {
    appNameIta: "Lorem Ipsum 4",
    appNameEng: "English Title 4",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app8 = {
    appNameIta: "Lorem Ipsum 5",
    appNameEng: "English Title 5",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app9 = {
    appNameIta: "Lorem Ipsum 6",
    appNameEng: "English Title 6",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app10 = {
    appNameIta: "Lorem Ipsum 7",
    appNameEng: "English Title 7",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app11 = {
    appNameIta: "Lorem Ipsum 8",
    appNameEng: "English Title 8",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const app12 = {
    appNameIta: "Lorem Ipsum 9",
    appNameEng: "English Title 9",
    descriptionIta: loremIpsumText,
    descriptionEng: englishText
};
const applicationsData = [app1, app2, app3, app4, app5, app6, app7, app8, app9, app10, app11, app12];
for (let i = 0; i < applicationsData.length; i++) {
    createAppFlipCard(applicationsData[i].appNameIta, applicationsData[i].appNameEng, applicationsData[i].descriptionIta, applicationsData[i].descriptionEng);
}
if (window.localURL.includes('/pages/')) {
    console.log('app called');
    // applicationsCard();
    const items = $('.application-cards-columns');
    const numItems = items.length;
    const perPage = 8;
    items.slice(perPage).hide();
    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: "<",
        nextText: ">",
        onPageClick: function (pageNumber) {
            const showFrom = perPage * (pageNumber - 1);
            const showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
            //
            for (let i = 0; i < items.length; i++) {
                const card = items[i].querySelector('.card');
                card.querySelector('.front-face').style.height = 'fit-content';
                card.querySelector('.back-face').style.height = 'fit-content';
                const frontHeight = card.querySelector('.front-face').offsetHeight;
                const backHeight = card.querySelector('.back-face').offsetHeight;
                if (frontHeight < backHeight) {
                    card.style.height = backHeight.toString() + 'px';
                    card.querySelector('.front-face').style.height = backHeight.toString() + 'px';
                }
                else {
                    card.style.height = frontHeight.toString() + 'px';
                    card.querySelector('.back-face').style.height = frontHeight.toString() + 'px';
                }
            }
        }
    });
    console.log('end app pagination');
}
else {
    console.log('home called');
    // homepageCard();
    const cardsContainerItems = document.getElementsByClassName('application-cards-columns');
    const nItemsToShow = 4;
    for (let i = 0; i < cardsContainerItems.length; i++) {
        if (i > nItemsToShow - 1) {
            cardsContainerItems[i].style.display = 'none';
        }
    }
}
//cancellare a qui
function createAppFlipCard(titleIT, titleEN, backFaceParagraphIT, backFaceParagraphEN) {
    const isHomepage = !window.location.href.includes('/pages/');
    var newCol = document.createElement('div');
    newCol.className += 'col application-cards-columns';
    newCol.id = titleIT.toString();
    document.getElementById('flip-card-container').appendChild(newCol);
    var newDFlex = document.createElement('div');
    newDFlex.className += 'd-flex justify-content-center';
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
    newFrontTitleEN.style.display = 'none';
    newFrontFace.appendChild(newFrontTitleEN);
    //en
    var buttonsFrontGrid = document.createElement('div');
    buttonsFrontGrid.className += 'd-flex justify-content-between';
    newFrontFace.appendChild(buttonsFrontGrid);
    var installFrontButton = document.createElement('button');
    installFrontButton.className += 'btn btn-sm button-red-card';
    installFrontButton.innerHTML = 'Installa';
    buttonsFrontGrid.appendChild(installFrontButton);
    var buttonFrontFlip = document.createElement('button');
    buttonFrontFlip.className += "card-flipper-button-front";
    buttonFrontFlip.onclick = function () {
        const targetCard = appLookForCardElement(this);
        targetCard.style.transform = "rotateY(180deg)";
    };
    var imgFrontFlip = document.createElement('img');
    imgFrontFlip.src = isHomepage ? './img/svg/add_circle_white_24dp.svg' : './../img/svg/add_circle_white_24dp.svg';
    buttonFrontFlip.appendChild(imgFrontFlip);
    buttonsFrontGrid.appendChild(buttonFrontFlip);
    newCard.appendChild(newFrontFace);
    const frontHeight = newFrontFace.offsetHeight;
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
    newBackTitleEN.style.display = 'none';
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
    newBackParagraphEN.style.display = 'none';
    newBackFace.appendChild(newBackParagraphEN);
    //en
    var ButtonDflex = document.createElement('div');
    ButtonDflex.className += 'd-flex justify-content-around';
    newBackFace.appendChild(ButtonDflex);
    var button1 = document.createElement('button');
    button1.className += 'btn btn-sm button-red-card';
    button1.innerHTML = 'Installa';
    ButtonDflex.appendChild(button1);
    var button2 = document.createElement('button');
    button2.className += 'btn btn-sm button-white-to-black';
    button2.innerHTML = 'Cost Calculator';
    ButtonDflex.appendChild(button2);
    var buttonBackFlip = document.createElement('button');
    buttonBackFlip.className += "card-flipper-button-back";
    buttonBackFlip.onclick = function () {
        const targetCard = appLookForCardElement(this);
        targetCard.style.transform = "rotateY(0deg)";
    };
    var imgBackFlip = document.createElement('img');
    imgBackFlip.src = isHomepage ? './img/svg/remove_circle_black_24dp.svg' : './../img/svg/remove_circle_black_24dp.svg';
    buttonBackFlip.appendChild(imgBackFlip);
    ButtonDflex.appendChild(buttonBackFlip);
    const backHeight = newBackFace.offsetHeight;
    //sets the card height = to the biggest child component
    if (backHeight > frontHeight) {
        newCard.style.height = backHeight.toString() + 'px';
        newFrontFace.style.height = backHeight.toString() + 'px';
    }
    else {
        newCard.style.height = frontHeight.toString() + 'px';
        newBackFace.style.height = frontHeight.toString() + 'px';
    }
}
function appLookForCardElement(element) {
    if (element.parentElement.className === "card") {
        return element.parentElement;
    }
    return appLookForCardElement(element.parentElement);
}
function appCardChangeLanguage(language) {
    const cardItems = document.getElementById('flip-card-container').getElementsByClassName('card');
    for (let i = 0; i < cardItems.length; i++) {
        if (language === 'EN') {
            cardItems[i].querySelector('.front-card-title.text-center.IT').style.display = 'none';
            cardItems[i].querySelector('.front-card-title.text-center.EN').style.display = '';
            cardItems[i].querySelector('.back-card-title.IT').style.display = 'none';
            cardItems[i].querySelector('.back-card-title.EN').style.display = '';
            cardItems[i].querySelector('.back-card-paragraph.IT').style.display = 'none';
            cardItems[i].querySelector('.back-card-paragraph.EN').style.display = '';
            cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card').innerHTML = 'install';
            cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card').innerHTML = 'install';
        }
        else {
            cardItems[i].querySelector('.front-card-title.text-center.EN').style.display = 'none';
            cardItems[i].querySelector('.front-card-title.text-center.IT').style.display = '';
            cardItems[i].querySelector('.back-card-title.EN').style.display = 'none';
            cardItems[i].querySelector('.back-card-title.IT').style.display = '';
            cardItems[i].querySelector('.back-card-paragraph.EN').style.display = 'none';
            cardItems[i].querySelector('.back-card-paragraph.IT').style.display = '';
            cardItems[i].querySelector('.front-face').querySelector('.btn.btn-sm.button-red-card').innerHTML = 'installa';
            cardItems[i].querySelector('.back-face').querySelector('.btn.btn-sm.button-red-card').innerHTML = 'installa';
        }
        const card = cardItems[i];
        card.querySelector('.front-face').style.height = 'fit-content';
        card.querySelector('.back-face').style.height = 'fit-content';
        const frontHeight = card.querySelector('.front-face').offsetHeight;
        const backHeight = card.querySelector('.back-face').offsetHeight;
        if (frontHeight < backHeight) {
            card.style.height = backHeight.toString() + 'px';
            card.querySelector('.front-face').style.height = backHeight.toString() + 'px';
        }
        else {
            card.style.height = frontHeight.toString() + 'px';
            card.querySelector('.back-face').style.height = frontHeight.toString() + 'px';
        }
    }
    document.getElementById('flip-card-container').style.height = 'fit-content';
}
