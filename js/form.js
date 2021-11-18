if (document.querySelector('.btn.btn-sm.language-button').innerHTML == 'IT') {
    changeLanguage('EN');
}
function collectUserData() {
    const language = document.querySelector('.navbar').querySelector('button.btn.btn-sm.language-button');
    const nomeAzienda = document.getElementById('Nome-Azienda');
    const settoreDiBusines = document.getElementById('Settore-di-Business');
    const partitaIVA = document.getElementById('Partita-IVA');
    const telefono = document.getElementById('Telefono');
    const stato = document.getElementById('Stato');
    const indirizzo = document.getElementById('Indirizzo');
    const logoAzienda = document.getElementById('Logo-Azienda');
    const immagineAziendale1 = document.getElementById('Immagine-Aziendale-1');
    const immagineAziendale2 = document.getElementById('Immagine-Aziendale-2');
    const immagineAziendale3 = document.getElementById('Immagine-Aziendale-3');
    const nomeUtente = document.getElementById('Nome-Utente');
    const cognomeUtente = document.getElementById('Cognome-Utente');
    const username = document.getElementById('Username');
    const password = document.getElementById('Password');
    const passwordCheck = document.getElementById('Conferma-Password');
    const email = document.getElementById('Email');
    const metodoInvioNotifiche = document.getElementById('Metodo-invio-notifiche');
    const telefonoUser = document.getElementById('Telefono-User');
    const fusoOrario = document.getElementById('Fuso-orario');
    const lingua = document.getElementById('Lingua');
    const gridCheck = document.getElementById('gridCheck');
    if (gridCheck.checked) {
        const emptyField = [];
        const formItems = document.getElementsByClassName('form-control');
        const selectItems = document.getElementsByClassName('form-select');
        for (let i = 0; i < formItems.length; i++) {
            if (formItems[i].id !== "Logo-Azienda" && formItems[i].id !== "Immagine-Aziendale-1" && formItems[i].id !== "Immagine-Aziendale-2" && formItems[i].id !== "Immagine-Aziendale-3") {
                if (formItems[i].value === "") {
                    emptyField.push(formItems[i].parentElement.querySelector('label').textContent + '  ');
                }
            }
        }
        for (let i = 0; i < selectItems.length; i++) {
            if (selectItems[i].value === "Seleziona..." || selectItems[i].value === "Select...") {
                emptyField.push(selectItems[i].id.toString() + '  ');
            }
        }
        //if there are some empty fields they need to be filled else proceed
        if (emptyField.length > 0) {
            language.textContent === 'EN' ? window.alert('COMPILARE I CAMPI:  ' + emptyField.toString()) : window.alert('Fill Fields:  ' + emptyField.toString());
        }
        else {
            if (password.value === passwordCheck.value) {
                const newUser = {
                    nomeUtente: nomeUtente.value,
                    cognomeUtente: cognomeUtente.value,
                    username: username.value,
                    password: password.value,
                    email: email.value,
                    metodoInvioNotifiche: metodoInvioNotifiche.value,
                    telefonoUser: telefonoUser.value,
                    fusoOrario: fusoOrario.value,
                    lingua: lingua.value
                };
                const newCompany = {
                    nomeAzienda: nomeAzienda.value,
                    settoreDiBusines: settoreDiBusines.value,
                    partitaIVA: partitaIVA.value,
                    telefono: telefono.value,
                    stato: stato.value,
                    indirizzo: indirizzo.value,
                    logoAzienda: logoAzienda.value,
                    immagineAziendale1: immagineAziendale1.value,
                    immagineAziendale2: immagineAziendale2.value,
                    immagineAziendale3: immagineAziendale3.value,
                    user: newUser
                };
                nomeUtente.value, cognomeUtente.value, username.value, password.value,
                    email.value, metodoInvioNotifiche.value, telefonoUser.value, fusoOrario.value, lingua.value;
                printCompany(newCompany);
            }
            else {
                console.log(password.value + ' ' + passwordCheck.value);
                language.textContent === 'IT' ? window.alert("le password non coincidono!!") : window.alert("the passwords are incorrect!!");
            }
        }
    }
    else {
        language.textContent === 'IT' ? window.alert("si deve accettare il trattamento dei dati personali!!") : window.alert("you need to accept the personal data treatment!!");
    }
}
function printCompany(company) {
    console.log('AZIENDA: ' + company.nomeAzienda);
    console.log('Settore: ' + company.settoreDiBusines + '  p. IVA: ' + company.partitaIVA + '  Telefono: ' + company.telefono);
    console.log('Stato: ' + company.stato + ' Indirizzo: ' + company.indirizzo);
    if (company.logoAzienda !== "") {
        console.log("logo: " + company.logoAzienda);
    }
    if (company.immagineAziendale1 !== "") {
        console.log("immagine: " + company.immagineAziendale1);
    }
    if (company.immagineAziendale2 !== "") {
        console.log("immagine: " + company.immagineAziendale2);
    }
    if (company.immagineAziendale3 !== "") {
        console.log("immagine: " + company.immagineAziendale3);
    }
    console.log('UTENTE: ' + company.user.nomeUtente + ' ' + company.user.cognomeUtente);
    console.log('username: ' + company.user.username + '   password: ' + company.user.password);
    console.log('email: ' + company.user.email + ' telefono ' + company.user.nomeUtente + ': ' + company.user.telefonoUser);
    console.log('notifiche: ' + company.user.metodoInvioNotifiche + ' fuso orario: ' + company.user.fusoOrario + ' lingua: ' + company.user.lingua);
}
function changeLanguage(language) {
    if (language === "IT") {
        document.getElementById('page-title').textContent = 'Registrati alla piattaforma Netter';
        document.getElementById('title-1').textContent = 'Dati Azienda';
        document.getElementById('Nome-Azienda-label').textContent = 'Nome Azienda';
        document.getElementById('Settore-di-Business-label').textContent = 'Settore di Business';
        document.getElementById('Partita-IVA-label').textContent = 'Partita IVA';
        document.getElementById('Telefono-label').textContent = 'Telefono';
        document.getElementById('Stato-label').textContent = 'Stato';
        document.getElementById('Indirizzo-label').textContent = 'Indirizzo';
        document.getElementById('Indirizzo').placeholder = 'Citta(PROVINCIA), via, numero civico,CAP';
        document.getElementById('Logo-Azienda-label').textContent = 'Logo Azienda';
        document.getElementById('Immagine-Aziendale-1-label').textContent = 'Immagine Aziendale 1';
        document.getElementById('Immagine-Aziendale-2-label').textContent = 'Immagine Aziendale 2';
        document.getElementById('Immagine-Aziendale-3-label').textContent = 'Immagine Aziendale 3';
        document.getElementById('title-2').textContent = 'Utente di servizio';
        document.getElementById('Nome-Utente-label').textContent = 'Nome';
        document.getElementById('Cognome-Utente-label').textContent = 'Cognome';
        document.getElementById('Conferma-Password-label').textContent = 'Conferma Password';
        document.getElementById('Metodo-invio-notifiche-label').textContent = 'Metodo invio notifiche';
        document.getElementById('Telefono-User-label').textContent = 'Telefono User';
        document.getElementById('Fuso-orario-label').textContent = 'Fuso orario';
        document.getElementById('Lingua-label').textContent = 'Lingua';
        document.getElementById("gridCheck-label").textContent = "Autorizzo Netter S.R.L. al trattamento dei dati sopra riportati in conformità alla normativa applicabile" +
            " in materia di protezione dei dati personali, come indicato nell'informativa sulla Privacy. Tali dati" +
            " verranno trattati elettronicamente, o in forma cartacea, dai soggetti incaricati ai sensi della" +
            " normativa citata al solo fine di dare seguito alla Vostra richiesta di informazioni commerciali e per" +
            " proprie attività di marketing.";
        document.getElementById('create-account-button').textContent = "Crea un account";
        const selectItems = document.getElementsByClassName('form-select');
        for (let i = 0; i < selectItems.length; i++) {
            selectItems[i].placeholder = 'Select...';
        }
    }
    else {
        document.getElementById('page-title').textContent = 'Register into Netter platform';
        document.getElementById('title-1').textContent = 'Company Details';
        document.getElementById('Nome-Azienda-label').textContent = 'Company Name';
        document.getElementById('Settore-di-Business-label').textContent = 'Company Business Sector';
        document.getElementById('Partita-IVA-label').textContent = 'Company VAT Number';
        document.getElementById('Telefono-label').textContent = 'Phone Number';
        document.getElementById('Stato-label').textContent = 'Country';
        document.getElementById('Indirizzo-label').textContent = 'Address';
        document.getElementById('Indirizzo').placeholder = 'City area/District,County,Street,Door number,Post Code';
        document.getElementById('Logo-Azienda-label').textContent = 'Company Logo';
        document.getElementById('Immagine-Aziendale-1-label').textContent = 'Company Image 1';
        document.getElementById('Immagine-Aziendale-2-label').textContent = 'Company Image 2';
        document.getElementById('Immagine-Aziendale-3-label').textContent = 'Company Image 3';
        document.getElementById('title-2').textContent = 'User Details';
        document.getElementById('Nome-Utente-label').textContent = 'Name';
        document.getElementById('Cognome-Utente-label').textContent = 'Surname';
        document.getElementById('Conferma-Password-label').textContent = 'Confirm Password';
        document.getElementById('Metodo-invio-notifiche-label').textContent = 'Send Notification to:';
        document.getElementById('Telefono-User-label').textContent = 'User Phone';
        document.getElementById('Fuso-orario-label').textContent = 'Time Zone';
        document.getElementById('Lingua-label').textContent = 'Language';
        document.getElementById("gridCheck-label").textContent = "I authorize Netter S.R.L. to the processing of the above data in accordance with the applicable" +
            " legislation on the protection of personal data, as indicated in the Privacy Policy. These data will " +
            "be processed electronically, or in paper form, by the persons appointed pursuant to the aforementioned legislation for" +
            " the sole purpose of following up your request for commercial information and for their own marketing activities.";
        document.getElementById('create-account-button').textContent = "Create account";
        const selectItems = document.getElementsByClassName('form-select');
        for (let i = 0; i < selectItems.length; i++) {
            selectItems[i].placeholder = 'Seleziona...';
        }
    }
}
