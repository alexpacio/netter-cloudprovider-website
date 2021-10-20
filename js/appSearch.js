
const input = document.querySelector('input');

input.addEventListener('input', updateValue);

function updateValue(e) {

  var input, cards, cardContainer, title, i;
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
