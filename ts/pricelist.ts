interface ResourcesData {
  resourceNameIta: string;
  resourceNameEng: string;
  resourceOptions: string[];
  resourceComponents: string[];
  showWeeklyMonthlyPrice:boolean[];
  datacenter:DatacenterObj[]
}

interface DatacenterObj{
  title:string;
  optionPrice:number[];
  descriptionIta:string;
  descriptionEng:string;
}                                                                    

let resources: ResourcesData[];

let lines: string;
/*fetch("../data_from_backend/resources.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    resources = data as ResourcesData[];
  //  console.log(resources)
    resourceButtonCreator(resources);
  })*/

  //cancella da qui 

  var url:string = "https://http://127.0.0.1:5500";
var loremIpsumText:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const englishText:string = "This is a plceholder for a text area. It's not supposed to say anything, is just here to take some space as an example for a future real text " +
  "that might be longer or shorter, like the lorem ipsum text but in english to see a different language.";


const ram:ResourcesData={
    resourceNameIta:"RAM",
    resourceNameEng:"RAM",
    resourceOptions:["8GB","16GB","32GB"],
    resourceComponents:["DRAM (Dynamic)","SRAM (Static)"],
    showWeeklyMonthlyPrice:[false,false],
    datacenter:[{
               title:"Datacenter 1",
               optionPrice:[1.4,1.8,2.2],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[1.2,1.3,1.4],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}
const cpu:ResourcesData={
    resourceNameIta:"CPU",
    resourceNameEng:"CPU",
    resourceOptions:["EMC7701","EMC7702","Zeon"],
    resourceComponents:["Core 1/64","Min reservation","Max reservation","Weight - slot"],
    showWeeklyMonthlyPrice:[true,false,false],
    datacenter:[{
               title:"Datacenter 1",  
               optionPrice:[1.4,1.8,2.2],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[1.2,1.4,1.6],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}
const gpu:ResourcesData={
    resourceNameIta:"GPU",
    resourceNameEng:"GPU",
    resourceOptions:["Nvidia GeForce RTX 3060 ","AMD Radeon RX 6800","AMD Radeon RX 6900 XT"],
    resourceComponents:["Min reservation","Max reservation","Weight - slot"],
    showWeeklyMonthlyPrice:[false,false,true],
    datacenter:[{
               title:"Datacenter 1",  
               optionPrice:[2.2,2.6,3.2],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[1.5,2.0,2.5],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}

const storage:ResourcesData={
    resourceNameIta:"Storage",
    resourceNameEng:"Storage",
    resourceOptions:["SSD Flash Drive Arrays. ","Cloud Storage","Backup Software"],
    resourceComponents:["Min reservation","Max reservation","Weight - slot"],
    showWeeklyMonthlyPrice:[false,false,false],
    datacenter:[{
               title:"Datacenter 1",  
               optionPrice:[1.4,1.7,2.0],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[1.2,1.3,1.4],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}
const rete:ResourcesData={
    resourceNameIta:"Rete",
    resourceNameEng:"Cluster",
    resourceOptions:["VPN"],
    resourceComponents:["Prezzo"],
    showWeeklyMonthlyPrice:[true],
    datacenter:[{
               title:"Datacenter 1",  
               optionPrice:[1.5],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[1.3],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}

const connettivita:ResourcesData={
    resourceNameIta:"Connettivit?? Internet",
    resourceNameEng:"Internet Connection",
    resourceOptions:["WiFi","Wlan","WiFi+Wlan"],
    resourceComponents:["Prezzo"],
    showWeeklyMonthlyPrice:[true],
    datacenter:[{
               title:"Datacenter 1",  
               optionPrice:[3.0,3.2,3.5],
               descriptionIta:loremIpsumText,
               descriptionEng:englishText
    },
    {
        title:"Datacenter 2",
        optionPrice:[2.5,2.75,3.0],
        descriptionIta:loremIpsumText,
        descriptionEng:englishText}]
}



resources=[ram,cpu,gpu,storage,rete,connettivita];

resourceButtonCreator(resources);
  //cancella a qui


function resourceButtonCreator(resources: ResourcesData[]) {
  const resourceButtonContainer: HTMLElement = document.getElementById('resources-button');
  let buttonElement: HTMLButtonElement[] = [];
  for (let i = 0; i < resources.length; i++) {
    buttonElement[i] = document.createElement('button');
    buttonElement[i].className += 'btn btn-primary button-white-to-black';
    buttonElement[i].id = resources[i].resourceNameIta;
    buttonElement[i].type = 'button';
    buttonElement[i].innerHTML = resources[i].resourceNameIta;
    buttonElement[i].onclick = function () {
      const resourcesCardContainer = document.getElementById('resources-container');
      //if removes old cards already created when another button is previously pressed, if there are any
      if (resourcesCardContainer.childElementCount > 0) {

        let child = resourcesCardContainer.lastElementChild;

        while (child) {
          resourcesCardContainer.removeChild(child);
          child = resourcesCardContainer.lastElementChild;
        }

      }
      //then the function call the card creator function to create the card with price and description
      resourcesCardCreator(resources[i], resourcesCardContainer)
    };
    //attach the buttons in a row 
    resourceButtonContainer.appendChild(buttonElement[i]);
  }

}






async function resourcesCardCreator(resource: ResourcesData, container: HTMLElement) {
  //the function reads how many datacenter and creates the same nuber of cards cards
  const cardNumber: number = resource.datacenter.length;
  //divElement array of elements where the function will write each card returned by the createCard function
  let divElement: HTMLElement[] = [];
  for (let i = 0; i < cardNumber; i++) {    
    divElement[i] = await createCard(resource,i,container);
   // container.appendChild(divElement[i]);
  }
}

function createCard(cardData:ResourcesData,cardSelector:number,cardContainer:HTMLElement): HTMLElement {
  const title: string=cardData.datacenter[cardSelector].title;
  const buttonsNames: string[]=cardData.resourceOptions;
  const resourceComponent: string[]=cardData.resourceComponents;
  const descriptionIta: string=cardData.datacenter[cardSelector].descriptionIta;
  const descriptionEng: string=cardData.datacenter[cardSelector].descriptionEng;
  const resourcePrice: number[]=cardData.datacenter[cardSelector].optionPrice;
  const isLanguageEng:boolean=document.getElementById('navbar-container').querySelector('.language-button').innerHTML=='IT';

  const row: HTMLElement = document.createElement('div');
  row.className += 'row';
  cardContainer.appendChild(row);
  const cardWrapper: HTMLElement = document.createElement('div');
  cardWrapper.className += 'col d-flex justify-content-center';
  row.appendChild(cardWrapper);
  const card: HTMLElement = document.createElement('div');
  card.className += 'card';
  cardWrapper.appendChild(card);
  var frontFace: HTMLDivElement = document.createElement('div');
  frontFace.className += 'front-face';
  card.appendChild(frontFace);
  const cardTitle: HTMLHeadingElement = document.createElement('h3');
  cardTitle.className += 'front-card-title text-center';
  cardTitle.innerHTML = title;
  frontFace.appendChild(cardTitle);
  const buttonOptionGrid: HTMLElement = document.createElement('div');
  buttonOptionGrid.className += 'd-flex justify-content-evenly';
  frontFace.appendChild(buttonOptionGrid);
  const whiteFrameContainer:HTMLElement=document.createElement('div');
  whiteFrameContainer.className+='container white-frame-container';
  frontFace.appendChild(whiteFrameContainer);
  let buttons: HTMLButtonElement[] = [];
  for (let i = 0; i < buttonsNames.length; i++) {
    buttons[i] = document.createElement('button');
    buttons[i].className += 'btn btn-sm button-red-to-orange';
    buttons[i].innerHTML = buttonsNames[i];
    buttons[i].onclick = function () {
      //if delete white frames created when another button is pressed,if there are any
      const frameContainer:HTMLElement=card.querySelector('.container') as HTMLElement;
      if(frameContainer.childElementCount>0){
        let child=frameContainer.lastElementChild;
        while(child){
          frameContainer.removeChild(child);
          child = frameContainer.lastElementChild;
        }
      }
      whiteFrameCreator(resourcePrice[i], resourceComponent,cardData.showWeeklyMonthlyPrice,card);
    }
    buttonOptionGrid.appendChild(buttons[i]);
  }  

  const buttonFrontFlipperPosition: HTMLElement = document.createElement('div');
  buttonFrontFlipperPosition.className += 'd-flex justify-content-end';
  buttonFrontFlipperPosition.style.width = '100%';
  buttonFrontFlipperPosition.style.position='absolute';
  buttonFrontFlipperPosition.style.bottom='5px';
  frontFace.appendChild(buttonFrontFlipperPosition);
  var buttonFrontFlip: HTMLButtonElement = document.createElement('button');
  buttonFrontFlip.className += "card-flipper-button-front";
  buttonFrontFlip.onclick = function () {
    const targetCard: HTMLElement = card;
    targetCard.style.transform = "rotateY(180deg)";
  }
  var imgFrontFlip: HTMLImageElement = document.createElement('img');
  imgFrontFlip.src = './../img/svg/add_circle_white_24dp.svg';
  buttonFrontFlip.appendChild(imgFrontFlip);
  buttonFrontFlipperPosition.appendChild(buttonFrontFlip);
  //back
  const backFace: HTMLElement = document.createElement('div');
  backFace.className += 'back-face';
  card.appendChild(backFace);
  const backTitle: HTMLHeadingElement = document.createElement('h4');
  backTitle.className += 'back-card-title';
  backTitle.innerHTML = title;
  backFace.appendChild(backTitle);
  var newBackParagraph: HTMLParagraphElement = document.createElement('p');
  newBackParagraph.className += 'back-card-paragraph IT';
  newBackParagraph.innerHTML = descriptionIta;
  if(isLanguageEng){
    newBackParagraph.style.display='none'
  }
  backFace.appendChild(newBackParagraph);
  //english version
  var newBackParagraphEN: HTMLParagraphElement = document.createElement('p');
  newBackParagraphEN.className += 'back-card-paragraph EN';
  newBackParagraphEN.innerHTML = descriptionEng;
  if(!isLanguageEng){
  newBackParagraphEN.style.display = 'none';}
  backFace.appendChild(newBackParagraphEN);
  const buttonBackFlipperPosition: HTMLElement = document.createElement('div');
  buttonBackFlipperPosition.className += 'd-flex justify-content-end';
  buttonBackFlipperPosition.style.width = '100%';
  buttonBackFlipperPosition.style.position='absolute';
  buttonBackFlipperPosition.style.bottom='5px';
  backFace.appendChild(buttonBackFlipperPosition);

  var buttonBackFlip: HTMLButtonElement = document.createElement('button');
  buttonBackFlip.className += "card-flipper-button-back";
  buttonBackFlip.onclick = function () {
    const targetCard: HTMLElement = card;
    targetCard.style.transform = "rotateY(0deg)";
  }
  var imgBackFlip: HTMLImageElement = document.createElement('img');
  imgBackFlip.src = './../img/svg/remove_circle_black_24dp.svg';
  buttonBackFlip.appendChild(imgBackFlip);
  buttonBackFlipperPosition.appendChild(buttonBackFlip);

  const frontHeight: number = frontFace.offsetHeight;
  //console.log('front height detected: ' + frontHeight)
  const backHeight: number = backFace.offsetHeight;
  //console.log('back height detected: ' + backHeight)
  //sets the card height = to the biggest child component
  if (backHeight > frontHeight) {
    //console.log(backHeight);
    card.style.height = backHeight.toString() + 'px';
   // console.log('height written: ' + card.style.height);
  } else {
    //console.log(frontHeight);
    card.style.height = frontHeight.toString() + 'px';
   // console.log('height written: ' + card.style.height);
  }

  return row;
}


function calculatePrice(unitPrice:number):number[]{
  const weeklyPrice = unitPrice * 7;
  const monthlyPrice = unitPrice * 30;
  return [unitPrice,weeklyPrice,monthlyPrice];
}

function whiteFrameCreator(unitPrice: number, resourceComponents: string[],showWeeklyMonthlyPrice:boolean[], card: HTMLElement) {
  const isLanguageEng:boolean=document.getElementById('navbar-container').querySelector('.language-button').innerHTML=='IT';
  const container:HTMLElement=card.querySelector('.container') as HTMLElement;
  const whiteFrameNumber = resourceComponents.length;
  const weeklyPrice = unitPrice * 7;
  const monthlyPrice = unitPrice * 30;
  container.style.height='fit-content';
  for (let i = 0; i < whiteFrameNumber; i++) {
    const whiteFrame: HTMLElement = document.createElement('div');
    whiteFrame.className += 'white-field';
    container.appendChild(whiteFrame);
    var grid: HTMLElement = document.createElement('dl');
    grid.className += "row";
    whiteFrame.appendChild(grid);
    var parsx: HTMLElement = document.createElement('dl');
    parsx.className += "col-sm-3";
    parsx.innerHTML = "<strong>" + resourceComponents[i] + "</strong>"
    var pardxIta = document.createElement('dl');
    pardxIta.className += "col-sm-9 pardxIta";
    pardxIta.innerHTML = "prezzo unitario <strong>" + unitPrice.toFixed(2) + "???</strong>";
    if (showWeeklyMonthlyPrice[i]) {
      pardxIta.innerHTML += "</br>prezzo settimanale <strong>" + weeklyPrice.toFixed(2) + "???</strong> </br>prezzo mensile <strong>" + monthlyPrice.toFixed(2) + "???</strong>"
    }
    if(isLanguageEng){
      pardxIta.style.display='none';
    }
    var pardxEng = document.createElement('dl');
    pardxEng.className += "col-sm-9 pardxEng";
    pardxEng.innerHTML = "unit price <strong>" + unitPrice.toFixed(2) + "???</strong>";
    if(! isLanguageEng){
    pardxEng.style.display='none';}
    if (showWeeklyMonthlyPrice[i]) {
      pardxEng.innerHTML += "</br>weekly price <strong>" + weeklyPrice.toFixed(2) + "???</strong> </br>monthly price <strong>" + monthlyPrice.toFixed(2) + "???</strong>"
    }
    grid.appendChild(parsx); grid.appendChild(pardxIta);grid.appendChild(pardxEng);
  }
  (card.querySelector('.front-face') as HTMLElement).style.height = 'fit-content';
  (card.querySelector('.back-face') as HTMLElement).style.height = 'fit-content';
  const frontHeight = (card.querySelector('.front-face') as HTMLElement).offsetHeight;
  const backHeight = (card.querySelector('.back-face') as HTMLElement).offsetHeight;
  if (frontHeight < backHeight) {
    card.style.height = backHeight.toString() + 'px';
    (card.querySelector('.front-face') as HTMLElement).style.height = backHeight.toString() + 'px';
  } else {
    card.style.height = frontHeight.toString() + 'px';
    (card.querySelector('.back-face') as HTMLElement).style.height = frontHeight.toString() + 'px';

  }
}


function connectionControl(): void {
  var comune: string = (document.getElementById('Comune') as HTMLInputElement).value;
  var indirizzo: string = (document.getElementById('Indirizzo') as HTMLInputElement).value;
  var civico: string = (document.getElementById('Civico') as HTMLInputElement).value;
  // console.log("indirizzo: " +comune+" "+indirizzo+ " "+civico);

  var cardParent: HTMLElement = document.getElementById('connection-container');
  //ciclo che elimina cards precedentemente create se si cambia l indirizzo
  var child: HTMLElement = cardParent.lastElementChild as HTMLElement;
  while (child) {
    console.log("in while");
    cardParent.removeChild(child);
    child = cardParent.lastElementChild as HTMLElement;
  }

  var newdiv: HTMLDivElement = document.createElement('div');
  newdiv.className += 'card';
  var newT: HTMLHeadingElement = document.createElement('h3');
  newT.className += 'text-left';
  newT.innerHTML = "Indirizzo inserito";
  var newp: HTMLParagraphElement = document.createElement('p');
  newp.className += 'text-left';
  newp.innerHTML = "Comune: " + comune + "</br> Indirizzo: " + indirizzo + "</br> N?? civico: " + civico;
  newdiv.appendChild(newT);
  newdiv.appendChild(newp);
  newdiv.style.backgroundColor = "#eeee";
  cardParent.appendChild(newdiv);
}


function changeLanguage(language: string): void {
  
  stickerElementChangeLanguage(language);
  const cardsElements: HTMLCollectionOf<HTMLElement> = (document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>)
  const whiteFrameElements: HTMLCollectionOf<HTMLElement> = (document.getElementsByClassName('white-field') as HTMLCollectionOf<HTMLElement>)
  const buttonElements: HTMLCollectionOf<HTMLElement> = (document.getElementById('resources-button').getElementsByClassName('btn') as HTMLCollectionOf<HTMLElement>)
  const connectionCheckContainer: HTMLElement = document.getElementById('connection-check');
  const containerTopPage: HTMLElement = document.querySelector('.container-fluid.container-top-page');

  if (language === 'EN') {
    for(let i=0;i<buttonElements.length;i++){
      buttonElements[i].innerHTML=resources[i].resourceNameEng;
    }
    for (let i = 0; i < cardsElements.length; i++) {
      (cardsElements[i].querySelector('.back-card-paragraph.IT') as HTMLElement).style.display = 'none';
      (cardsElements[i].querySelector('.back-card-paragraph.EN') as HTMLElement).style.display = '';
    }
for(let i=0;i<whiteFrameElements.length;i++){
  (whiteFrameElements[i].querySelector('.col-sm-9.pardxIta') as HTMLElement).style.display = 'none';
  (whiteFrameElements[i].querySelector('.col-sm-9.pardxEng') as HTMLElement).style.display = '';
}

    connectionCheckContainer.style.display = 'none';
    containerTopPage.querySelector('h1').innerHTML = 'Pricelist';
    containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>and monthly resources cost</p>';
    containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300??? of credit';
    document.getElementById('resources-button').parentElement.querySelector('.container-title').innerHTML='Show Resources';
  } else {
    for(let i=0;i<buttonElements.length;i++){
      buttonElements[i].innerHTML=resources[i].resourceNameIta;
    }
    for (let i = 0; i < cardsElements.length; i++) {
      (cardsElements[i].querySelector('.back-card-paragraph.IT') as HTMLElement).style.display = '';
      (cardsElements[i].querySelector('.back-card-paragraph.EN') as HTMLElement).style.display = 'none';
    }

for(let i=0;i<whiteFrameElements.length;i++){
  (whiteFrameElements[i].querySelector('.col-sm-9.pardxIta') as HTMLElement).style.display = '';
  (whiteFrameElements[i].querySelector('.col-sm-9.pardxEng') as HTMLElement).style.display = 'none';
}
    connectionCheckContainer.style.display = '';
    containerTopPage.querySelector('h1').innerHTML = 'Listino';
    containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>e costo mensile delle risorse</p>';
    containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300??? di credito';
    document.getElementById('resources-button').parentElement.querySelector('.container-title').innerHTML='Mostra le risorse';
  }
}
