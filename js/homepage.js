
var cardsContainerItems=document.getElementsByClassName('application-cards-columns');
var nItemsToShow=4;
for(i=0;i<cardsContainerItems.length;i++){
  if(i>nItemsToShow-1){
  cardsContainerItems[i].style.display='none';
  }
}


function showAllApplication(event){
  for(i=0;i<cardsContainerItems.length;i++){
    cardsContainerItems[i].style.display='';
}
var buttonMostraTutte=event.currentTarget;
buttonMostraTutte.style.display="none";
var dFlex=document.createElement('div');
dFlex.className+='d-flex justify-content-center';
var buttonMostraMeno=document.createElement('button');
buttonMostraMeno.className+='btn btn-primary button-black-to-white';
buttonMostraMeno.style.width='fit-content';
buttonMostraMeno.innerHTML='Mostra Meno';
buttonMostraMeno.onclick=function () {
  for(i=0;i<cardsContainerItems.length;i++){
    if(i>nItemsToShow-1){
    cardsContainerItems[i].style.display='none';
    }
  }
  buttonMostraMeno.style.display="none";
  buttonMostraTutte.style.display="block";
}
dFlex.appendChild(buttonMostraMeno);
document.getElementById('flip-card-container').appendChild(dFlex);
}

function changeLanguage(language){
  console.log(language);
  cardChangeLanguage(language);
  const containerTopPage=document.querySelector('.container-fluid.container-top-homepage');
  const containerWithIcons=document.querySelector('.container-with-icons');
  const applicationContainer=document.getElementById('flip-card-container').parentElement;
  const coloredBar=document.querySelector('.container-fluid.colored-bar');
  const customerContainer=document.getElementById('customer-card-container').parentElement;
  if(language==='EN'){
    containerTopPage.querySelector('p').innerHTML='A different Cloud Computing, </br>easy to use, flexible and dynamic.';
    containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[0].innerHTML='Create a tenant with 300€ of credit';
    containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[2].innerHTML='Contact us';
    containerWithIcons.querySelector('h2').innerHTML='Advantages';
    containerWithIcons.querySelector('.semplicity').querySelector('p').innerHTML="Ease of use </br>with automated process.";
    containerWithIcons.querySelector('.performance').querySelector('p').innerHTML='Higher efficency</br>from technology innovations.';
    containerWithIcons.querySelector('.hardware').querySelector('p').innerHTML='Dedicated hardware resources</br>with high performance.';
    applicationContainer.querySelector('h2').innerHTML='Applications';
    coloredBar.querySelector('h2').innerHTML='Try it with some free credit';
    coloredBar.querySelector('p').innerHTML='discover all the benefits of the Netter platform';
    coloredBar.querySelector('button').innerHTML='Start now';
    customerContainer.querySelector('h2').innerHTML='Netter Customers';

  } else{
    containerTopPage.querySelector('p').innerHTML='Un Cloud Computing diverso, </br>facile da usare, flessibile e dinamico.';
    containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[0].innerHTML='Crea un tenant con 300€ di credito';
    containerTopPage.querySelector('.d-grid.gap-2.d-md-block').children[2].innerHTML='Contattaci';
    containerWithIcons.querySelector('h2').innerHTML='Vantaggi';
    containerWithIcons.querySelector('.semplicity').querySelector('p').innerHTML="Semplicità d'uso </br> e automazione dei processi.";
    containerWithIcons.querySelector('.performance').querySelector('p').innerHTML='Maggiorre efficenza </br>da innovazione tecnologiche.';
    containerWithIcons.querySelector('.hardware').querySelector('p').innerHTML='Risorse hardware dedicate</br> ad alte prestazioni.';
    applicationContainer.querySelector('h2').innerHTML='Applicazioni';
    coloredBar.querySelector('h2').innerHTML='Fai una prova con credito gratuito';
    coloredBar.querySelector('p').innerHTML='scopri i vantaggi della piattaforma Netter';
    coloredBar.querySelector('button').innerHTML='Inizia ora';
    customerContainer.querySelector('h2').innerHTML='Elenco clienti che usano Netter';

  }
 
}