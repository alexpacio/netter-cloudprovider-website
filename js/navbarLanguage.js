function stickerElementChangeLanguage(language) {
    const navItems = document.getElementById('navbar-container').getElementsByTagName('a');
    const footerItems = document.getElementById('footer-container').getElementsByTagName('a');
    if (language === 'EN') {
        for (let i = 0; i < navItems.length; i++) {
            switch (navItems[i].textContent) {
                case 'Applicazioni':
                    navItems[i].textContent = 'Applications';
                    break;
                case 'Dispositivi':
                    navItems[i].textContent = 'Devices';
                    break;
                case 'Sessioni':
                    navItems[i].textContent = 'Sessions';
                    break;
                case 'Listino':
                    navItems[i].textContent = 'Pricelist';
                    break;
                case 'Supporto':
                    navItems[i].textContent = 'Support';
                    break;
            }
        }
        document.getElementById('navbar-button').innerHTML = 'Start now';
        document.getElementById('footer-container').querySelector('p').textContent = '© 2021 Netter. All right reserved';
        for (let i = 0; i < footerItems.length; i++) {
            switch (footerItems[i].textContent) {
                case "Termini d'utilizzo":
                    footerItems[i].textContent = 'Terms of use';
                    break;
                case 'Contatti':
                    footerItems[i].textContent = 'Contacts';
                    break;
            }
        }
    }
    else {
        for (let i = 0; i < navItems.length; i++) {
            switch (navItems[i].textContent) {
                case 'Applications':
                    navItems[i].textContent = 'Applicazioni';
                    break;
                case 'Devices':
                    navItems[i].textContent = 'Dispositivi';
                    break;
                case 'Sessions':
                    navItems[i].textContent = 'Sessioni';
                    break;
                case 'Pricelist':
                    navItems[i].textContent = 'Listino';
                    break;
                case 'Support':
                    navItems[i].textContent = 'Supporto';
                    break;
            }
        }
        document.getElementById('navbar-button').innerHTML = 'Inizia ora';
        document.getElementById('footer-container').querySelector('p').textContent = '© 2021 Netter. Tutti i diritti riservati ';
        for (let i = 0; i < footerItems.length; i++) {
            switch (footerItems[i].textContent) {
                case 'Terms of use':
                    footerItems[i].textContent = "Termini d'utilizzo";
                    break;
                case 'Contacts':
                    footerItems[i].textContent = 'Contatti';
                    break;
            }
        }
    }
}
