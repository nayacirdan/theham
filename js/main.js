/*TABS SERVICES SWITCHER*/

const tab=document.querySelector('.services-tabs');
let lastTabTitle=document.querySelector('.services-tabs-title.active');
const triangle=document.createElement('div');
triangle.classList.add('services-triangle');
lastTabTitle.append(triangle);

tab.addEventListener('click', (event)=>{

    lastTabTitle.classList.remove('active');
    lastTabTitle=event.target;
    lastTabTitle.classList.add('active');
    lastTabTitle.append(triangle);


    const tabDataSet=(event.target).dataset.tab;
    const contentList=document.querySelectorAll('.services-item');
    let lastContentItem=document.querySelector('.services-item.active');
    lastContentItem.classList.remove('active');

    for (let i=0; i<contentList.length; i++) {
        let contentItem=contentList[i];
        const contentDataSet=contentItem.dataset.tab;

        if (tabDataSet===contentDataSet) {
            contentItem.classList.add('active');
            break;
        } else {
            contentItem.classList.remove('active');
        }
    }
});


/*FILTER*/
let counter=0;

const  sectionPortfolio=document.querySelector('.portfolio-images');
const btnPortfolio=document.querySelector('.btn-portfolio');

function filterArray (imgSources, tabName) {
    const categoryImg=imgSources[tabName];

    if (categoryImg) {

        return categoryImg;
    } else {
        let allImg=[];
        for (let key in imgSources) {
            let categoryKey=imgSources[key];
            allImg=allImg.concat(categoryKey);
        }

        return allImg;
    }
}

function createElements(allImgList, number, tabName) {
    if (allImgList.length<number) {
        $(btnPortfolio).hide();
    } else {
        $(btnPortfolio).show();
    }
    allImgList.forEach((imgSrc, index)=> {
        if (index<=(number-1)) {

            if (tabName===undefined) {
                sectionPortfolio.innerHTML += `<div class="portfolio-img-item active" data-category="${tabName}">
                    <img class="portfolio-img" src=${imgSrc} alt="">
                    <div class="portfolio-item-overlay">
                        <button class="btn-link icon"></button>
                        <button class="btn-search icon"></button>
                        <h3 class="img-title">Creative Design</h3>
                        <span class="img-category">Our works</span>
                      </div>
                </div>`
            }

            else {
                sectionPortfolio.innerHTML += `<div class="portfolio-img-item active" data-category="${tabName}">
                    <img class="portfolio-img" src=${imgSrc} alt="">
                    <div class="portfolio-item-overlay">
                        <button class="btn-link icon"></button>
                        <button class="btn-search icon"></button>
                        <h3 class="img-title">Creative Design</h3>
                        <span class="img-category">${tabName}</span>
                    </div>
                  </div>`
            }
        }
    })
}


function cleanArray (allImgList, number) {
    for(let i=0; i<=(number-1); i++){
        allImgList.shift();
    }
    if(allImgList.length<=number) {
        $(btnPortfolio).hide();
    } else {
        $(btnPortfolio).show();
    }
    return allImgList;
}

let allImages=filterArray(portfolioImgSources,undefined);
createElements(allImages,12,undefined);


/*TABS PORTFOLIO SWITCHER*/

const portfolioTab=$('.portfolio-category-item');
let tabName=undefined;

portfolioTab.on('click', function () {
    const activeItem = $('.portfolio-category-item.active');
    activeItem.removeClass('active');
    $(this).addClass('active');
    tabName = ($(this).attr("data-category"));
    sectionPortfolio.innerHTML='';
    allImages=filterArray(portfolioImgSources,tabName);
    createElements(allImages,12,tabName);
    counter=0;

    return tabName;
});


/*LOAD MORE BTN*/
btnPortfolio.addEventListener('click', ()=>{
    counter+=1;
    $(btnPortfolio).fadeOut();
    $('.loading').show();
    setTimeout(()=>{
        allImages=cleanArray(allImages,12);
        createElements(allImages,12,tabName);

        if (counter===2 || allImages.length<=12) {
            $(btnPortfolio).hide();
        } else {
            $(btnPortfolio).fadeIn();
        }
        $('.loading').hide();
    },2000);
});


/*SLIDER SLICK*/

$('.reviews-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.reviewers-nav'
});

$('.reviewers-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.reviews-carousel',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay:true,
    autoplaySpeed: 5000
});

/*
const $grid = $('.grid');

$grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: 370,

    gutter: 17,
    stagger: 200
});

*/









