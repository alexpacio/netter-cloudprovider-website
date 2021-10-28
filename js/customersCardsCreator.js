const customerImgUrl1 = "./img/svg/client1.svg";
const customerImgUrl2 = "./img/svg/client2.svg";
const customerImgUrl3 = "./img/svg/client3.svg";
const customerImgUrl4 = "./img/svg/client4.svg";
const customerUrl1 = "http://google.com";
const customerUrl2 = "http://google.com";
const customerUrl3 = "http://google.com";
const customerUrl4 = "http://google.com";
customerCard("Customer 1", customerUrl1, customerImgUrl1, "description");
customerCard("Customer 2", customerUrl2, customerImgUrl2, "description");
customerCard("Customer 3", customerUrl3, customerImgUrl3, "description");
customerCard("Customer 4", customerUrl4, customerImgUrl4, "description");
function customerCard(title, customerUrl, ImgUrl, Paragraph) {
    var newCol = document.createElement('div');
    newCol.className += 'col d-flex justify-content-center';
    document.getElementById('customer-card-container').appendChild(newCol);
    //card
    var newCard = document.createElement('div');
    newCard.className += 'card customer-card';
    newCard.onclick = function () {
        window.location.href = customerUrl.toString();
    };
    newCol.appendChild(newCard);
    var newT = document.createElement('h3');
    newT.className += 'text-center customer-title';
    newT.innerHTML = title.toString();
    newCard.appendChild(newT);
    var newGrid = document.createElement('div');
    newGrid.className += 'row';
    newCard.appendChild(newGrid);
    var newParagraphCol = document.createElement('div');
    newParagraphCol.className += 'col-6';
    newGrid.appendChild(newParagraphCol);
    var newP = document.createElement('p');
    newP.className += 'customer-paragraph';
    newP.innerHTML = Paragraph.toString();
    newParagraphCol.appendChild(newP);
    var newImgCol = document.createElement('div');
    newImgCol.className += 'col-6 d-flex justify-content-center';
    newGrid.appendChild(newImgCol);
    var customerImg = document.createElement('img');
    customerImg.src = ImgUrl.toString();
    customerImg.alt = "Avatar";
    customerImg.style.width = "100px";
    customerImg.style.height = "100px";
    newImgCol.appendChild(customerImg);
}
