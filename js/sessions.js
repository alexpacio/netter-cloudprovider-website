const ubuntuTitle = 'Ubuntu Linux 20.04 LTS';
const ubuntuDescriptionIT = '<strong>Edizione:</strong>64bit Italian</br>' +
    '<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>RAM fissa:</strong>4096';
const ubuntuDescriptionEN = '<strong>Edition:</strong>64bit Italian</br>' +
    '<strong>Virtualization environment:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>fixed RAM:</strong>4096';
const oracleTitle = 'Oracle Linux 8';
const oracleDescriptionIT = '<strong>Edizione:</strong>64bit Italian</br>' +
    '<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>RAM fissa:</strong>4096';
const oracleDescriptionEN = '<strong>Edition:</strong>64bit Italian</br>' +
    '<strong>Virtualization environment:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>fixed RAM:</strong>4096';
const windowsTitle = 'Windows Server 2022';
const windowsDescriptionIT = '<strong>Edizione:</strong>64bit Italian</br>' +
    '<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>RAM fissa:</strong>4096';
const windowsDescriptionEN = '<strong>Edition:</strong>64bit Italian</br>' +
    '<strong>Virtualization environment:</strong>Mozart 2 core VCPU, 20VCPU</br>' +
    '<strong>fixed RAM:</strong>4096';
createTemplateCard(ubuntuTitle, ubuntuDescriptionIT, ubuntuDescriptionEN);
createTemplateCard(oracleTitle, oracleDescriptionIT, oracleDescriptionEN);
createTemplateCard(windowsTitle, windowsDescriptionIT, windowsDescriptionEN);
if (document.querySelector('.btn.btn-sm.language-button').innerHTML == 'IT') {
    changeLanguage('EN');
}
function createTemplateCard(title, descriptionIT, descriptionEN) {
    var newRow = document.createElement('div');
    newRow.className += 'row';
    document.getElementById('template-card-container').appendChild(newRow);
    var newCol = document.createElement('div');
    newCol.className += 'col d-flex justify-content-center';
    newRow.appendChild(newCol);
    var newCard = document.createElement('div');
    newCard.className += 'card template-card';
    newCol.appendChild(newCard);
    var newTitle = document.createElement('h2');
    newTitle.className += 'text-center template-card-title';
    newTitle.innerHTML = title.toString();
    newCard.appendChild(newTitle);
    //template frame
    var newTemplateFrame = document.createElement('div');
    newTemplateFrame.className += 'template-frame';
    newTemplateFrame.style.display = 'none';
    var templateTitle = document.createElement('h5');
    templateTitle.className += 'template-frame-title';
    templateTitle.innerHTML = title.toString();
    var templateParagraphIT = document.createElement('p');
    templateParagraphIT.className += 'template-frame-paragraph IT';
    templateParagraphIT.innerHTML = descriptionIT.toString();
    newTemplateFrame.appendChild(templateTitle);
    newTemplateFrame.appendChild(templateParagraphIT);
    newCard.appendChild(newTemplateFrame);
    var templateParagraphEN = document.createElement('p');
    templateParagraphEN.className += 'template-frame-paragraph EN';
    templateParagraphEN.innerHTML = descriptionEN.toString();
    templateParagraphEN.style.display = 'none';
    newTemplateFrame.appendChild(templateParagraphEN);
    var buttonRow = document.createElement('div');
    buttonRow.className += 'row';
    newCard.appendChild(buttonRow);
    var col1 = document.createElement('div');
    col1.className += 'col-6 d-flex justify-content-start';
    buttonRow.appendChild(col1);
    var col2 = document.createElement('div');
    col2.className += 'col-6 d-flex justify-content-end';
    buttonRow.appendChild(col2);
    //
    var buyButton = document.createElement('button');
    buyButton.type = 'button';
    buyButton.className = 'btn btn-sm button-red-card';
    buyButton.innerHTML = 'Acquista';
    col1.appendChild(buyButton);
    var showTemplateButton = document.createElement('button');
    showTemplateButton.type = 'button';
    showTemplateButton.className += 'btn show-template-button';
    showTemplateButton.innerHTML = 'Template';
    var showTemplate = document.createElement('img');
    showTemplate.src = './../img/svg/keyboard_arrow_down_white_24dp.svg';
    showTemplateButton.onclick = function () {
        if (newTemplateFrame.style.display === 'none') {
            newTemplateFrame.style.display = '';
            showTemplate.src = "./../img/svg/keyboard_arrow_up_white_24dp.svg";
            showTemplateButton.appendChild(showTemplate);
        }
        else {
            newTemplateFrame.style.display = 'none';
            showTemplate.src = "./../img/svg/keyboard_arrow_down_white_24dp.svg";
            showTemplateButton.appendChild(showTemplate);
        }
    };
    showTemplateButton.appendChild(showTemplate);
    col2.appendChild(showTemplateButton);
}
function changeLanguage(language) {
    cardLanguageChange(language);
    stickerElementChangeLanguage(language);
    const containerTopPage = document.querySelector('.container-top-page');
    if (language === 'EN') {
        containerTopPage.querySelector('h1').innerHTML = 'Sessions';
        containerTopPage.querySelector('p').innerHTML = 'Virtual Machines</br>or Desktop and Server';
        containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300€ of credit';
    }
    else {
        containerTopPage.querySelector('h1').innerHTML = 'Sessioni';
        containerTopPage.querySelector('p').innerHTML = 'Macchine virtuali </br> o Desktop e Server';
        containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300€ di credito';
    }
    function cardLanguageChange(language) {
        const templateFrames = document.getElementById('template-card-container').getElementsByClassName('template-frame');
        for (let i = 0; i < templateFrames.length; i++) {
            if (language === 'EN') {
                templateFrames[i].querySelector('.template-frame-paragraph.IT').style.display = 'none';
                templateFrames[i].querySelector('.template-frame-paragraph.EN').style.display = '';
                templateFrames[i].parentElement.querySelector('button.btn.btn-sm.button-red-card').innerHTML = 'Buy';
            }
            else {
                templateFrames[i].querySelector('.template-frame-paragraph.EN').style.display = 'none';
                templateFrames[i].querySelector('.template-frame-paragraph.IT').style.display = '';
                templateFrames[i].parentElement.querySelector('button.btn.btn-sm.button-red-card').innerHTML = 'Acquista';
            }
        }
    }
}
