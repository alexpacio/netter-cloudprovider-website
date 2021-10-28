const isHomepage:boolean=! window.location.href.includes('/pages/');

var navbar:HTMLElement=document.createElement('nav');
navbar.className+='navbar navbar-expand-custom navbar-dark fixed-top bg-dark';
document.getElementById('navbar-container').appendChild(navbar);
var navbarContainer:HTMLDivElement=document.createElement('div');
navbarContainer.className+='container-fluid';
navbar.appendChild(navbarContainer);
var navbarBrand:HTMLAnchorElement=document.createElement('a');
navbarBrand.className+='navbar-brand';
navbarBrand.href=isHomepage?'./index.html':'./../index.html';
navbarContainer.appendChild(navbarBrand);
var brandImg:HTMLImageElement=document.createElement('img');
brandImg.src=isHomepage?'./img/svg/logonetterULTIMO.svg':'./../img/svg/logonetterULTIMO.svg';
brandImg.style.width='100px';
brandImg.style.height='40px';
navbarBrand.appendChild(brandImg);
var navbarToggler:HTMLButtonElement=document.createElement('button');
navbarToggler.className+='navbar-toggler';
navbarToggler.type='button';
navbarToggler.dataset.bsToggle='collapse';
navbarToggler.dataset.bsTarget='#navbarCollapse';
navbarToggler.ariaAutoComplete="navbarCollapse";//aria-controls="navbarCollapse"
navbarToggler.ariaExpanded="false";
navbarToggler.ariaLabel="Toggle navigation";
navbarContainer.appendChild(navbarToggler);
var togglerIcon:HTMLSpanElement=document.createElement('span');
togglerIcon.className+='navbar-toggler-icon';
navbarToggler.appendChild(togglerIcon);
var collapse:HTMLDivElement=document.createElement('div');
collapse.className+='collapse navbar-collapse';
collapse.id='navbarCollapse';
navbarContainer.appendChild(collapse);
var navbarNav:HTMLUListElement=document.createElement('ul');
navbarNav.className+='navbar-nav me-auto mb-2 mb-md-0';
collapse.appendChild(navbarNav);
//elementi della navbar
//item1-Software
var navItem1:HTMLLIElement=document.createElement('li');
navItem1.className+='nav-item';
var navLink1:HTMLAnchorElement=document.createElement('a');
navLink1.className+='nav-link';
navLink1.href=isHomepage?'./pages/software.html':'./software.html';
navLink1.innerHTML='Software';
navbarNav.appendChild(navItem1);
navItem1.appendChild(navLink1);
//item2-Applicazioni
var navItem2:HTMLLIElement=document.createElement('li');
navItem2.className+='nav-item';
var navLink2:HTMLAnchorElement=document.createElement('a');
navLink2.className+='nav-link';
navLink2.href=isHomepage?'./pages/applications.html':'./applications.html';
navLink2.innerHTML='Applicazioni';
navbarNav.appendChild(navItem2);
navItem2.appendChild(navLink2);
//item3-Dispositivi
var navItem3:HTMLLIElement=document.createElement('li');
navItem3.className+='nav-item';
var navLink3:HTMLAnchorElement=document.createElement('a');
navLink3.className+='nav-link';
navLink3.href=isHomepage?'./pages/devices.html':'./devices.html';
navLink3.innerHTML='Dispositivi';
navbarNav.appendChild(navItem3);
navItem3.appendChild(navLink3);
//item4-Sessioni
var navItem4:HTMLLIElement=document.createElement('li');
navItem4.className+='nav-item';
var navLink4:HTMLAnchorElement=document.createElement('a');
navLink4.className+='nav-link';
navLink4.href=isHomepage?'./pages/sessions.html':'./sessions.html';
navLink4.innerHTML='Sessioni';
navbarNav.appendChild(navItem4);
navItem4.appendChild(navLink4);
//item5-Listino
var navItem5:HTMLLIElement=document.createElement('li');
navItem5.className+='nav-item';
var navLink5:HTMLAnchorElement=document.createElement('a');
navLink5.className+='nav-link';
navLink5.href=isHomepage?'./pages/pricelist.html':'./pricelist.html';
navLink5.innerHTML='Listino';
navbarNav.appendChild(navItem5);
navItem5.appendChild(navLink5);
//item6-Supporto
var navItem6:HTMLLIElement=document.createElement('li');
navItem6.className+='nav-item';
var navLink6:HTMLAnchorElement=document.createElement('a');
navLink6.className+='nav-link';
navLink6.href=isHomepage?'./pages/support.html':'./support.html';
navLink6.innerHTML='Supporto';
navbarNav.appendChild(navItem6);
navItem6.appendChild(navLink6);
//item7-FAQ
var navItem7:HTMLLIElement=document.createElement('li');
navItem7.className+='nav-item';
var navLink7:HTMLAnchorElement=document.createElement('a');
navLink7.className+='nav-link';
navLink7.href=isHomepage?'./pages/faq.html':'./faq.html';
navLink7.innerHTML='FAQ';
navbarNav.appendChild(navItem7);
navItem7.appendChild(navLink7);
//item8-Blog
var navItem8:HTMLLIElement=document.createElement('li');
navItem8.className+='nav-item';
var navLink8:HTMLAnchorElement=document.createElement('a');
navLink8.className+='nav-link';
navLink8.href=isHomepage?'./pages/blog.html':'./blog.html';
navLink8.innerHTML='Blog';
navbarNav.appendChild(navItem8);
navItem8.appendChild(navLink8);
//end items
var dFlex:HTMLFormElement=document.createElement('form');
dFlex.className+='d-flex';
collapse.appendChild(dFlex);
var navbarButton:HTMLButtonElement=document.createElement('button');
navbarButton.className+='btn btn-sm btn-outline-success';
navbarButton.type="submit";
navbarButton.id="navbar-button";
navbarButton.innerHTML='Inizia ora';

var languageButton:HTMLButtonElement=document.createElement('button');
languageButton.className+='btn btn-sm language-button';
languageButton.innerHTML='EN';
languageButton.type='button';
languageButton.onclick=function(){
    changeLanguage(languageButton.textContent);
    languageButton.innerHTML==='EN'?languageButton.innerHTML='IT':languageButton.innerHTML='EN';
}
dFlex.appendChild(languageButton);
dFlex.appendChild(navbarButton);

var navItems:HTMLCollectionOf<HTMLAnchorElement>=document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLAnchorElement>;
var localURL:string=window.location.href;
for(let i:number=0;i<navItems.length;i++){
    if(localURL.toLowerCase()===navItems[i].href.toString().toLowerCase()){
        navItems[i].parentElement.className+=' active';
    }
}

document.getElementById('navbar-container').style.height=navbar.offsetHeight.toString()+'px';


