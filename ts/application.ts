
function applicationsCard(){

  const items = $('.application-cards-columns');
  
  const numItems: number = items.length;
  const perPage: number = 8;
  
items.slice(perPage).hide();
$('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "<",
  nextText: ">",
  onPageClick: function (pageNumber) {
    const showFrom = perPage * (pageNumber - 1);
    const showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
    //
    for (let i: number = 0; i < items.length; i++) {
      const card: HTMLElement = items[i].querySelector('.card');
      (card.querySelector('.front-face') as HTMLElement).style.height = 'fit-content';
      (card.querySelector('.back-face') as HTMLElement).style.height = 'fit-content';
      const frontHeight: number = (card.querySelector('.front-face') as HTMLElement).offsetHeight;
      const backHeight: number = (card.querySelector('.back-face') as HTMLElement).offsetHeight;
      if (frontHeight < backHeight) {
        card.style.height = backHeight.toString() + 'px';
        (card.querySelector('.front-face') as HTMLElement).style.height = backHeight.toString() + 'px';
      } else {
        card.style.height = frontHeight.toString() + 'px';
        (card.querySelector('.back-face') as HTMLElement).style.height = frontHeight.toString() + 'px';

      }
    }
  }
})

if(document.querySelector('.btn.btn-sm.language-button').innerHTML=='IT'){
  changeLanguage('EN')
}
console.log('end app pagination')
}

const input: HTMLInputElement = document.querySelector('#myFilter');
input.addEventListener('input', cardSearch);

function cardSearch(e: Event): void {
  //console.log((e.target as HTMLInputElement).value);
  const input: string = (e.target as HTMLInputElement).value.toLowerCase();
  const cards: HTMLCollectionOf<HTMLDivElement> = (document.getElementsByClassName("card") as HTMLCollectionOf<HTMLDivElement>);
  let title: string;
  let i: number;
  //if that prints back the cards once you delete the deleted cards
  //else if there some key tiped in the search bar then displays teh cards that contain in the title the key tiped
  if (input === "") {
    const activePages: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('active') as HTMLCollectionOf<HTMLElement>;
    var page: number = 0;
    //cicle for used to get page number into page variable
    for (i = 0; i < activePages.length; i++) {
      var text: string = (activePages[i].children[0] as HTMLElement).textContent;
      if (!(text === '&lt;') && !(text === '&gt;')) {
        page = parseInt(text);
      }
    }
    //for that displays all cards and then hides the cards of previous and further pages
    for (i = 0; i < cards.length; i++) {
      cards[i].parentElement.parentElement.style.display = "";
      if (i < ((page - 1) * 8) || (page * 8) <= i) {
        cards[i].parentElement.parentElement.style.display = "none";
      }
    }
  } else {
    for (i = 0; i < cards.length; i++) {
      title = (cards[i].querySelector('.front-card-title.text-center.IT') as HTMLElement).style.display === 'none' ?
        (cards[i].querySelector('.front-card-title.text-center.EN') as HTMLElement).textContent.toLowerCase() :
        (cards[i].querySelector('.front-card-title.text-center.IT') as HTMLElement).textContent.toLowerCase();
      // console.log("titolo "+title+ "|| ricerca: "+input);
      if (title.includes(input)) {
        cards[i].parentElement.parentElement.style.display = "";
        const card: HTMLElement = cards[i];
        (card.querySelector('.front-face') as HTMLElement).style.height = 'fit-content';
        (card.querySelector('.back-face') as HTMLElement).style.height = 'fit-content';
        const frontHeight: number = (card.querySelector('.front-face') as HTMLElement).offsetHeight;
        const backHeight: number = (card.querySelector('.back-face') as HTMLElement).offsetHeight;
        if (frontHeight < backHeight) {
          card.style.height = backHeight.toString() + 'px';
          (card.querySelector('.front-face') as HTMLElement).style.height = backHeight.toString() + 'px';
        } else {
          card.style.height = frontHeight.toString() + 'px';
          (card.querySelector('.back-face') as HTMLElement).style.height = frontHeight.toString() + 'px';
        }

      } else {
        cards[i].parentElement.parentElement.style.display = "none";
      }
    }
  }
}


function changeLanguage(language: string): void {
  appCardChangeLanguage(language);
  stickerElementChangeLanguage(language);
  const containerTopPage: HTMLElement = document.querySelector('.container-top-page') as HTMLElement;
  const applicationContainer: HTMLElement = document.querySelector('.container.container-vertical-padding.my-4.w-100') as HTMLElement;
  const coloredBar: HTMLElement = document.querySelector('.colored-bar') as HTMLElement;
  if (language === 'EN') {
    containerTopPage.querySelector('h1').innerHTML = 'Explore our Applications';
    containerTopPage.querySelector('p').innerHTML = 'Solutions</br> for everyday activities';
    containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300€ of credit';
    applicationContainer.querySelector('h2').innerHTML = 'Applications';
    applicationContainer.querySelector('input').placeholder = 'Applications search..';
    (coloredBar.querySelector('p.container-title') as HTMLElement).innerHTML = 'Two of the main Netter platform functions.';
    (coloredBar.querySelector('p.bar-paragraph') as HTMLElement).innerHTML = 'Thanks to Angular is possible to setup, or import a set of instructions </br>' +
      'to perform automatically routine or sporadical operation ,</br>' +
      'like virus scan, software update controll and more.';
  } else {
    containerTopPage.querySelector('h1').innerHTML = 'Esplora le nostre Applicazioni';
    containerTopPage.querySelector('p').innerHTML = 'Soluzioni ideate </br> per le attività di tutti i giorni';
    containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300€ di credito';
    applicationContainer.querySelector('h2').innerHTML = 'Applicazioni';
    applicationContainer.querySelector('input').placeholder = 'Cerca applicazioni..';
    (coloredBar.querySelector('p.container-title') as HTMLElement).innerHTML = 'Due delle principali funzioni della piattaforma Netter.';
    (coloredBar.querySelector('p.bar-paragraph') as HTMLElement).innerHTML = 'Grazie ad angular è possibile impostare, o importare, set di istruzioni </br>' +
      ' per svolgere in maniera automatizzata operazioni di routine o una tantum,</br>' +
      'come scansionare antivirus,controllo aggiornamento software e tanto altro.</p>';
  }

}