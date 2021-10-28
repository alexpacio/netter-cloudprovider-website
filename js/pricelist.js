let resources;
let lines;
fetch("../../data_from_backend/resources.txt")
    .then(function (response) {
    return response.text();
})
    .then(function (data) {
    const splitLines = str => str.split(/\r?\n/);
    resources = splitLines(data);
    resources = resources.filter((v) => v != '');
    console.log(data);
    resourceButtonCreator(resources);
});
function resourceButtonCreator(resources) {
    console.log('resources gotten: ' + resources.length);
    for (let i = 0; i < resources.length; i++) {
        console.log(i + ': ' + resources[i]);
    }
}
function connectionControl() {
    var comune = document.getElementById('Comune').value;
    var indirizzo = document.getElementById('Indirizzo').value;
    var civico = document.getElementById('Civico').value;
    // console.log("indirizzo: " +comune+" "+indirizzo+ " "+civico);
    var cardParent = document.getElementById('connection-container');
    //ciclo che elimina cards precedentemente create se si cambia l indirizzo
    var child = cardParent.lastElementChild;
    while (child) {
        console.log("in while");
        cardParent.removeChild(child);
        child = cardParent.lastElementChild;
    }
    var newdiv = document.createElement('div');
    newdiv.className += 'card';
    var newT = document.createElement('h3');
    newT.className += 'text-left';
    newT.innerHTML = "Indirizzo inserito";
    var newp = document.createElement('p');
    newp.className += 'text-left';
    newp.innerHTML = "Comune: " + comune + "</br> Indirizzo: " + indirizzo + "</br> N° civico: " + civico;
    newdiv.appendChild(newT);
    newdiv.appendChild(newp);
    newdiv.style.backgroundColor = "#eeee";
    cardParent.appendChild(newdiv);
}
function getData(event) {
    var buttonpressed = event.currentTarget;
    var cardParent = document.getElementById('resources-container');
    //cicle that delete the old card if you press another button
    var child = cardParent.lastElementChild;
    while (child) {
        console.log("in while");
        cardParent.removeChild(child);
        child = cardParent.lastElementChild;
    }
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
        " et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
        " laboris nisi ut aliquip ex ea commodo consequat.";
    //funzione che prende array datatcenter
    //oggetti json che descrivono gli oggetti datacenter
    resourceCardCreator(buttonpressed.id, description);
}
function resourceCardCreator(cardTitle, cardDescription) {
}
function changeLanguage(language) {
    stickerElementChangeLanguage(language);
    const connectionCheckContainer = document.getElementById('connection-check');
    const containerTopPage = document.querySelector('.container-fluid.container-top-page');
    if (language === 'EN') {
        connectionCheckContainer.style.display = 'none';
        containerTopPage.querySelector('h1').innerHTML = 'Pricelist';
        containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>and monthly resources cost</p>';
        containerTopPage.querySelector('button').innerHTML = 'Create a tenant with 300€ of credit';
    }
    else {
        connectionCheckContainer.style.display = '';
        containerTopPage.querySelector('h1').innerHTML = 'Listino';
        containerTopPage.querySelector('p').innerHTML = 'Datacenter</br>e costo mensile delle risorse</p>';
        containerTopPage.querySelector('button').innerHTML = 'Crea un tenant con 300€ di credito';
    }
}
