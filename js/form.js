const country = document.getElementById('Stato');
country.addEventListener('input', updateValue);
function updateValue(e) {
    const input = e.target.value.toLowerCase();
    if (input === 'italia' || input === 'italy') {
        document.getElementById('Regione').innerHTML = '<option>Seleziona...</option>' +
            '<option>Abruzzo</option>' +
            '<option>Basilicata</option>' +
            ' <option>Calabria</option>' +
            ' <option>Campania</option>' +
            ' <option>Emilia-Romagna</option>' +
            ' <option>Friuli Venezia Giulia</option>' +
            ' <option>Lazio</option>' +
            '  <option>Liguria</option>' +
            '<option>Lombardia</option>' +
            '   <option>Marche</option>' +
            ' <option>Molise</option>' +
            '<option>Piemonte</option>' +
            ' <option>Puglia</option>' +
            ' <option>Sardegna</option>' +
            '<option>Sicilia</option>' +
            '<option>Toscana</option>' +
            ' <option>Trentino-Alto Adige</option>' +
            '<option>Umbria</option>' +
            "<option>Valle d'Aosta</option>" +
            '  <option>Veneto</option>';
        document.getElementById('Citta').innerHTML = '<option selected>Seleziona...</option>' +
            '<option>AGRIGENTO </option>' +
            ' <option>ALESSANDRIA </option>' +
            '<option>ANCONA </option>' +
            '<option>AOSTA </option>' +
            '<option>AREZZO </option>' +
            ' <option>ASCOLI PICENO </option>' +
            '  <option>ASTI </option>' +
            '   <option>AVELLINO </option>' +
            ' <option>BARI </option>' +
            ' <option>BARLETTA-ANDRIA-TRANI </option>' +
            '  <option>BELLUNO </option>' +
            ' <option>BENEVENTO </option>' +
            '  <option>BERGAMO </option>' +
            '  <option>BIELLA </option>' +
            ' <option>BOLOGNA </option>' +
            '  <option>BOLZANO </option>' +
            ' <option>BRESCIA </option>' +
            ' <option>BRINDISI </option>' +
            '  <option>CAGLIARI </option>' +
            ' <option>CALTANISSETTA </option>' +
            ' <option>CAMPOBASSO </option>' +
            ' <option>CARBONIA-IGLESIAS </option>' +
            ' <option>CASERTA </option>' +
            ' <option>CATANIA </option>' +
            ' <option>CATANZARO </option>' +
            '<option>CHIETI </option>' +
            ' <option>COMO </option>' +
            '  <option>COSENZA </option>' +
            ' <option>CREMONA </option>' +
            ' <option>CROTONE </option>' +
            ' <option>CUNEO </option>' +
            ' <option>ENNA </option>' +
            '<option>FERMO </option>' +
            '<option>FERRARA </option>' +
            ' <option>FIRENZE </option>' +
            '<option>FOGGIA </option>' +
            '   <option>FORLI???-CESENA </option>' +
            ' <option>FROSINONE </option>' +
            ' <option>GENOVA </option>' +
            ' <option>GORIZIA </option>' +
            ' <option>GROSSETO </option>' +
            ' <option>IMPERIA </option>' +
            ' <option>ISERNIA </option>' +
            '  <option>LA SPEZIA </option>' +
            ' <option>L???AQUILA </option>' +
            ' <option>LATINA </option>' +
            '  <option>LECCE </option>' +
            ' <option>LECCO </option>' +
            '<option>LIVORNO </option>' +
            '<option>LODI </option>' +
            '  <option>LUCCA </option>' +
            '  <option>MACERATA </option>' +
            ' <option>MANTOVA </option>' +
            ' <option>MASSA-CARRARA </option>' +
            '  <option>MATERA </option>' +
            ' <option>MEDIO CAMPIDANO </option>' +
            ' <option>MESSINA </option>' +
            '  <option>MILANO </option>' +
            ' <option>MODENA </option>' +
            ' <option>MONZA E BRIANZA </option>' +
            '  <option>NAPOLI </option>' +
            ' <option>NOVARA </option>' +
            ' <option>NUORO </option>' +
            ' <option>OGLIASTRA </option>' +
            ' <option>OLBIA-TEMPIO </option>' +
            '   <option>ORISTANO </option>' +
            '  <option>PADOVA </option>' +
            ' <option>PALERMO </option>' +
            '  <option>PARMA </option>' +
            ' <option>PAVIA </option>' +
            '  <option>PERUGIA </option>' +
            '  <option>PESARO E URBINO </option>' +
            ' <option>PESCARA </option>' +
            '  <option>PIACENZA </option>' +
            '<option>PISA </option>' +
            '<option>PISTOIA </option>' +
            '<option>PORDENONE </option>' +
            ' <option>POTENZA </option>' +
            ' <option>PRATO </option>' +
            '<option>RAGUSA </option>' +
            ' <option>RAVENNA </option>' +
            ' <option>REGGIO CALABRIA </option>' +
            ' <option>REGGIO EMILIA </option>' +
            ' <option>RIETI </option>' +
            '  <option>RIMINI </option>' +
            ' <option>ROMA </option>' +
            ' <option>ROVIGO </option>' +
            ' <option>SALERNO </option>' +
            '<option>SASSARI </option>' +
            ' <option>SAVONA </option>' +
            ' <option>SIENA </option>' +
            '<option>SIRACUSA </option>' +
            ' <option>SONDRIO </option>' +
            '<option>TARANTO </option>' +
            ' <option>TERAMO </option>' +
            '<option>TERNI </option>' +
            ' <option>TORINO </option>' +
            '<option>TRAPANI </option>' +
            '<option>TRENTO </option>' +
            ' <option>TREVISO </option>' +
            '<option>TRIESTE </option>' +
            '<option>UDINE </option>' +
            ' <option>VARESE </option>' +
            '<option>VENEZIA </option>' +
            '<option>VERBANO-CUSIO-OSSOLA </option>' +
            '<option>VERCELLI </option>' +
            '<option>VERONA </option>' +
            '<option>VIBO VALENTIA </option>' +
            '<option>VICENZA </option>' +
            '<option>VITERBO </option>';
    }
}
function collectUserData() {
    const language = document.querySelector('.navbar').querySelector('button.btn.btn-sm.language-button');
    const nomeAzienda = document.getElementById('Nome-Azienda');
    const settoreDiBusines = document.getElementById('Settore-di-Business');
    const partitaIVA = document.getElementById('Partita-IVA');
    const telefono = document.getElementById('Telefono');
    const stato = document.getElementById('Stato');
    const regione = document.getElementById('Regione');
    const citta = document.getElementById('Citta');
    const comune = document.getElementById('Comune');
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
            language.textContent === 'IT' ? window.alert('COMPILARE I CAMPI:  ' + emptyField.toString()) : window.alert('Fill Fields:  ' + emptyField.toString());
        }
        else {
            if (password.value === passwordCheck.value) {
                //user
                let newUser;
                newUser.nomeUtente = nomeUtente.value;
                newUser.cognomeUtente = cognomeUtente.value;
                newUser.username = username.value;
                newUser.password = password.value;
                newUser.email = email.value;
                newUser.metodoInvioNotifiche = metodoInvioNotifiche.value;
                newUser.telefonoUser = telefonoUser.value;
                newUser.fusoOrario = fusoOrario.value;
                newUser.lingua = lingua.value;
                //company
                let newCompany;
                newCompany.nomeAzienda = nomeAzienda.value;
                newCompany.settoreDiBusines = settoreDiBusines.value;
                newCompany.partitaIVA = partitaIVA.value;
                newCompany.telefono = telefono.value;
                newCompany.stato = stato.value;
                newCompany.regione = regione.value;
                newCompany.citta = citta.value;
                newCompany.comune = comune.value;
                newCompany.indirizzo = indirizzo.value;
                newCompany.logoAzienda = logoAzienda.value;
                newCompany.immagineAziendale1 = immagineAziendale1.value;
                newCompany.immagineAziendale2 = immagineAziendale2.value;
                newCompany.immagineAziendale3 = immagineAziendale3.value;
                newCompany.user = newUser;
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
    console.log('Indirizzo: ' + company.stato + ' ' + company.regione + ' ' + company.citta + ' ' + company.comune + ' ' + company.indirizzo);
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
        document.getElementById('Regione-label').textContent = 'Regione';
        document.getElementById('Citta-label').textContent = 'Citta';
        document.getElementById('Comune-label').textContent = 'Comune';
        document.getElementById('Indirizzo-label').textContent = 'Indirizzo';
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
        document.getElementById("gridCheck-label").textContent = "Autorizzo Netter S.R.L. al trattamento dei dati sopra riportati in conformit?? alla normativa applicabile" +
            " in materia di protezione dei dati personali, come indicato nell'informativa sulla Privacy. Tali dati" +
            " verranno trattati elettronicamente, o in forma cartacea, dai soggetti incaricati ai sensi della" +
            " normativa citata al solo fine di dare seguito alla Vostra richiesta di informazioni commerciali e per" +
            " proprie attivit?? di marketing.";
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
        document.getElementById('Regione-label').textContent = 'State';
        document.getElementById('Citta-label').textContent = 'City';
        document.getElementById('Comune-label').textContent = 'Council/Area';
        document.getElementById('Indirizzo-label').textContent = 'Address';
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
