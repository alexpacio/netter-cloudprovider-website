
   var items=$('.application-cards-columns');
   var numItems=items.length;
   var perPage= 8;
   items.slice(perPage).hide();

   $('#pagination-container').pagination({
     items:numItems,
     itemsOnPage:perPage,
     prevText:"<",
     nextText:">",
     onPageClick:function(pageNumber){
       var showFrom=perPage*(pageNumber-1);
       var showTo=showFrom+perPage;
       items.hide().slice(showFrom,showTo).show();
     }
   })
   

const input = document.querySelector('input');
input.addEventListener('input', cardSearch);

function cardSearch(e) {

  var input, cards, title, i;
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
    title = cards[i].querySelector('.front-card-title.text-center.IT').style.display==='none'?
            cards[i].querySelector('.front-card-title.text-center.EN').textContent.toLowerCase():
            cards[i].querySelector('.front-card-title.text-center.IT').textContent.toLowerCase();
  // console.log("titolo id:"+title+ "|| ricerca: "+input);
    if (title.includes(input)) {
      cards[i].parentElement.parentElement.style.display = "";
    } else {
      cards[i].parentElement.parentElement.style.display = "none";
    }
  }
}
}


function changeLanguage(language){
    console.log(language);
    cardChangeLanguage(language);
   
  }