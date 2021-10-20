function connectionControl(){
    var comune=document.getElementById('Comune').value;
    var indirizzo=document.getElementById('Indirizzo').value;
    var civico=document.getElementById('Civico').value;
   // console.log("indirizzo: " +comune+" "+indirizzo+ " "+civico);

    var cardParent=document.getElementById('connection-container');
    //ciclo che elimina cards precedentemente create se si cambia l indirizzo
    var child = cardParent.lastElementChild; 
        while (child) {
            console.log("in while");
            cardParent.removeChild(child);
            child = cardParent.lastElementChild;
        }

    var newdiv  = document.createElement('div');
     newdiv.className+='card';
     var newT = document.createElement('h3');
     newT.className+='text-left';
     newT.innerHTML = "Indirizzo inserito";
     var newp = document.createElement('p');
     newp.className+='text-left';
     newp.innerHTML = "Comune: " + comune+ "</br> Indirizzo: " + indirizzo + "</br> N° civico: "+ civico;
     newdiv.appendChild(newT);
     newdiv.appendChild(newp);
     newdiv.style.backgroundColor="#eeee";
     cardParent.appendChild(newdiv);
}