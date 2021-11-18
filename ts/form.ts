interface CompanyDetails{
  nomeAzienda:string, 
  settoreDiBusines:string,
  partitaIVA:string,
  telefono:string,
  stato:string,
  regione:string,
  citta:string ,
  comune:string,
  indirizzo:string,
  logoAzienda:string,
  immagineAziendale1:string,
  immagineAziendale2:string,
  immagineAziendale3:string,
  user:UserData}

  interface UserData{
  nomeUtente:string,
  cognomeUtente:string,
  username:string,
  password:string,
  passwordCheck:string,
  email:string,
  metodoInvioNotifiche:string,
  telefonoUser:string,
  fusoOrario:string,
  lingua:string,
  notificationMethod:string
}

const country:HTMLElement=document.getElementById('Stato');
country.addEventListener('input', updateValue);

function updateValue(e):void{
  const input:string=e.target.value.toLowerCase();
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



function collectUserData():void{

    const language:HTMLElement=document.querySelector('.navbar').querySelector('button.btn.btn-sm.language-button') as HTMLElement;
    const nomeAzienda:HTMLInputElement = document.getElementById('Nome-Azienda') as HTMLInputElement;
    const settoreDiBusines:HTMLInputElement = document.getElementById('Settore-di-Business') as HTMLInputElement;
    const partitaIVA:HTMLInputElement = document.getElementById('Partita-IVA') as HTMLInputElement;
    const telefono:HTMLInputElement = document.getElementById('Telefono') as HTMLInputElement;
    const stato:HTMLInputElement = document.getElementById('Stato') as HTMLInputElement;
    const regione:HTMLInputElement = document.getElementById('Regione') as HTMLInputElement;
    const citta:HTMLInputElement = document.getElementById('Citta') as HTMLInputElement;
    const comune:HTMLInputElement = document.getElementById('Comune') as HTMLInputElement;
    const indirizzo:HTMLInputElement = document.getElementById('Indirizzo') as HTMLInputElement;
    const logoAzienda:HTMLInputElement = document.getElementById('Logo-Azienda') as HTMLInputElement;
    const immagineAziendale1:HTMLInputElement = document.getElementById('Immagine-Aziendale-1') as HTMLInputElement;
    const immagineAziendale2:HTMLInputElement = document.getElementById('Immagine-Aziendale-2') as HTMLInputElement;
    const immagineAziendale3:HTMLInputElement = document.getElementById('Immagine-Aziendale-3') as HTMLInputElement;
    const nomeUtente:HTMLInputElement = document.getElementById('Nome-Utente') as HTMLInputElement;
    const cognomeUtente:HTMLInputElement = document.getElementById('Cognome-Utente') as HTMLInputElement;
    const username:HTMLInputElement = document.getElementById('Username') as HTMLInputElement;
    const password:HTMLInputElement = document.getElementById('Password') as HTMLInputElement;
    const passwordCheck:HTMLInputElement = document.getElementById('Conferma-Password') as HTMLInputElement;
    const email:HTMLInputElement = document.getElementById('Email') as HTMLInputElement;
    const metodoInvioNotifiche:HTMLInputElement = document.getElementById('Metodo-invio-notifiche') as HTMLInputElement;
    const telefonoUser:HTMLInputElement = document.getElementById('Telefono-User') as HTMLInputElement;
    const fusoOrario:HTMLInputElement = document.getElementById('Fuso-orario') as HTMLInputElement;
    const lingua:HTMLInputElement = document.getElementById('Lingua') as HTMLInputElement;
    const gridCheck:HTMLInputElement = document.getElementById('gridCheck') as HTMLInputElement;
     
    if (gridCheck.checked) {
        const emptyField:string[] = [];
        const formItems :HTMLCollectionOf<HTMLInputElement>= document.getElementsByClassName('form-control') as HTMLCollectionOf<HTMLInputElement>;
        const selectItems:HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName('form-select') as HTMLCollectionOf<HTMLInputElement>;
        for (let i:number = 0; i < formItems.length; i++) {
            if (formItems[i].id !== "Logo-Azienda" && formItems[i].id !== "Immagine-Aziendale-1" && formItems[i].id !== "Immagine-Aziendale-2" && formItems[i].id !== "Immagine-Aziendale-3") {
                if (formItems[i].value === "") {
                    emptyField.push(formItems[i].parentElement.querySelector('label').textContent + '  ');
                }
            }
        }
        for (let i:number = 0; i < selectItems.length; i++) {
            if (selectItems[i].value === "Seleziona..." || selectItems[i].value === "Select...") {
                emptyField.push(selectItems[i].id.toString() + '  ');
            }
        }
    //if there are some empty fields they need to be filled else proceed
    if (emptyField.length > 0) {
        language.textContent==='IT'?window.alert('COMPILARE I CAMPI:  ' + emptyField.toString()):window.alert('Fill Fields:  ' + emptyField.toString());
    } else {
      if(password.value===passwordCheck.value){
        //user
        let newUser:UserData;
        newUser.nomeUtente=nomeUtente.value;newUser.cognomeUtente=cognomeUtente.value;newUser.username=username.value;
        newUser.password=password.value;newUser.email=email.value;newUser.metodoInvioNotifiche=metodoInvioNotifiche.value;
        newUser.telefonoUser=telefonoUser.value;newUser.fusoOrario=fusoOrario.value;newUser.lingua=lingua.value;
        //company
        let newCompany:CompanyDetails;
        newCompany.nomeAzienda=nomeAzienda.value;newCompany.settoreDiBusines=settoreDiBusines.value;
        newCompany.partitaIVA=partitaIVA.value;newCompany.telefono=telefono.value;newCompany.stato=stato.value;
        newCompany.regione=regione.value;newCompany.citta=citta.value;newCompany.comune=comune.value;newCompany.indirizzo=indirizzo.value;
        newCompany.logoAzienda=logoAzienda.value;newCompany.immagineAziendale1=immagineAziendale1.value;newCompany.immagineAziendale2=immagineAziendale2.value;
        newCompany.immagineAziendale3=immagineAziendale3.value;newCompany.user=newUser;
        
        nomeUtente.value,cognomeUtente.value,username.value,password.value,
        email.value,metodoInvioNotifiche.value,telefonoUser.value,fusoOrario.value,lingua.value
          printCompany(newCompany);
      } else{
          console.log(password.value +' ' + passwordCheck.value);
          language.textContent==='IT'?window.alert("le password non coincidono!!"):window.alert("the passwords are incorrect!!");
      }
    }
} else {
    language.textContent==='IT'?window.alert("si deve accettare il trattamento dei dati personali!!"):window.alert("you need to accept the personal data treatment!!");
}
}


function printCompany(company:CompanyDetails){
      console.log('AZIENDA: ' + company.nomeAzienda);
      console.log('Settore: '+ company.settoreDiBusines + '  p. IVA: '+ company.partitaIVA + '  Telefono: ' + company.telefono );
      console.log('Indirizzo: ' + company.stato+' ' + company.regione+ ' '+ company.citta+ ' ' + company.comune+ ' '+ company.indirizzo);
      if(company.logoAzienda!==""){
          console.log("logo: " + company.logoAzienda);
      }
      if(company.immagineAziendale1!==""){
        console.log("immagine: " + company.immagineAziendale1);
    }
    if(company.immagineAziendale2!==""){
      console.log("immagine: " + company.immagineAziendale2);
  }
  if(company.immagineAziendale3!==""){
    console.log("immagine: " + company.immagineAziendale3);
}
      console.log('UTENTE: ' + company.user.nomeUtente+ ' '+ company.user.cognomeUtente);
      console.log('username: ' + company.user.username + '   password: '+ company.user.password);
      console.log('email: '+ company.user.email+ ' telefono ' + company.user.nomeUtente+': ' +company.user.telefonoUser);
      console.log('notifiche: '+ company.user.metodoInvioNotifiche + ' fuso orario: '+ company.user.fusoOrario + ' lingua: ' + company.user.lingua);
    
    }


function changeLanguage(language:string){
      if(language==="IT"){
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
          const selectItems:HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName('form-select') as HTMLCollectionOf<HTMLInputElement>;
          for(let i:number=0;i<selectItems.length;i++){
            selectItems[i].placeholder='Select...';
          }

      } else{
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
        const selectItems:HTMLCollectionOf<HTMLInputElement> = document.getElementsByClassName('form-select') as HTMLCollectionOf<HTMLInputElement>;
        for(let i:number=0;i<selectItems.length;i++){
          selectItems[i].placeholder='Seleziona...';
        }

                                    }
          
    }