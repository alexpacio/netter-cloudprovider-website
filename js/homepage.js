
var cardItems=document.getElementsByClassName('application-cards-columns');
var nItemsToShow=4;
for(i=0;i<cardItems.length;i++){
  if(i>nItemsToShow-1){
  cardItems[i].style.display='none';
  }
}

function showAllApplication(event){
  for(i=0;i<cardItems.length;i++){
    cardItems[i].style.display='';
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
  for(i=0;i<cardItems.length;i++){
    if(i>nItemsToShow-1){
    cardItems[i].style.display='none';
    }
  }
  buttonMostraMeno.style.display="none";
  buttonMostraTutte.style.display="block";
}
dFlex.appendChild(buttonMostraMeno);
document.getElementById('flip-card-container').appendChild(dFlex);
}