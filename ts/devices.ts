
//declare function stickerElementChangeLanguage(language:string);
const descriptionEN:string = "This is a plceholder for a text area. It's not supposed to say anything, is just here to take some space as an example for a future real text " +
  "that might be longer or shorter, like the lorem ipsum text but in english to see a different language.";

var loremIpsumText:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d";


const imgUrl1:string='./../img/svg/autoconfigurante.svg';
const imgUrl2:string='./../img/svg/semplicita.svg';
const imgUrl3:string='./../img/svg/sicuro.svg';
const imgUrl4:string='./../img/svg/veloce.svg';
const imgUrl5:string='./../img/svg/autoconfigurante.svg';
const imgUrl6:string='./../img/svg/autoconfigurante.svg';


createDeviceFlipCard("flip-card-container","Autoconfigurante","Self-configuring",imgUrl1, loremIpsumText,descriptionEN);
createDeviceFlipCard("flip-card-container","Smart","Smart",imgUrl2, loremIpsumText,descriptionEN);
createDeviceFlipCard("flip-card-container","Veloce","Fast",imgUrl3, loremIpsumText,descriptionEN);
createDeviceFlipCard("flip-card-container","Sicuro","Secure",imgUrl4, loremIpsumText,descriptionEN);
createDeviceFlipCard("flip-card-container-2","Componenti scalabili","Scalable Components",imgUrl5, loremIpsumText,descriptionEN);
createDeviceFlipCard("flip-card-container-2","Senori per consultare dati in uscita","Sensor to check output data",imgUrl6, loremIpsumText,descriptionEN);




