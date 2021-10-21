
const country=document.getElementById('Stato');
country.addEventListener('input', updateValue);

function updateValue(e){
  const input=e.target.value.toLowerCase();
  if(input==='italia' || input==='italy'){
     document.getElementById('Regione').innerHTML='<option>Seleziona...</option>'+
     '<option>Abruzzo</option>'+
     '<option>Basilicata</option>'+
    ' <option>Calabria</option>'+
    ' <option>Campania</option>'+
    ' <option>Emilia-Romagna</option>'+
    ' <option>Friuli Venezia Giulia</option>'+
    ' <option>Lazio</option>'+
   '  <option>Liguria</option>'+
     '<option>Lombardia</option>'+
  '   <option>Marche</option>'+
    ' <option>Molise</option>'+
     '<option>Piemonte</option>'+
    ' <option>Puglia</option>'+
    ' <option>Sardegna</option>'+
     '<option>Sicilia</option>'+
     '<option>Toscana</option>'+
    ' <option>Trentino-Alto Adige</option>'+
     '<option>Umbria</option>'+
     "<option>Valle d'Aosta</option>"+
   '  <option>Veneto</option>'
   document.getElementById('Citta').innerHTML='<option selected>Seleziona...</option>'+
   '<option>AGRIGENTO </option>'+
  ' <option>ALESSANDRIA </option>'+
   '<option>ANCONA </option>'+
   '<option>AOSTA </option>'+
   '<option>AREZZO </option>'+
  ' <option>ASCOLI PICENO </option>'+
 '  <option>ASTI </option>'+
'   <option>AVELLINO </option>'+
  ' <option>BARI </option>'+
  ' <option>BARLETTA-ANDRIA-TRANI </option>'+
 '  <option>BELLUNO </option>'+
  ' <option>BENEVENTO </option>'+
 '  <option>BERGAMO </option>'+
 '  <option>BIELLA </option>'+
  ' <option>BOLOGNA </option>'+
 '  <option>BOLZANO </option>'+
  ' <option>BRESCIA </option>'+
  ' <option>BRINDISI </option>'+
 '  <option>CAGLIARI </option>'+
  ' <option>CALTANISSETTA </option>'+
  ' <option>CAMPOBASSO </option>'+
  ' <option>CARBONIA-IGLESIAS </option>'+
  ' <option>CASERTA </option>'+
  ' <option>CATANIA </option>'+
  ' <option>CATANZARO </option>'+
   '<option>CHIETI </option>'+
  ' <option>COMO </option>'+
 '  <option>COSENZA </option>'+
  ' <option>CREMONA </option>'+
  ' <option>CROTONE </option>'+
  ' <option>CUNEO </option>'+
  ' <option>ENNA </option>'+
   '<option>FERMO </option>'+
   '<option>FERRARA </option>'+
  ' <option>FIRENZE </option>'+
   '<option>FOGGIA </option>'+
'   <option>FORLI’-CESENA </option>'+
  ' <option>FROSINONE </option>'+
  ' <option>GENOVA </option>'+
  ' <option>GORIZIA </option>'+
  ' <option>GROSSETO </option>'+
  ' <option>IMPERIA </option>'+
  ' <option>ISERNIA </option>'+
 '  <option>LA SPEZIA </option>'+
  ' <option>L’AQUILA </option>'+
  ' <option>LATINA </option>'+
 '  <option>LECCE </option>'+
  ' <option>LECCO </option>'+
   '<option>LIVORNO </option>'+
   '<option>LODI </option>'+
 '  <option>LUCCA </option>'+
 '  <option>MACERATA </option>'+
  ' <option>MANTOVA </option>'+
  ' <option>MASSA-CARRARA </option>'+
 '  <option>MATERA </option>'+
  ' <option>MEDIO CAMPIDANO </option>'+
  ' <option>MESSINA </option>'+
 '  <option>MILANO </option>'+
  ' <option>MODENA </option>'+
  ' <option>MONZA E BRIANZA </option>'+
 '  <option>NAPOLI </option>'+
  ' <option>NOVARA </option>'+
  ' <option>NUORO </option>'+
  ' <option>OGLIASTRA </option>'+
  ' <option>OLBIA-TEMPIO </option>'+
'   <option>ORISTANO </option>'+
 '  <option>PADOVA </option>'+
  ' <option>PALERMO </option>'+
 '  <option>PARMA </option>'+
  ' <option>PAVIA </option>'+
 '  <option>PERUGIA </option>'+
 '  <option>PESARO E URBINO </option>'+
  ' <option>PESCARA </option>'+
 '  <option>PIACENZA </option>'+
   '<option>PISA </option>'+
   '<option>PISTOIA </option>'+
   '<option>PORDENONE </option>'+
  ' <option>POTENZA </option>'+
  ' <option>PRATO </option>'+
   '<option>RAGUSA </option>'+
  ' <option>RAVENNA </option>'+
  ' <option>REGGIO CALABRIA </option>'+
  ' <option>REGGIO EMILIA </option>'+
  ' <option>RIETI </option>'+
 '  <option>RIMINI </option>'+
  ' <option>ROMA </option>'+
  ' <option>ROVIGO </option>'+
  ' <option>SALERNO </option>'+
   '<option>SASSARI </option>'+
  ' <option>SAVONA </option>'+
  ' <option>SIENA </option>'+
   '<option>SIRACUSA </option>'+
  ' <option>SONDRIO </option>'+
   '<option>TARANTO </option>'+
  ' <option>TERAMO </option>'+
   '<option>TERNI </option>'+
  ' <option>TORINO </option>'+
   '<option>TRAPANI </option>'+
   '<option>TRENTO </option>'+
  ' <option>TREVISO </option>'+
   '<option>TRIESTE </option>'+
   '<option>UDINE </option>'+
  ' <option>VARESE </option>'+
   '<option>VENEZIA </option>'+
   '<option>VERBANO-CUSIO-OSSOLA </option>'+
   '<option>VERCELLI </option>'+
   '<option>VERONA </option>'+
   '<option>VIBO VALENTIA </option>'+
   '<option>VICENZA </option>'+
   '<option>VITERBO </option>'
  }
}



