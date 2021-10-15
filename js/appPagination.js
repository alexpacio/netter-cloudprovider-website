
   // console.log("script dentro html");
   var items=$('.application-cards-columns');
   //console.log("class pagination:"+items[1].parentElement.className);
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
   