
   var items=$('.application-cards-columns');
   var numItems=items.length;
   var perPage= 8;
   items.slice(perPage).hide();

   $('#pagination-container').pagination({
     items:numItems,
     itemsOnPage:perPage,
     prevText:"<",
     nextText:">",
     onPageClick:function(pageNumber){
       var showFrom=perPage*(pageNumber-1);
       var showTo=showFrom+perPage;
       items.hide().slice(showFrom,showTo).show();
       //
       for(i=0;i<items.length;i++){
         card=items[i].querySelector('.card');
       card.querySelector('.front-face').style.height='fit-content';
    card.querySelector('.back-face').style.height='fit-content';
    const frontHeight=card.querySelector('.front-face').offsetHeight;
    const backHeight=card.querySelector('.back-face').offsetHeight;
    if(frontHeight<backHeight){
      card.style.height=backHeight.toString()+'px';
      card.querySelector('.front-face').style.height=backHeight.toString()+'px';
    }else{
      card.style.height=frontHeight.toString()+'px';
      card.querySelector('.back-face').style.height=frontHeight.toString()+'px';

  }
  }
     }
   })
   

const input = document.querySelector('input');
input.addEventListener('input', cardSearch);

function cardSearch(e) {

  var input, cards, title, i;
  input=e.target.value.toLowerCase();
  cards = document.getElementsByClassName("card");
  //if that prints back the cards once you delete the deleted cards
  //else if there some key tiped in the search bar then displays teh cards that contain in the title the key tiped
  if(input===""){
     const activePages=document.getElementsByClassName('active');
     var page=0;
     //cicle for used to get page number into page variable
     for(i=0;i<activePages.length;i++){
       var text=activePages[i].children[0].innerHTML;
       if(text.localeCompare('&lt;')!=0 && text.localeCompare('&gt;')!=0){
         page=text;
       }
     }
    //for that displays all cards and then hides the cards of previous and further pages
    for(i=0;i<cards.length;i++){
      cards[i].parentElement.parentElement.style.display = "";
      if( i<((page-1)*8) || (page*8)<=i   ){
        cards[i].parentElement.parentElement.style.display = "none";
      }
    }
  } else{
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.front-card-title.text-center.IT').style.display==='none'?
            cards[i].querySelector('.front-card-title.text-center.EN').textContent.toLowerCase():
            cards[i].querySelector('.front-card-title.text-center.IT').textContent.toLowerCase();
  // console.log("titolo id:"+title+ "|| ricerca: "+input);
    if (title.includes(input)) {
      cards[i].parentElement.parentElement.style.display = "";
    } else {
      cards[i].parentElement.parentElement.style.display = "none";
    }
  }
}
}


function changeLanguage(language){
    cardChangeLanguage(language);
    stickerElementChangeLanguage(language);
   const containerTopPage=document.querySelector('.container-top-page');
   const applicationContainer=document.querySelector('.container.container-vertical-padding.my-4.w-100');
   const coloredBar=document.querySelector('.colored-bar');
   if(language==='EN'){
    containerTopPage.querySelector('h1').innerHTML='Explore our Applications';
    containerTopPage.querySelector('p').innerHTML='Solutions</br> for everyday activities';
    containerTopPage.querySelector('button').innerHTML='Create a tenant with 300€ of credit';
    applicationContainer.querySelector('h2').innerHTML='Applications';
    applicationContainer.querySelector('input').placeholder='Applications search..';
    coloredBar.querySelector('p.container-title').innerHTML='Two of the main Netter platform functions.';
    coloredBar.querySelector('p.bar-paragraph').innerHTML='Thanks to Angular is possible to setup, or import a set of instructions </br>'+
                                                          'to perform automatically routine or sporadical operation ,</br>'+
                                                          'like virus scan, software update controll and more.';
    }else{
    containerTopPage.querySelector('h1').innerHTML='Esplora le nostre Applicazioni';
    containerTopPage.querySelector('p').innerHTML='Soluzioni ideate </br> per le attività di tutti i giorni';
    containerTopPage.querySelector('button').innerHTML='Crea un tenant con 300€ di credito';
    applicationContainer.querySelector('h2').innerHTML='Applicazioni';
    applicationContainer.querySelector('input').placeholder='Cerca applicazioni..';
    coloredBar.querySelector('p.container-title').innerHTML='Due delle principali funzioni della piattaforma Netter.';
    coloredBar.querySelector('p.bar-paragraph').innerHTML='Grazie ad angular è possibile impostare, o importare, set di istruzioni </br>'+
                                                          ' per svolgere in maniera automatizzata operazioni di routine o una tantum,</br>'+
                                                          'come scansionare antivirus,controllo aggiornamento software e tanto altro.</p>';
    }

  }