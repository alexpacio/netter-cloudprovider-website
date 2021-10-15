
const input = document.querySelector('input');

input.addEventListener('input', updateValue);

function updateValue(e) {

  var input, cards, cardContainer, title, i;
  input=e.target.value.toLowerCase();
  cards = document.getElementsByClassName("card");

  if(input===""){
    console.log("stringa vuota");
    for(i=0;i<cards.length;i++){
      if(i>8){
        cards[i].parentElement.parentElement.style.display = "none";
      }
    }
  } else{
  for (i = 0; i < cards.length; i++) {
    title = cards[i].id.toString().toLowerCase();
   //console.log("titolo id:"+title+ "|| ricerca: "+input);
    if (title.includes(input)) {
      cards[i].parentElement.parentElement.style.display = "";
    } else {
      cards[i].parentElement.parentElement.style.display = "none";
    }
  }
}
}
