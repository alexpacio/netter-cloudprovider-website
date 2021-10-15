
function changeOrder(event){
    var Selection=event.target.value.toLowerCase();
    var items=document.getElementsByClassName("list-item");
    var cardItems=document.getElementsByClassName("card");
    var optionItems=document.getElementsByClassName("last-update");
    if(Selection==="alfabetico"){
        var arrayOrdinato=cardItems;
       orderArrayId(arrayOrdinato,0,arrayOrdinato.length-1);
       for(i=0;i<items.length;i++){
           console.log(cardItems[i].id+ " ordine: " +items[i].style.order)
       }
       for(i=0;i<items.length;i++){
           var posizione=arraySearchId(arrayOrdinato,cardItems[i].id);
           items[i].style.order=posizione;
       }
       for(i=0;i<items.length;i++){
        console.log(cardItems[i].id+ " ordine: " +items[i].style.order)
    }

    } else if(Selection==="ultimo aggiornamento"){

    for(i=0;i<items.length;i++){
        console.log(optionItems[i].value+ " ordine: " +items[i].style.order)
       }
        var arrayOrdinato=optionItems;
       orderArrayValue(arrayOrdinato,0,arrayOrdinato.length-1);
    
    for(i=0;i<items.length;i++){
        var posizione=arraySearchValue(arrayOrdinato,optionItems[i].value);
        items[i].style.order=posizione;
    }
    for(i=0;i<items.length;i++){
     console.log(optionItems[i].value+ " ordine: " +items[i].style.order)
 }
}
}

function getCardElement(listItem){
    var element=listItem.querySelector('.card');
    return element;
}
function getOptionElement(listItem){
    var element=listItem.querySelector('option');
    return element;
}

function arraySearchId(array,element){
    for(i=0;i<array.length;i++){
        if(array[i].id===element){
            return i;
        }
    }
}
function arraySearchValue(array,element){
    for(i=0;i<array.length;i++){
        if(array[i].value===element){
            return i;
        }
    }
}

function orderArrayValue(array,start,end){
    if(start<end){
        mid=partitionValue(array,start,end);
        orderArrayValue(array, start, mid-1);
        orderArrayValue(array,mid+1,end);
    }

}

function partitionValue(array,start,end){
    var pivot=array[start].value;
    do{
        while(start<end && array[end].value>=pivot){
            end--;
        }
        if(start<end){
            array[start].value=array[end].value;
            while(start<end && array[start].value<=pivot){
                start++;
            }
            if(start<end){
                array[end].value=array[start].value;
            }
        }

    }while(start<end);
    array[start].value=pivot;
    return start;
}

function orderArrayId(array,start,end){
    if(start<end){
        mid=partitionId(array,start,end);
        orderArrayId(array, start, mid-1);
        orderArrayId(array,mid+1,end);
    }

}

function partitionId(array,start,end){
    var pivot=array[start].id;
    do{
        while(start<end && array[end].id>=pivot){
            end--;
        }
        if(start<end){
            array[start].id=array[end].id;
            while(start<end && array[start].id<=pivot){
                start++;
            }
            if(start<end){
                array[end].id=array[start].id;
            }
        }

    }while(start<end);
    array[start].id=pivot;
    return start;
}