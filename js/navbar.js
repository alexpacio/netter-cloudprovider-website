var navbar=document.createElement('nav');
navbar.className+='navbar navbar-expand-custom navbar-dark fixed-top bg-dark';
document.getElementById('navbar-container').appendChild(navbar);
var navbarContainer=document.createElement('div');
navbarContainer.className+='container-fluid';
navbar.appendChild(navbarContainer);
var navbarBrand=document.createElement('a');
navbarBrand.className+='navbar-brand';
navbarBrand.href='file:///home/manse/git/netter/netter-cloudprovider-website/index.html';
navbarContainer.appendChild(navbarBrand);
var brandImg=document.createElement('img');
brandImg.src='file:///home/manse/git/netter/netter-cloudprovider-website/img/svg/logonetterULTIMO.svg';
brandImg.style.width='100px';
brandImg.style.height='40px';
navbarBrand.appendChild(brandImg);
var navbarToggler=document.createElement('button');
navbarToggler.className+='navbar-toggler';
navbarToggler.type='button';
navbarToggler.dataset.bsToggle='collapse';
navbarToggler.dataset.bsTarget='#navbarCollapse';
navbarToggler.ariaControls="navbarCollapse";
navbarToggler.ariaExpanded="false";
navbarToggler.ariaLabel="Toggle navigation";
navbarContainer.appendChild(navbarToggler);
var togglerIcon=document.createElement('span');
togglerIcon.className+='navbar-toggler-icon';
navbarToggler.appendChild(togglerIcon);
var collapse=document.createElement('div');
collapse.className+='collapse navbar-collapse';
collapse.id='navbarCollapse';
navbarContainer.appendChild(collapse);
var navbarNav=document.createElement('ul');
navbarNav.className+='navbar-nav me-auto mb-2 mb-md-0';
collapse.appendChild(navbarNav);
//elementi della navbar
//item1-Software
var navItem1=document.createElement('li');
navItem1.className+='nav-item';
var navLink1=document.createElement('a');
navLink1.className+='nav-link';
navLink1.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/software.html';
navLink1.innerHTML='Software';
navbarNav.appendChild(navItem1);
navItem1.appendChild(navLink1);
//item2-Applicazioni
var navItem2=document.createElement('li');
navItem2.className+='nav-item';
var navLink2=document.createElement('a');
navLink2.className+='nav-link';
navLink2.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/applications.html';
navLink2.innerHTML='Applicazioni';
navbarNav.appendChild(navItem2);
navItem2.appendChild(navLink2);
//item3-Dispositivi
var navItem3=document.createElement('li');
navItem3.className+='nav-item';
var navLink3=document.createElement('a');
navLink3.className+='nav-link';
navLink3.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/devices.html';
navLink3.innerHTML='Dispositivi';
navbarNav.appendChild(navItem3);
navItem3.appendChild(navLink3);
//item4-Sessioni
var navItem4=document.createElement('li');
navItem4.className+='nav-item';
var navLink4=document.createElement('a');
navLink4.className+='nav-link';
navLink4.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/sessions.html';
navLink4.innerHTML='Sessioni';
navbarNav.appendChild(navItem4);
navItem4.appendChild(navLink4);
//item5-Listino
var navItem5=document.createElement('li');
navItem5.className+='nav-item';
var navLink5=document.createElement('a');
navLink5.className+='nav-link';
navLink5.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/pricelist.html';
navLink5.innerHTML='Listino';
navbarNav.appendChild(navItem5);
navItem5.appendChild(navLink5);
//item6-Supporto
var navItem6=document.createElement('li');
navItem6.className+='nav-item';
var navLink6=document.createElement('a');
navLink6.className+='nav-link';
navLink6.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/support.html';
navLink6.innerHTML='Supporto';
navbarNav.appendChild(navItem6);
navItem6.appendChild(navLink6);
//item7-FAQ
var navItem7=document.createElement('li');
navItem7.className+='nav-item';
var navLink7=document.createElement('a');
navLink7.className+='nav-link';
navLink7.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/faq.html';
navLink7.innerHTML='FAQ';
navbarNav.appendChild(navItem7);
navItem7.appendChild(navLink7);
//item8-Blog
var navItem8=document.createElement('li');
navItem8.className+='nav-item';
var navLink8=document.createElement('a');
navLink8.className+='nav-link';
navLink8.href='file:///home/manse/git/netter/netter-cloudprovider-website/pages/blog.html';
navLink8.innerHTML='Blog';
navbarNav.appendChild(navItem8);
navItem8.appendChild(navLink8);
//end items
var dFlex=document.createElement('form');
dFlex.className+='d-flex';
collapse.appendChild(dFlex);
var navbarButton=document.createElement('button');
navbarButton.className+='btn btn-sm btn-outline-success';
navbarButton.type="submit";
navbarButton.id="navbar-button";
navbarButton.innerHTML='Inizia ora';
dFlex.appendChild(navbarButton);

var items=document.getElementsByClassName('nav-link');
var localURL=window.location.href;
for(i=0;i<items.length;i++){
    if(localURL.toString()===items[i].href.toString()){
        items[i].parentElement.className+=' active';
    }
}

document.getElementById('navbar-container').style.height=navbar.offsetHeight.toString()+'px';