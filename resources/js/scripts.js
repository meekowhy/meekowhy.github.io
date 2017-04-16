$(document).ready(function () {

    $('.projects').waypoint(function (direction) { /*na elemencie klasy projects jesli scroll jest w direction 'down' dolacz clase sticky do elementu nav, i zdejmij jesli direction up*/
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '40px;' /*sprawia ze skrypt zostaje odpalony 60px przed .js--section*/
    });


    $('.hamburger').click(function () {
        var nav = $('.nav-main');
        var icon = $('.hamburger i')
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
            nav.slideToggle(200);
        } else {
            nav.slideToggle(200, function () {
                icon.removeClass('ion-close-round');
                icon.addClass('ion-navicon-round');
            });

        }
        
    });
    

});
