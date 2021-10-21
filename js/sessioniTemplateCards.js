const ubuntuTitle='Ubuntu Linux 20.04 LTS';
const ubuntuDescription='<strong>Edizione:</strong>64bit Italian</br>'+
'<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>'+
'<strong>RAM fissa:</strong>4096';
const oracleTitle='Oracle Linux 8';
const oracleDescription='<strong>Edizione:</strong>64bit Italian</br>'+
'<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>'+
'<strong>RAM fissa:</strong>4096';
const windowsTitle='Windows Server 2022';
const windowsDescription='<strong>Edizione:</strong>64bit Italian</br>'+
'<strong>Ambiente di virtualizzazione:</strong>Mozart 2 core VCPU, 20VCPU</br>'+
'<strong>RAM fissa:</strong>4096';

createTemplateCard(ubuntuTitle,ubuntuDescription);
createTemplateCard(oracleTitle,oracleDescription);
createTemplateCard(windowsTitle,windowsDescription);


function createTemplateCard(title,description){
    var newRow=document.createElement('div');
    newRow.className+='row';
    document.getElementById('template-card-container').appendChild(newRow);
    var newCol=document.createElement('div');
    newCol.className+='col d-flex justify-content-center';
    newRow.appendChild(newCol);
    var newCard=document.createElement('div');
    newCard.className+='card template-card';
    newCol.appendChild(newCard);
    var newTitle=document.createElement('h2');
    newTitle.className+='text-center template-card-title';
    newTitle.innerHTML=title.toString();
    newCard.appendChild(newTitle);
    //template frame
    var newTemplateFrame=document.createElement('div');
    newTemplateFrame.className+='template-frame';
    newTemplateFrame.style.display='none';
    var templateTitle=document.createElement('h5');
    templateTitle.className+='template-frame-title';
    templateTitle.innerHTML=title.toString();
    var templateParagraph=document.createElement('p');
    templateParagraph.className+='template-frame-paragraph';
    templateParagraph.innerHTML=description.toString();
    newTemplateFrame.appendChild(templateTitle);
    newTemplateFrame.appendChild(templateParagraph);
    newCard.appendChild(newTemplateFrame);
    var buttonRow=document.createElement('div')
    buttonRow.className+='row';
    newCard.appendChild(buttonRow);
    var col1=document.createElement('div');
    col1.className+='col-6 d-flex justify-content-start';
    buttonRow.appendChild(col1);
    var col2=document.createElement('div');
    col2.className+='col-6 d-flex justify-content-end';
    buttonRow.appendChild(col2);
    //
    var buyButton=document.createElement('button');
    buyButton.type='button';
    buyButton.className='btn btn-sm button-red-card';
    buyButton.innerHTML='Acquista';
    col1.appendChild(buyButton);

    var showTemplateButton=document.createElement('button');
    showTemplateButton.type='button';
    showTemplateButton.className+='btn show-template-button';
    showTemplateButton.innerHTML='Visualizza template';
    var showTemplate=document.createElement('img');
    showTemplate.src='./../img/svg/keyboard_arrow_down_white_24dp.svg';
    showTemplateButton.onclick=function(){
        if(newTemplateFrame.style.display==='none'){
            newTemplateFrame.style.display='';
            showTemplateButton.innerHTML='Nascondi template';
            showTemplate.src="./../img/svg/keyboard_arrow_up_white_24dp.svg";
            showTemplateButton.appendChild(showTemplate);
        } else{
            newTemplateFrame.style.display='none';
            showTemplateButton.innerHTML='Visualizza template';
            showTemplate.src="./../img/svg/keyboard_arrow_down_white_24dp.svg";
            showTemplateButton.appendChild(showTemplate);
        }
    }
    showTemplateButton.appendChild(showTemplate);
    col2.appendChild(showTemplateButton);
}