function createDeviceFlipCard(parentEl:string,titleIT:string,titleEN:string,imgLink:string,backFaceParagraphIT:string,backFaceParagraphEN:string):void{
var newCol:HTMLDivElement=document.createElement('div');
newCol.className+='col d-flex justify-content-center app-column';
document.getElementById(parentEl.toString()).appendChild(newCol);
//card
var newCard:HTMLDivElement=document.createElement('div');
newCard.className+='card';
newCol.appendChild(newCard);
//front
var newFrontFace:HTMLDivElement=document.createElement('div');
newFrontFace.className+='front-face';
var newGrid:HTMLDivElement=document.createElement('div');
newGrid.className+='d-flex justify-content-center';
newFrontFace.appendChild(newGrid);
var newFrontImg:HTMLImageElement=document.createElement('img');
newFrontImg.className+='icon-img';
newFrontImg.src=imgLink.toString();
newGrid.appendChild(newFrontImg)
var newFrontTitle:HTMLParagraphElement=document.createElement('p');
newFrontTitle.className+='text-center icon-card-front-title IT';
newFrontTitle.innerHTML=titleIT.toString();
newFrontTitle.style.paddingBottom='30px';
newFrontFace.appendChild(newFrontTitle);
  //english version
  var newFrontTitleEN :HTMLParagraphElement= document.createElement('p');
  newFrontTitleEN.className += 'text-center icon-card-front-title EN';
  newFrontTitleEN.innerHTML = titleEN.toString();
  newFrontTitleEN.style.display='none';
  newFrontFace.appendChild(newFrontTitleEN);
   //en
var buttonFrontFlip:HTMLButtonElement=document.createElement('button');
buttonFrontFlip.className+="card-flipper-button-front";
buttonFrontFlip.onclick=function () {
  const targetCard :HTMLElement= deviceLookForCardElement(this as HTMLElement);
  targetCard.style.transform = "rotateY(180deg)";
}
var imgFrontFlip:HTMLImageElement=document.createElement('img');
imgFrontFlip.src="./../img/svg/add_circle_black_24dp.svg"
buttonFrontFlip.appendChild(imgFrontFlip);
buttonFrontFlip.style.position='absolute';
buttonFrontFlip.style.bottom='5px';
buttonFrontFlip.style.right='5px';
newFrontFace.appendChild(buttonFrontFlip);
newCard.appendChild(newFrontFace);

const frontHeight:number=newFrontFace.offsetHeight;
//back
var newBackFace:HTMLDivElement=document.createElement('div');
newBackFace.className+='back-face';
newCard.appendChild(newBackFace);
var newBackTitle:HTMLHeadingElement=document.createElement('h5');
newBackTitle.className+='icon-card-back-title IT';
newBackTitle.innerHTML=titleIT.toString();
newBackFace.appendChild(newBackTitle);
  //english version
  var newBackTitleEN:HTMLHeadingElement = document.createElement('h5');
  newBackTitleEN.className += 'icon-card-back-title EN';
  newBackTitleEN.innerHTML = titleEN.toString();
  newBackTitleEN.style.display='none';
  newBackFace.appendChild(newBackTitleEN);
  //en
var newBackParagraph:HTMLParagraphElement=document.createElement('p');
newBackParagraph.className+='icon-card-paragraph IT';
newBackParagraph.innerHTML=backFaceParagraphIT.toString();
newBackFace.appendChild(newBackParagraph);
//english version
var newBackParagraphEN :HTMLParagraphElement= document.createElement('p');
newBackParagraphEN.className += 'icon-card-paragraph EN';
newBackParagraphEN.innerHTML = backFaceParagraphEN.toString();
newBackParagraphEN.style.display='none';
newBackFace.appendChild(newBackParagraphEN);
//en
var backButtonContainer:HTMLDivElement=document.createElement('div');
backButtonContainer.className+='d-flex justify-content-end';
backButtonContainer.style.position='absolute';
backButtonContainer.style.bottom='3px';
backButtonContainer.style.right='5px';
var buttonBackFlip:HTMLButtonElement=document.createElement('button');
buttonBackFlip.className+="card-flipper-button-back";
buttonBackFlip.onclick=function () {
  const targetCard:HTMLElement = deviceLookForCardElement(this as HTMLElement);
  targetCard.style.transform = "rotateY(0deg)";
}
var imgBackFlip:HTMLImageElement=document.createElement('img');
imgBackFlip.src="./../img/svg/remove_circle_white_24dp.svg"
buttonBackFlip.appendChild(imgBackFlip);
newBackFace.appendChild(backButtonContainer);
backButtonContainer.appendChild(buttonBackFlip);

const backHeight:number=newBackFace.offsetHeight;
if(backHeight>frontHeight){
  newCard.style.height=backHeight.toString()+'px';
  newFrontFace.style.height=backHeight.toString()+'px';
} else{
  newCard.style.height=frontHeight.toString()+'px';
  newBackFace.style.height=frontHeight.toString()+'px';
}

}

  function deviceLookForCardElement(element:HTMLElement):HTMLElement {
    if(element.parentElement.className === "card") {
      return element.parentElement;
    }
    return deviceLookForCardElement(element.parentElement);
  }
  
 function changeLanguage(language:string):void{
    deviceCardChangeLanguage(language);
    stickerElementChangeLanguage(language);
    const containerTopPage:HTMLElement=document.querySelector('.container-fluid.container-top-page');
    const coloredBarRed:HTMLElement=document.querySelector('.container-fluid.colored-bar-red');
    const iconCardContainer:HTMLElement=document.getElementById('flip-card-container').parentElement;
    const coloredBarDark:HTMLElement=document.querySelector('.container-fluid.colored-bar-dark');
    const container:HTMLElement=document.getElementById('devices-container-1');
    const iconCardContainer2:HTMLElement=document.getElementById('flip-card-container-2').parentElement;
    
    if(language==='EN'){
     containerTopPage.querySelector('button').innerHTML='Buy';
     coloredBarRed.querySelector('h2').innerHTML='The Device';
     coloredBarRed.querySelector('p').innerHTML='ONE is a Cloud Computer - the term is coined from Netter </br>'+
                                                'to represent a new type of terminals to be placed on your </br>'+
                                                'desk  (even in industrial environments) which it </br>'+
                                                ' replaces the normal Personal Computer'
      
     iconCardContainer.querySelector('h2').innerHTML='Basic functions';
     coloredBarDark.querySelector('p').innerHTML='The device automatically deploys a corporate WiFi network with public access </br>'+
                                                 'and protected. You no longer need an internal Access Point and WiFi Controller by creating an emergency network. </br>'+
                                                 'Wherever you connect you will always have your session with you.';
     coloredBarDark.querySelector('button').innerHTML='Buy';
     container.querySelector('h3').innerHTML='Characteristics';
     container.querySelector('p').innerHTML='Processor QuadCore, SSD</br>'+
                                              'Triple monitor output</br>'+
                                             'Integrated capacitive multitouch display</br>'+
                                             'Two web socket Gigabit, WiFi802.11ac DualBand</br>'+
                                             'Integrated USB peripheral remote software</br>'+
                                            'No VendorLock-in on accessories</br>'+
                                             'Compatible with legacy (LPT e COM) devices</br>'+
                                             'Client RDP Netter owner';
    iconCardContainer2.querySelector('h3').innerHTML='Expandable with';
    } else{
      containerTopPage.querySelector('button').innerHTML='Acquista';
      coloredBarRed.querySelector('h2').innerHTML='Il Dispositivo';
      coloredBarRed.querySelector('p').innerHTML='ONE è un Cloud Computer - termine coniato da Netter </br>'+
                                                 'per rappresentare una inedita tipologia di terminali da collocare </br>'+
                                                 'sulla propria scrivania (anche in ambienti industriali) che sostituisce</br>'+
                                                 'il normale Personal Computer'
       
      iconCardContainer.querySelector('h2').innerHTML='Funzionalità base';
      coloredBarDark.querySelector('p').innerHTML='Il dispositivo distribuisce automaticamente una rete WiFi aziendale con accesso pubblico </br>'+
                                                  'e protetto. Non hai piu bisogno di Access Point e Controller WiFi interni creando una rete di emergenza.</br>'+
                                                  'Ovunque ti connetti avrai sempre la tua sessione con te.';
      coloredBarDark.querySelector('button').innerHTML='Acquista';
      container.querySelector('h3').innerHTML='Caratteristiche';
      container.querySelector('p').innerHTML='Processore QuadCore, SSD</br>'+
                                               'Tripla uscita monitor</br>'+
                                              'Display Multitouch capacitivo integrato</br>'+
                                              'Due porte di rete Gigabit, WiFi802.11ac DualBand</br>'+
                                              'Software di remotizzazione periferiche USB integrato</br>'+
                                             'No VendorLock-in su accessori</br>'+
                                              'Compatibile con periferiche legacy (LPT e COM)</br>'+
                                              'Client RDP propietario Netter';
     iconCardContainer2.querySelector('h3').innerHTML='Espandibile con';}
    
  }

  function deviceCardChangeLanguage(language:string):void{
    const cardItems:HTMLCollectionOf<HTMLElement>=document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;
    for(let i:number=0;i<cardItems.length;i++){
      if(language==='EN'){
       ( cardItems[i].querySelector('.text-center.icon-card-front-title.IT')as HTMLElement).style.display='none';
        (cardItems[i].querySelector('.text-center.icon-card-front-title.EN') as HTMLElement).style.display='';
        (cardItems[i].querySelector('.icon-card-back-title.IT')as HTMLElement).style.display='none';
        (cardItems[i].querySelector('.icon-card-back-title.EN') as HTMLElement).style.display='';
        (cardItems[i].querySelector('.icon-card-paragraph.IT')as HTMLElement).style.display='none';
        (cardItems[i].querySelector('.icon-card-paragraph.EN')as HTMLElement).style.display='';
  
      } else{
        (cardItems[i].querySelector('.text-center.icon-card-front-title.EN') as HTMLElement).style.display='none';
       ( cardItems[i].querySelector('.text-center.icon-card-front-title.IT')as HTMLElement).style.display='';
        (cardItems[i].querySelector('.icon-card-back-title.EN') as HTMLElement).style.display='none';
        (cardItems[i].querySelector('.icon-card-back-title.IT')as HTMLElement).style.display='';
        (cardItems[i].querySelector('.icon-card-paragraph.EN')as HTMLElement).style.display='none';
        (cardItems[i].querySelector('.icon-card-paragraph.IT')as HTMLElement).style.display='';
      }

      const card:HTMLElement=cardItems[i];
    const frontHeight:number=(card.querySelector('.front-face')as HTMLElement).offsetHeight;
    console.log('front height: '+ frontHeight);
    const backHeight:number=(card.querySelector('.back-face') as HTMLElement).offsetHeight;
    console.log('back height: '+ backHeight);
    if(frontHeight<backHeight){
      console.log("front < back  (if)");
      card.style.height=backHeight.toString()+'px';
      (card.querySelector('.front-face')as HTMLElement).style.height='100%';
      console.log('card height: '+ card.offsetHeight);
    }else{
      console.log("front > back    (else)");
      card.style.height=frontHeight.toString()+'px';
      (card.querySelector('.back-face') as HTMLElement).style.height='100%';
      
    }
    }
    document.getElementById('flip-card-container').style.height='fit-content';
    document.getElementById('flip-card-container-2').style.height='fit-content';
  
  }