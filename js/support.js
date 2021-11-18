if (document.querySelector('.btn.btn-sm.language-button').innerHTML == 'IT') {
    changeLanguage('EN');
}
function changeLanguage(language) {
    if (language == 'EN') {
        document.querySelector('p.lead').innerHTML = 'Contact us for assistance';
    }
    else {
        document.querySelector('p.lead').innerHTML = 'Contattaci per ricevere assistenza';
    }
}
