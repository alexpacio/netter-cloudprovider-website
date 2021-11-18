var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let resources;
let lines;
fetch("../data_from_backend/resources.json")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    resources = data;
    //  console.log(resources)
    resourceButtonCreator(resources);
    if (document.querySelector('.btn.btn-sm.language-button').innerHTML == 'IT') {
        changeLanguage('EN');
    }
});
function resourceButtonCreator(resources) {
    const resourceButtonContainer = document.getElementById('resources-button');
    let buttonElement = [];
    for (let i = 0; i < resources.length; i++) {
        buttonElement[i] = document.createElement('button');
        buttonElement[i].className += 'btn btn-primary button-white-to-black';
        buttonElement[i].id = resources[i].resourceNameIta;
        buttonElement[i].type = 'button';
        buttonElement[i].innerHTML = resources[i].resourceNameIta;
        buttonElement[i].onclick = function () {
            const resourcesCardContainer = document.getElementById('resources-container');
            //if removes old cards already created when another button is previously pressed, if there are any
            if (resourcesCardContainer.childElementCount > 0) {
                let child = resourcesCardContainer.lastElementChild;
                while (child) {
                    resourcesCardContainer.removeChild(child);
                    child = resourcesCardContainer.lastElementChild;
                }
            }
            //then the function call the card creator function to create the card with price and description
            resourcesCardCreator(resources[i], resourcesCardContainer);
        };
        //attach the buttons in a row 
        resourceButtonContainer.appendChild(buttonElement[i]);
    }
}
function resourcesCardCreator(resource, container) {
    return __awaiter(this, void 0, void 0, function* () {
        //the function reads how many datacenter and creates the same nuber of cards cards
        const cardNumber = resource.datacenter.length;
        //divElement array of elements where the function will write each card returned by the createCard function
        let divElement = [];
        for (let i = 0; i < cardNumber; i++) {
            divElement[i] = yield createCard(resource, i, container);
            // container.appendChild(divElement[i]);
        }
    });
}
function createCard(cardData, cardSelector, cardContainer) {
    const title = cardData.datacenter[cardSelector].title;
    const buttonsNames = cardData.resourceOptions;
    const resourceComponent = cardData.resourceComponents;
    const descriptionIta = cardData.datacenter[cardSelector].descriptionIta;
    const descriptionEng = cardData.datacenter[cardSelector].descriptionEng;
    const resourcePrice = cardData.datacenter[cardSelector].optionPrice;
    const isLanguageEng = document.getElementById('navbar-container').querySelector('.language-button').innerHTML == 'IT';
    const row = document.createElement('div');
    row.className += 'row';
    cardContainer.appendChild(row);
    const cardWrapper = document.createElement('div');
    cardWrapper.className += 'col d-flex justify-content-center';
    row.appendChild(cardWrapper);
    const card = document.createElement('div');
    card.className += 'card';
    cardWrapper.appendChild(card);
    var frontFace = document.createElement('div');
    frontFace.className += 'front-face';
    card.appendChild(frontFace);
    const cardTitle = document.createElement('h3');
    cardTitle.className += 'front-card-title text-center';
    cardTitle.innerHTML = title;
    frontFace.appendChild(cardTitle);
    const buttonOptionGrid = document.createElement('div');
    buttonOptionGrid.className += 'd-flex justify-content-evenly';
    frontFace.appendChild(buttonOptionGrid);
    const whiteFrameContainer = document.createElement('div');
    whiteFrameContainer.className += 'container white-frame-container';
    frontFace.appendChild(whiteFrameContainer);
    let buttons = [];
    for (let i = 0; i < buttonsNames.length; i++) {
        buttons[i] = document.createElement('button');
        buttons[i].className += 'btn btn-sm button-red-to-orange';
        buttons[i].innerHTML = buttonsNames[i];
        buttons[i].onclick = function () {
            //if delete white frames created when another button is pressed,if there are any
            const frameContainer = card.querySelector('.container');
            if (frameContainer.childElementCount > 0) {
                let child = frameContainer.lastElementChild;
                while (child) {
                    frameContainer.removeChild(child);
                    child = frameContainer.lastElementChild;
                }
            }
            whiteFrameCreator(resourcePrice[i], resourceComponent, cardData.showWeeklyMonthlyPrice, card);
        };
        buttonOptionGrid.appendChild(buttons[i]);
    }
    const buttonFrontFlipperPosition = document.createElement('div');
    buttonFrontFlipperPosition.className += 'd-flex justify-content-end';
    buttonFrontFlipperPosition.style.width = '100%';
    buttonFrontFlipperPosition.style.position = 'absolute';
    buttonFrontFlipperPosition.style.bottom = '5px';
    frontFace.appendChild(buttonFrontFlipperPosition);
    var buttonFrontFlip = document.createElement('button');
    buttonFrontFlip.className += "card-flipper-button-front";
    buttonFrontFlip.onclick = function () {
        const targetCard = card;
        targetCard.style.transform = "rotateY(180deg)";
    };
    var imgFrontFlip = document.createElement('img');
    imgFrontFlip.src = './../img/svg/add_circle_white_24dp.svg';
    buttonFrontFlip.appendChild(imgFrontFlip);
    buttonFrontFlipperPosition.appendChild(buttonFrontFlip);
    //back
    const backFace = document.createElement('div');
    backFace.className += 'back-face';
    card.appendChild(backFace);
    const backTitle = document.createElement('h4');
    backTitle.className += 'back-card-title';
    backTitle.innerHTML = title;
    backFace.appendChild(backTitle);
    var newBackParagraph = document.createElement('p');
    newBackParagraph.className += 'back-card-paragraph IT';
    newBackParagraph.innerHTML = descriptionIta;
    if (isLanguageEng) {
        newBackParagraph.style.display = 'none';
    }
    backFace.appendChild(newBackParagraph);
    //english version
    var newBackParagraphEN = document.createElement('p');
    newBackParagraphEN.className += 'back-card-paragraph EN';
    newBackParagraphEN.innerHTML = descriptionEng;
    if (!isLanguageEng) {
        newBackParagraphEN.style.display = 'none';
    }
    backFace.appendChild(newBackParagraphEN);
    const buttonBackFlipperPosition = document.createElement('div');
    buttonBackFlipperPosition.className += 'd-flex justify-content-end';
    buttonBackFlipperPosition.style.width = '100%';
    buttonBackFlipperPosition.style.position = 'absolute';
    buttonBackFlipperPosition.style.bottom = '5px';
    backFace.appendChild(buttonBackFlipperPosition);
    var buttonBackFlip = document.createElement('button');
    buttonBackFlip.className += "card-flipper-button-back";
    buttonBackFlip.onclick = function () {
        const targetCard = card;
        targetCard.style.transform = "rotateY(0deg)";
    };
    var imgBackFlip = document.createElement('img');
    imgBackFlip.src = './../img/svg/remove_circle_black_24dp.svg';
    buttonBackFlip.appendChild(imgBackFlip);
    buttonBackFlipperPosition.appendChild(buttonBackFlip);
    const frontHeight = frontFace.offsetHeight;
    //console.log('front height detected: ' + frontHeight)
    const backHeight = backFace.offsetHeight;
    //console.log('back height detected: ' + backHeight)
    //sets the card height = to the biggest child component
    if (backHeight > frontHeight) {
        //console.log(backHeight);
        card.style.height = backHeight.toString() + 'px';
        // console.log('height written: ' + card.style.height);
    }
    else {
        //console.log(frontHeight);
        card.style.height = frontHeight.toString() + 'px';
        // console.log('height written: ' + card.style.height);
    }
    return row;
}
function calculatePrice(unitPrice) {
    const weeklyPrice = unitPrice * 7;
    const monthlyPrice = unitPrice * 30;
    return [unitPrice, weeklyPrice, monthlyPrice];
}
function whiteFrameCreator(unitPrice, resourceComponents, showWeeklyMonthlyPrice, card) {
    const isLanguageEng = document.getElementById('navbar-container').querySelector('.language-button').innerHTML == 'IT';
    const container = card.querySelector('.container');
    const whiteFrameNumber = resourceComponents.length;
    const weeklyPrice = unitPrice * 7;
    const monthlyPrice = unitPrice * 30;
    container.style.height = 'fit-content';
    for (let i = 0; i < whiteFrameNumber; i++) {
        const whiteFrame = document.createElement('div');
        whiteFrame.className += 'white-field';
        container.appendChild(whiteFrame);
        var grid = document.createElement('dl');
        grid.className += "row";
        whiteFrame.appendChild(grid);
        var parsx = document.createElement('dl');
        parsx.className += "col-sm-3";
        parsx.innerHTML = "<strong>" + resourceComponents[i] + "</strong>";
        var pardxIta = document.createElement('dl');
        pardxIta.className += "col-sm-9 pardxIta";
        pardxIta.innerHTML = "prezzo unitario <strong>" + unitPrice.toFixed(2) + "€</strong>";
        if (showWeeklyMonthlyPrice[i]) {
            pardxIta.innerHTML += "</br>prezzo settimanale <strong>" + weeklyPrice.toFixed(2) + "€</strong> </br>prezzo mensile <strong>" + monthlyPrice.toFixed(2) + "€</strong>";
        }
        if (isLanguageEng) {
            pardxIta.style.display = 'none';
        }
        var pardxEng = document.createElement('dl');
        pardxEng.className += "col-sm-9 pardxEng";
        pardxEng.innerHTML = "unit price <strong>" + unitPrice.toFixed(2) + "€</strong>";
        if (!isLanguageEng) {
            pardxEng.style.display = 'none';
        }
        if (showWeeklyMonthlyPrice[i]) {
            pardxEng.innerHTML += "</br>weekly price <strong>" + weeklyPrice.toFixed(2) + "€</strong> </br>monthly price <strong>" + monthlyPrice.toFixed(2) + "€</strong>";
        }
        grid.appendChild(parsx);
        grid.appendChild(pardxIta);
        grid.appendChild(pardxEng);
    }
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
function connectionControl() {
    var comune = document.getElementById('Comune').value;
    var indirizzo = document.getElementById('Indirizzo').value;
    var civico = document.getElementById('Civico').value;
    // console.log("indirizzo: " +comune+" "+indirizzo+ " "+civico);
    var cardParent = document.getElementById('connection-container');
    //ciclo che elimina cards precedentemente create se si cambia l indirizzo
    var child = cardParent.lastElementChild;
    while (child) {
        console.log("in while");
        cardParent.removeChild(child);
        child = cardParent.lastElementChild;
    }
    var newdiv = document.createElement('div');
    newdiv.className += 'card';
    var newT = document.createElement('h3');
    newT.className += 'text-left';
    newT.innerHTML = "Indirizzo inserito";
    var newp = document.createElement('p');
    newp.className += 'text-left';
    newp.innerHTML = "Comune: " + comune + "</br> Indirizzo: " + indirizzo + "</br> N° civico: " + civico;
    newdiv.appendChild(newT);
    newdiv.appendChild(newp);
    newdiv.style.backgroundColor = "#eeee";
    cardParent.appendChild(newdiv);
}
function changeLanguage(language) {
    stickerElementChangeLanguage(language);
    const cardsElements = document.getElementsByClassName('card');
    const whiteFrameElements = document.getElementsByClassName('white-field');
    const buttonElements = document.getElementById('resources-button').getElementsByClassName('btn');
    const connectionCheckContainer = document.getElementById('connection-check');
    const containerTopPage = document.querySelector('.container-fluid.container-top-page');
    if (language === 'EN') {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].innerHTML = resources[i].resourceNameEng;
        }
        for (let i = 0; i < cardsElements.length; i++) {
            cardsElements[i].querySelector('.back-card-paragraph.IT').style.display = 'none';
            cardsElements[i].querySelector('.back-card-paragraph.EN').style.display = '';
        }
        for (let i = 0; i < whiteFrameElements.length; i++) {
            whiteFrameElements[i].querySelector('.col-sm-9.pardxIta').style.display = 'none';
            whiteFrameElements[i].querySelector('.col-sm-9.pardxEng').style.display = '';
        }
        connectionCheckContainer.style.display = 'none';
        containerTopPage.querySelector('h1').innerHTML = 'Pricelist';
        containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>and monthly resources cost</p>';
        containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300€ of credit';
        document.getElementById('resources-button').parentElement.querySelector('.container-title').innerHTML = 'Show Resources';
    }
    else {
        for (let i = 0; i < buttonElements.length; i++) {
            buttonElements[i].innerHTML = resources[i].resourceNameIta;
        }
        for (let i = 0; i < cardsElements.length; i++) {
            cardsElements[i].querySelector('.back-card-paragraph.IT').style.display = '';
            cardsElements[i].querySelector('.back-card-paragraph.EN').style.display = 'none';
        }
        for (let i = 0; i < whiteFrameElements.length; i++) {
            whiteFrameElements[i].querySelector('.col-sm-9.pardxIta').style.display = '';
            whiteFrameElements[i].querySelector('.col-sm-9.pardxEng').style.display = 'none';
        }
        connectionCheckContainer.style.display = '';
        containerTopPage.querySelector('h1').innerHTML = 'Listino';
        containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>e costo mensile delle risorse</p>';
        containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300€ di credito';
        document.getElementById('resources-button').parentElement.querySelector('.container-title').innerHTML = 'Mostra le risorse';
    }
}
