function changeCard(event){
    var buttonpressed=event.currentTarget;
    var cardParent=document.getElementById('resources-container');
    //cicle that delete the old card if you press another button
    var child = cardParent.lastElementChild; 
        while (child) {
            console.log("in while");
            cardParent.removeChild(child);
            child = cardParent.lastElementChild;
        }
        const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"+
        " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"+
        " laboris nisi ut aliquip ex ea commodo consequat.";
        
      resourceCardCreator(buttonpressed.id,description)
      }

    //js+html that creates the card
function resourceCardCreator(cardTitle,cardDescription){
  var newRow1=document.createElement('div');
  newRow1.className+='row';
  document.getElementById('resources-container').appendChild(newRow1);
  var newCol1=document.createElement('div');
  newCol1.className+='col d-flex justify-content-center';
  newRow1.appendChild(newCol1);

   var datacenter1=document.createElement('div');
   datacenter1.className+='datacenter-1-card';
   newCol1.appendChild(datacenter1);
   var datacenter1Title=document.createElement('h3');
   datacenter1Title.className+='datacenter-1-title';
   datacenter1Title.innerHTML='Datacenter 1:'+ cardTitle.toString();
   datacenter1.appendChild(datacenter1Title);
   var ButtonDflex=document.createElement('div');
   ButtonDflex.className+='d-flex justify-content-around';
   datacenter1.appendChild(ButtonDflex);
   var button1=document.createElement('button');
   button1.className+='btn btn-sm button-red-to-orange';
   button1.innerHTML='EMC 7702';
   ButtonDflex.appendChild(button1);
   var button2=document.createElement('button');
   button2.className+='btn btn-sm button-red-to-orange';
   button2.innerHTML='EMC 7702';
   ButtonDflex.appendChild(button2);
   var button3=document.createElement('button');
   button3.className+='btn btn-sm button-red-to-orange';
   button3.innerHTML='EMC 7702';
   ButtonDflex.appendChild(button3);

    var whiteField=document.createElement('div');
    whiteField.className+='white-field';
    var grid=document.createElement('dl');
    grid.className+="row";
    whiteField.appendChild(grid);
    var parsx=document.createElement('dl');
    parsx.className+="col-sm-3";
    parsx.innerHTML="<strong>Core 1/64</strong>"
    var pardx=document.createElement('dl');
    pardx.className+="col-sm-9";
    pardx.innerHTML="prezzo unitario <strong>00,00€</strong> </br>prezzo settimanale <strong>00,00€</strong> </br>prezzo mensile <strong>00,00€</strong>"
    grid.appendChild(parsx);grid.appendChild(pardx);

    var whiteField1=document.createElement('div');
    whiteField1.className+=('white-field');
    var grid1=document.createElement('dl');
    grid1.className+="row";
    whiteField1.appendChild(grid1);
    var parsx1=document.createElement('dl');
    parsx1.className+="col-sm-3";
    parsx1.innerHTML="<strong>Min reservation</strong>"
    var pardx1=document.createElement('dl');
    pardx1.className+="col-sm-9";
    pardx1.innerHTML="prezzo unitario <strong>00,00€</strong>"
    grid1.appendChild(parsx1);grid1.appendChild(pardx1);

    var whiteField2=document.createElement('div');
    whiteField2.className+=('white-field');
    var grid2=document.createElement('dl');
    grid2.className+="row";
    whiteField2.appendChild(grid2);
    var parsx2=document.createElement('dl');
    parsx2.className+="col-sm-3";
    parsx2.innerHTML="<strong>Max reservation</strong>"
    var pardx2=document.createElement('dl');
    pardx2.className+="col-sm-9";
    pardx2.innerHTML="prezzo unitario <strong>00,00€</strong>"
    grid2.appendChild(parsx2);grid2.appendChild(pardx2);

    var whiteField3=document.createElement('div');
    whiteField3.className+=('white-field');
    var grid3=document.createElement('dl');
    grid3.className+="row";
    whiteField3.appendChild(grid3);
    var parsx3=document.createElement('dl');
    parsx3.className+="col-sm-3";
    parsx3.innerHTML="<strong>Weight-slot</strong>"
    var pardx3=document.createElement('dl');
    pardx3.className+="col-sm-9";
    pardx3.innerHTML="prezzo unitario <strong>00,00€</strong>"
    grid3.appendChild(parsx3);grid3.appendChild(pardx3);
    datacenter1.appendChild(whiteField);
    datacenter1.appendChild(whiteField1);
    datacenter1.appendChild(whiteField2);
    datacenter1.appendChild(whiteField3);
    
    var lastButtonPosition=document.createElement('div');
    lastButtonPosition.className+='d-flex justify-content-end';
    datacenter1.appendChild(lastButtonPosition);
   var showDatacenter2=document.createElement('button');
   showDatacenter2.className += "card-flipper-button-front";
   var imgShowDatacenter = document.createElement('img');
   imgShowDatacenter.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/add_circle_white_24dp.svg"
   showDatacenter2.appendChild(imgShowDatacenter);
   lastButtonPosition.appendChild(showDatacenter2);


  var newRow2=document.createElement('div');
  newRow2.className+='row';
  document.getElementById('resources-container').appendChild(newRow2);
  var newCol2=document.createElement('div');
  newCol2.className+='col d-flex justify-content-center';
  newRow2.appendChild(newCol2);
  const cardWidth=datacenter1.offsetWidth;
  console.log('larghezza cards: ' +cardWidth);

  var datacenterCard2=document.createElement('div');
  datacenterCard2.className+='datacenter-2-card';
  datacenterCard2.style.width=cardWidth.toString()+'px';
  datacenterCard2.style.display='none';
  newCol2.appendChild(datacenterCard2);
  var card2Title=document.createElement('h4');
  card2Title.className+='text-center datacenter-card-2-title';
  card2Title.innerHTML='Datacenter 2 - '+ cardTitle.toString();
  datacenterCard2.appendChild(card2Title);
  var card2Paragraph=document.createElement('p');
  card2Paragraph.className+='datacenter-card-2-paragraph';
  card2Paragraph.innerHTML=cardDescription.toString();
  datacenterCard2.appendChild(card2Paragraph);
  var positionHideButton=document.createElement('div');
  positionHideButton.className+='d-flex justify-content-end';
  datacenterCard2.appendChild(positionHideButton);


  var hideDatacenter2=document.createElement('button');
  hideDatacenter2.className += "card-flipper-button-front";
  var imgHideDatacenter = document.createElement('img');
  imgHideDatacenter.src = "file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/remove_circle_black_24dp.svg"
  hideDatacenter2.appendChild(imgHideDatacenter);
  positionHideButton.appendChild(hideDatacenter2);




  showDatacenter2.onclick = function () {
    datacenterCard2.style.display='';
  }

  hideDatacenter2.onclick = function () {
    datacenterCard2.style.display='none';
  }

}

