let blogStringData;
/*fetch("../data_from_backend/blog.json")
.then(function (response) {
  return response.json()
})
.then(function (data) {
    blogStringData = data as BlogData[];
    createBlogPosts(blogStringData);
})*/
//cancella da qui
const article1 = {
    titleIt: "Benvenuto in NETTER",
    titleEn: "Welcome to NETTER",
    articleIt: "Questo è il primo articolo di Netter, per darvi il benvenuto nel nostro sistema," +
        "il nostro servizio è in continuo aggiornamento grazie ai nostri developers che" +
        "continuamente crecano di migliorare il sistema con nuoe applicazioni, device piu semplici da usare ecc..",
    articleEn: "This is Netter first article, to welcome you in the Netter system, our service is " +
        "constantly upgraded thanks to our developers that are working to develop new applications" +
        ", devices easier to use ecc.."
};
blogStringData = [article1];
createBlogPosts(blogStringData);
//cancella a qui
function createBlogPosts(blogData) {
    const container = document.getElementById('container-blog-cards');
    const gridSistem = document.createElement('div');
    gridSistem.className += 'd-flex align-content-around flex-wrap';
    container.appendChild(gridSistem);
    for (let i = 0; i < blogData.length; i++) {
        blogPost(blogData[i], gridSistem);
    }
}
function blogPost(articleInfo, container) {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    container.appendChild(newCard);
    const titleIT = document.createElement('h3');
    titleIT.className = 'article-title IT';
    titleIT.innerHTML = articleInfo.titleIt;
    newCard.appendChild(titleIT);
    const titleEN = document.createElement('h3');
    titleEN.className = 'article-title EN';
    titleEN.innerHTML = articleInfo.titleEn;
    titleEN.style.display = 'none';
    newCard.appendChild(titleEN);
    const articleIT = document.createElement('p');
    articleIT.className = 'article-paragraph IT';
    articleIT.innerHTML = articleInfo.articleIt;
    newCard.appendChild(articleIT);
    const articleEN = document.createElement('p');
    articleEN.className = 'article-paragraph EN';
    articleEN.innerHTML = articleInfo.articleEn;
    articleEN.style.display = 'none';
    newCard.appendChild(articleEN);
    newCard.onclick = function () {
        if (newCard.style.width === '70%') {
            newCard.style.width = '20%';
            newCard.style.height = '200px';
            newCard.style.overflow = 'hidden';
            console.log(newCard.style.width);
            console.log(newCard.style.height);
        }
        else {
            newCard.style.width = '70%';
            newCard.style.height = 'fit-content';
            console.log('in else..');
        }
    };
}
function changeLanguage(language) {
    const containerTopPage = document.querySelector('.container-fluid.container-top-page');
    const cardsItems = document.getElementById('container-blog-cards').getElementsByClassName('card');
    if (language === 'EN') {
        containerTopPage.querySelector('p').innerHTML = 'Read Netter latest news,</br>written by ours developers';
        if (cardsItems.length > 0) {
            for (let i = 0; i < cardsItems.length; i++) {
                cardsItems[i].querySelector('.article-title.IT').style.display = 'none';
                cardsItems[i].querySelector('.article-title.EN').style.display = '';
                cardsItems[i].querySelector('.article-paragraph.IT').style.display = 'none';
                cardsItems[i].querySelector('.article-paragraph.EN').style.display = '';
            }
        }
    }
    else {
        containerTopPage.querySelector('p').innerHTML = 'Leggi le ultime news di Netter,</br> scritte dai nostri developers';
        if (cardsItems.length > 0) {
            for (let i = 0; i < cardsItems.length; i++) {
                cardsItems[i].querySelector('.article-title.IT').style.display = '';
                cardsItems[i].querySelector('.article-title.EN').style.display = 'none';
                cardsItems[i].querySelector('.article-paragraph.IT').style.display = '';
                cardsItems[i].querySelector('.article-paragraph.EN').style.display = 'none';
            }
        }
    }
}
