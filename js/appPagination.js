
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
   