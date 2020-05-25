/*$( document ).ready(function() {



    let sizer='.grid-sizer';
let grid = $('.grid');

grid.imagesLoaded(function(){
    grid.masonry({
        itemSelector: '.grid-item ',
        columnWidth: sizer,
        percentPosition: true
    });
});

});*/

/*

var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
});
*/


/*

        let  $container = $('.grid');
        $container.imagesLoaded(function () {
            $container.masonry({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item'
            });
        });

*/
/*
let  $grid = $('.grid').imagesLoaded( function() {

    $grid.masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true
    });
});*/

    $('grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 370
    })


