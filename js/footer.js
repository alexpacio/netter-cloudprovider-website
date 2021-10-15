 var footer=document.createElement('footer');
 footer.className+='bg-dark text-center text-lg-start';
 document.getElementById('footer-container').appendChild(footer);
 var textCenter=document.createElement('div');
 textCenter.className+='text-center p-3';
 textCenter.style.color='white';
 footer.appendChild(textCenter);
 textCenter.innerHTML='  © 2021 Netter. Tutti i diritti riservati  ';
 //footer item 1 - Privacy policy
 var footerItem1=document.createElement('a');
 footerItem1.className+='text';
 footerItem1.style.marginLeft='50px';
 footerItem1.href='file:///home/manse/git/netter/netter-cloudprovider-website/other_pages/footer pages/privacy_policy.html';
 footerItem1.innerHTML='Privacy policy';
 textCenter.appendChild(footerItem1);
 //footer item 2 - Termini d'utilizzo
 var footerItem2=document.createElement('a');
 footerItem2.className+='text';
 footerItem2.style.marginLeft='50px';
 footerItem2.href='#';
 footerItem2.innerHTML="Termini d'utilizzo";
 textCenter.appendChild(footerItem2);
 //footer item 3 - Cookie
 var footerItem3=document.createElement('a');
 footerItem3.className+='text';
 footerItem3.style.marginLeft='50px';
 footerItem3.href='#';
 footerItem3.innerHTML='Cookie';
 textCenter.appendChild(footerItem3);
 //footer item 4 - Contatti
 var footerItem4=document.createElement('a');
 footerItem4.className+='text';
 footerItem4.style.marginLeft='50px';
 footerItem4.href='#';
 footerItem4.innerHTML='Contatti';
 textCenter.appendChild(footerItem4);
