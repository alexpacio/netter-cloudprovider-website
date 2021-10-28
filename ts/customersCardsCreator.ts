const customerImgUrl1:string="./img/svg/client1.svg";
const customerImgUrl2:string="./img/svg/client2.svg";
const customerImgUrl3:string="./img/svg/client3.svg";
const customerImgUrl4:string="./img/svg/client4.svg";

const customerUrl1:string="http://google.com";
const customerUrl2:string="http://google.com";
const customerUrl3:string="http://google.com";
const customerUrl4:string="http://google.com";


customerCard("Customer 1", customerUrl1,customerImgUrl1 ,"description");
customerCard("Customer 2", customerUrl2,customerImgUrl2 , "description");
customerCard("Customer 3", customerUrl3,customerImgUrl3 , "description");
customerCard("Customer 4", customerUrl4,customerImgUrl4 , "description");


function customerCard(title:string,customerUrl:string, ImgUrl:string ,Paragraph:string):void {
  var newCol:HTMLDivElement = document.createElement('div');
  newCol.className += 'col d-flex justify-content-center';
  document.getElementById('customer-card-container').appendChild(newCol);
  //card
  var newCard:HTMLDivElement = document.createElement('div');
  newCard.className += 'card customer-card';
  newCard.onclick=function(){
    window.location.href=customerUrl.toString();
  }
  newCol.appendChild(newCard);
  var newT:HTMLHeadingElement=document.createElement('h3');
  newT.className+='text-center customer-title';
  newT.innerHTML=title.toString();
  newCard.appendChild(newT);
  var newGrid:HTMLDivElement=document.createElement('div');
  newGrid.className+='row';
  newCard.appendChild(newGrid);
  var newParagraphCol:HTMLDivElement=document.createElement('div');
  newParagraphCol.className+='col-6';
  newGrid.appendChild(newParagraphCol);
  var newP:HTMLParagraphElement=document.createElement('p');
  newP.className+='customer-paragraph'
  newP.innerHTML=Paragraph.toString();
  newParagraphCol.appendChild(newP);
  var newImgCol:HTMLDivElement=document.createElement('div');
  newImgCol.className+='col-6 d-flex justify-content-center';
  newGrid.appendChild(newImgCol);
  var customerImg:HTMLImageElement=document.createElement('img');
  customerImg.src=ImgUrl.toString();
  customerImg.alt="Avatar";
  customerImg.style.width="100px";
  customerImg.style.height="100px";
  newImgCol.appendChild(customerImg);
}