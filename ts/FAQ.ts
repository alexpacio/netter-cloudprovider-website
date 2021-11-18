createFAQframe("Titolo 1","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
createFAQframe("Titolo 2","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
createFAQframe("Titolo 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
createFAQframe("Titolo 4","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

if(document.querySelector('.btn.btn-sm.language-button').innerHTML=='IT'){
    changeLanguage('EN')
  }


function createFAQframe(title:string,paragraph:string){
var container:HTMLElement=document.getElementById('FAQ-container');
var newrow:HTMLDivElement=document.createElement('div');
newrow.className+='row';
container.appendChild(newrow);
var newcol:HTMLDivElement=document.createElement('div');
newcol.className+='col d-flex justify-content-center';
newrow.appendChild(newcol);
var newFAQframe:HTMLDivElement=document.createElement('div');
newFAQframe.className+='FAQ-frame';
newcol.appendChild(newFAQframe);
var newT:HTMLHeadingElement=document.createElement('h3');
newT.className+='FAQ-frame-title'
newT.innerHTML=title.toString();
newFAQframe.appendChild(newT);
var newP:HTMLParagraphElement=document.createElement('p');
newP.className+='FAQ-frame-paragraph';
newP.innerHTML=paragraph.toString();
newP.style.display="none";
newFAQframe.appendChild(newP);
newFAQframe.onclick=function(){
    var FAQitems:HTMLCollectionOf<HTMLElement>=document.getElementsByClassName('FAQ-frame-paragraph') as HTMLCollectionOf<HTMLElement>;
    for(let i:number=0;i<FAQitems.length;i++){
        FAQitems[i].style.display="none";
    }
    ((this as HTMLElement).querySelector('.FAQ-frame-paragraph') as HTMLElement).style.display="contents";
}
}
