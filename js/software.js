fetch("../data_from_backend/softwares.json")
    .then(function (response) {
    return response.json();
})
    .then(function (data) {
    const softwareData = data;
    //  console.log(resources)
    for (let i = 0; i < softwareData.length; i++) {
        createFlipCard(softwareData[i].softwareNameIta, softwareData[i].descriptionIta, softwareData[i].descriptionEng);
    }
});
const itemsCards = document.getElementsByClassName('card');
//function that resizes cards when web-page gets resized (examole on phone rotation)
window.addEventListener('resize', function (event) {
    for (let i = 0; i < itemsCards.length; i++) {
        const card = itemsCards[i];
        const frontHeight = card.querySelector('.front-face').offsetHeight;
        const backHeight = card.querySelector('.back-face').offsetHeight;
        card.style.height = backHeight.toString() + 'px';
        card.querySelector('.front-face').style.height = '100%';
    }
    this.document.querySelector('#flip-card-container').style.height = 'fit-content';
}, true);
function createFlipCard(titleIT, backFaceParagraphIT, backFaceParagraphEN) {
    const titleEN = titleIT;
    var newRow = document.createElement('div');
    newRow.className += 'row';
    document.getElementById('flip-card-container').appendChild(newRow);
    var newCol = document.createElement('div');
    newCol.className += 'col d-flex justify-content-center';
    newRow.appendChild(newCol);
    //card
    var newCard = document.createElement('div');
    newCard.className += 'card';
    newCard.id = titleIT.toString();
    newCol.appendChild(newCard);
    //front
    var newFrontFace = document.createElement('div');
    newFrontFace.className += 'front-face';
    var newFrontTitle = document.createElement('h3');
    newFrontTitle.className += 'front-card-title text-center IT';
    newFrontTitle.innerHTML = titleIT.toString();
    //english version
    var newFrontTitleEN = document.createElement('h3');
    newFrontTitleEN.className += 'front-card-title text-center EN';
    newFrontTitleEN.innerHTML = titleEN.toString();
    newFrontTitleEN.style.display = 'none';
    newFrontFace.appendChild(newFrontTitleEN);
    //en
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
    };
    var imgFrontFlip = document.createElement('img');
    imgFrontFlip.src = "./../img/svg/add_circle_white_24dp.svg";
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
    };
    var imgBackFlip = document.createElement('img');
    imgBackFlip.src = "./../img/svg/remove_circle_black_24dp.svg";
    buttonBackFlip.appendChild(imgBackFlip);
    buttonsBackGrid.appendChild(buttonBackFlip);
    const backHeight = newBackFace.offsetHeight;
    if (backHeight > frontHeight) {
        newCard.style.height = backHeight.toString() + 'px';
        newFrontFace.style.height = backHeight.toString() + 'px';
    }
    else {
        newCard.style.height = frontHeight.toString() + 'px';
        newFrontFace.style.height = frontHeight.toString() + 'px';
    }
}
function lookForCardElement(element) {
    if (element.parentElement.className === "card") {
        return element.parentElement;
    }
    return lookForCardElement(element.parentElement);
}
function changeLanguage(language) {
    cardChangeLanguage(language);
    stickerElementChangeLanguage(language);
    const containerTopPage = document.querySelector('.container-top-software-page');
    const softwareCardContainer = document.getElementById('flip-card-container');
    const coloredBar = document.querySelector('.colored-bar');
    if (language === 'EN') {
        containerTopPage.querySelector('p').innerHTML = 'Transform any client</br> in a device';
        containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300€ of credit';
        softwareCardContainer.querySelector('h1').innerHTML = 'Downloadable</br>Software';
        coloredBar.querySelector('p').innerHTML = "Download Netter app to have mobile access to the platform.";
    }
    else {
        containerTopPage.querySelector('p').innerHTML = 'Trasforma un client qualsiasi</br> in un device';
        containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300€ di credito';
        softwareCardContainer.querySelector('h1').innerHTML = ' Software </br>scaricabili';
        coloredBar.querySelector('p').innerHTML = "Scarica l'app Netter per accedere alla piattaforma cloud anche da mobile.";
    }
}
function cardChangeLanguage(language) {
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
    }
}