function collectUserData() {

    const language=document.getElementsByClassName('list-group-item active')[0];

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
     
    console.log(language.textContent);
    if (gridCheck.checked) {
        const emptyField = [];
        const formItems = document.getElementsByClassName('form-control');
        const selectItems = document.getElementsByClassName('form-select');
        for (i = 0; i < formItems.length; i++) {
            if (formItems[i].id !== "Logo-Azienda" && formItems[i].id !== "Immagine-Aziendale-1" && formItems[i].id !== "Immagine-Aziendale-2" && formItems[i].id !== "Immagine-Aziendale-3") {
                if (formItems[i].value === "") {
                    emptyField.push(formItems[i].parentElement.querySelector('label').textContent + '  ');
                }
            }
        }
        for (i = 0; i < selectItems.length; i++) {
            if (selectItems[i].value === "Seleziona...") {
                emptyField.push(selectItems[i].id.toString() + '  ');
            }
        }
    //if there are some empty fields they need to be filled else proceed
    if (emptyField.length > 0) {
        language.textContent==='Italiano'?window.alert('COMPILARE I CAMPI:  ' + emptyField.toString()):window.alert('Fill Fields:  ' + emptyField.toString());
    } else {
      if(password.value===passwordCheck.value){
          printCompany(nomeAzienda,settoreDiBusines,partitaIVA,telefono,stato,regione,citta,comune,indirizzo,logoAzienda,
                       immagineAziendale1,immagineAziendale2,immagineAziendale3,nomeUtente,cognomeUtente,username,password,
                       email,metodoInvioNotifiche,telefonoUser,fusoOrario,lingua);
      } else{
          console.log(password.value +' ' + passwordCheck.value);
          language.textContent==='Italiano'?window.alert("le password non coincidono!!"):window.alert("the passwords are incorrect!!");
      }
    }
} else {
    language.textContent==='Italiano'?window.alert("si deve accettare il trattamento dei dati personali!!"):window.alert("you need to accept the personal data treatment!!");
}
}


function printCompany(nomeAzienda,settoreDiBusines,partitaIVA,telefono,stato,regione,citta,comune,indirizzo,logoAzienda,
    immagineAziendale1,immagineAziendale2,immagineAziendale3,nomeUtente,cognomeUtente,username,password,
    email,metodoInvioNotifiche,telefonoUser,fusoOrario,lingua){
      console.log('AZIENDA: ' + nomeAzienda.value);
      console.log('Settore: '+ settoreDiBusines.value + '  p. IVA: '+ partitaIVA.value + '  Telefono: ' + telefono.value );
      console.log('Indirizzo: ' + stato.value+' ' + regione.value+ ' '+ citta.value+ ' ' + comune.value+ ' '+ indirizzo.value);
      if(logoAzienda.value!==""){
          console.log("logo: " + logoAzienda.value);
      }
      if(immagineAziendale1.value!==""){
        console.log("immagine: " + immagineAziendale1.value);
    }
    if(immagineAziendale2.value!==""){
      console.log("immagine: " + immagineAziendale2.value);
  }
  if(immagineAziendale3.value!==""){
    console.log("immagine: " + immagineAziendale3.value);
}
      console.log('UTENTE: ' + nomeUtente.value+ ' '+ cognomeUtente.value);
      console.log('username: ' + username.value + '   password: '+ password.value);
      console.log('email: '+ email.value+ ' telefono ' + nomeUtente.value+': ' +telefonoUser.value);
      console.log('notifiche: '+ metodoInvioNotifiche.value + ' fuso orario: '+ fusoOrario.value + ' lingua: ' + lingua.value);
    }


