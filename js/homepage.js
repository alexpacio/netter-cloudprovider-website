console.log('homepage');
const cardsContainerItems = document.getElementsByClassName('application-cards-columns');
const nItemsToShow = 4;
function homepageCard() {
    for (let i = 0; i < cardsContainerItems.length; i++) {
        if (i > nItemsToShow - 1) {
            cardsContainerItems[i].style.display = 'none';
        }
    }
    if (document.querySelector('.btn.btn-sm.language-button').innerHTML == 'IT') {
        changeLanguage('EN');
    }
}
function showAllApplication(action) {
    const buttonShowAll = document.getElementById('show-all');
    const buttonShowLess = document.getElementById('show-less');
    if (action === 'show-more') {
        for (let i = 0; i < cardsContainerItems.length; i++) {
            cardsContainerItems[i].style.display = '';
            const card = cardsContainerItems[i].querySelector('.card');
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
            buttonShowLess.style.display = "";
            buttonShowAll.style.display = "none";
        }
    }
    else {
        for (let i = 0; i < cardsContainerItems.length; i++) {
            if (i > nItemsToShow - 1) {
                cardsContainerItems[i].style.display = 'none';
            }
        }
        buttonShowLess.style.display = "none";
        buttonShowAll.style.display = "";
    }
}
function changeLanguage(language) {
    console.log(language);
    appCardChangeLanguage(language);
    stickerElementChangeLanguage(language);
    const containerTopPage = document.querySelector('.container-fluid.container-top-homepage');
    const containerWithIcons = document.querySelector('.container-with-icons');
    const applicationContainer = document.getElementById('flip-card-container').parentElement;
    const coloredBar = document.querySelector('.container-fluid.colored-bar');
    const customerContainer = document.getElementById('customer-card-container').parentElement;
    if (language === 'EN') {
        containerTopPage.querySelector('p').innerHTML = 'A different Cloud Computing, </br>easy to use, flexible and dynamic.';
        containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[0].innerHTML = 'Create a tenant with 300€ of credit';
        containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[2].innerHTML = 'Contact us';
        containerWithIcons.querySelector('h2').innerHTML = 'Advantages';
        containerWithIcons.querySelector('.semplicity').querySelector('p').innerHTML = "Ease of use </br>with automated process.";
        containerWithIcons.querySelector('.performance').querySelector('p').innerHTML = 'Higher efficency</br>from technology innovations.';
        containerWithIcons.querySelector('.hardware').querySelector('p').innerHTML = 'Dedicated hardware resources</br>with high performance.';
        applicationContainer.querySelector('h2').innerHTML = 'Applications';
        applicationContainer.querySelector('#show-all').innerHTML = 'Show all';
        applicationContainer.querySelector('#show-less').innerHTML = 'Show less';
        coloredBar.querySelector('h2').innerHTML = 'Try it with some free credit';
        coloredBar.querySelector('p').innerHTML = 'discover all the benefits of the Netter platform';
        coloredBar.querySelector('button').innerHTML = 'Start now';
        customerContainer.querySelector('h2').innerHTML = 'Netter Customers';
    }
    else {
        containerTopPage.querySelector('p').innerHTML = 'Un Cloud Computing diverso, </br>facile da usare, flessibile e dinamico.';
        containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[0].innerHTML = 'Crea un tenant con 300€ di credito';
        containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[2].innerHTML = 'Contattaci';
        containerWithIcons.querySelector('h2').innerHTML = 'Vantaggi';
        containerWithIcons.querySelector('.semplicity').querySelector('p').innerHTML = "Semplicità d'uso </br> e automazione dei processi.";
        containerWithIcons.querySelector('.performance').querySelector('p').innerHTML = 'Maggiorre efficenza </br>da innovazione tecnologiche.';
        containerWithIcons.querySelector('.hardware').querySelector('p').innerHTML = 'Risorse hardware dedicate</br> ad alte prestazioni.';
        applicationContainer.querySelector('h2').innerHTML = 'Applicazioni';
        applicationContainer.querySelector('#show-all').innerHTML = 'Mostra tutte';
        applicationContainer.querySelector('#show-less').innerHTML = 'Mostra meno';
        coloredBar.querySelector('h2').innerHTML = 'Fai una prova con credito gratuito';
        coloredBar.querySelector('p').innerHTML = 'scopri i vantaggi della piattaforma Netter';
        coloredBar.querySelector('button').innerHTML = 'Inizia ora';
        customerContainer.querySelector('h2').innerHTML = 'Elenco clienti che usano Netter';
    }
}