function changeLanguage(language){
      if(language==="IT"){
          document.getElementById('it').className='list-group-item active';
          document.getElementById('en').className='list-group-item';
          document.getElementById('page-title').textContent='Registrati alla piattaforma Netter';
          document.getElementById('title-1').textContent='Dati Azienda';
          document.getElementById('Nome-Azienda-label').textContent='Nome Azienda';
          document.getElementById('Settore-di-Business-label').textContent='Settore di Business';
          document.getElementById('Partita-IVA-label').textContent='Partita IVA';
          document.getElementById('Telefono-label').textContent='Telefono';
          document.getElementById('Stato-label').textContent='Stato';
          document.getElementById('Regione-label').textContent='Regione';
          document.getElementById('Citta-label').textContent='Citta';
          document.getElementById('Comune-label').textContent='Comune';
          document.getElementById('Indirizzo-label').textContent='Indirizzo';
          document.getElementById('Logo-Azienda-label').textContent='Logo Azienda';
          document.getElementById('Immagine-Aziendale-1-label').textContent='Immagine Aziendale 1';
          document.getElementById('Immagine-Aziendale-2-label').textContent='Immagine Aziendale 2';
          document.getElementById('Immagine-Aziendale-3-label').textContent='Immagine Aziendale 3';
          document.getElementById('title-2').textContent='Utente di servizio';
          document.getElementById('Nome-Utente-label').textContent='Nome';
          document.getElementById('Cognome-Utente-label').textContent='Cognome';
          document.getElementById('Conferma-Password-label').textContent='Conferma Password';
          document.getElementById('Metodo-invio-notifiche-label').textContent='Metodo invio notifiche';
          document.getElementById('Telefono-User-label').textContent='Telefono User';
          document.getElementById('Fuso-orario-label').textContent='Fuso orario';
          document.getElementById('Lingua-label').textContent='Lingua';
          document.getElementById("gridCheck-label").textContent="Autorizzo Netter S.R.L. al trattamento dei dati sopra riportati in conformità alla normativa applicabile"+
                                          " in materia di protezione dei dati personali, come indicato nell'informativa sulla Privacy. Tali dati"+
                                          " verranno trattati elettronicamente, o in forma cartacea, dai soggetti incaricati ai sensi della"+
                                          " normativa citata al solo fine di dare seguito alla Vostra richiesta di informazioni commerciali e per"+
                                          " proprie attività di marketing.";
          document.getElementById('create-account-button').textContent="Crea un account";

      } else{
        document.getElementById('en').className='list-group-item active';
        document.getElementById('it').className='list-group-item';
        document.getElementById('page-title').textContent='Register into Netter platform';
        document.getElementById('title-1').textContent='Company Details';
        document.getElementById('Nome-Azienda-label').textContent='Company Name';
        document.getElementById('Settore-di-Business-label').textContent='Company Business Sector';
        document.getElementById('Partita-IVA-label').textContent='Company VAT Number';
        document.getElementById('Telefono-label').textContent='Phone Number';
        document.getElementById('Stato-label').textContent='Country';
        document.getElementById('Regione-label').textContent='State';
        document.getElementById('Citta-label').textContent='City';
        document.getElementById('Comune-label').textContent='Council/Area';
        document.getElementById('Indirizzo-label').textContent='Address';
        document.getElementById('Logo-Azienda-label').textContent='Company Logo';
        document.getElementById('Immagine-Aziendale-1-label').textContent='Company Image 1';
        document.getElementById('Immagine-Aziendale-2-label').textContent='Company Image 2';
        document.getElementById('Immagine-Aziendale-3-label').textContent='Company Image 3';
        document.getElementById('title-2').textContent='User Details';
        document.getElementById('Nome-Utente-label').textContent='Name';
        document.getElementById('Cognome-Utente-label').textContent='Surname';
        document.getElementById('Conferma-Password-label').textContent='Confirm Password';
        document.getElementById('Metodo-invio-notifiche-label').textContent='Send Notification to:';
        document.getElementById('Telefono-User-label').textContent='User Phone';
        document.getElementById('Fuso-orario-label').textContent='Time Zone';
        document.getElementById('Lingua-label').textContent='Language';
        document.getElementById("gridCheck-label").textContent="I authorize Netter S.R.L. to the processing of the above data in accordance with the applicable"+
                                      " legislation on the protection of personal data, as indicated in the Privacy Policy. These data will "+
                                      "be processed electronically, or in paper form, by the persons appointed pursuant to the aforementioned legislation for"+
                                      " the sole purpose of following up your request for commercial information and for their own marketing activities.";
        document.getElementById('create-account-button').textContent="Create account";
                                    }
          
    }