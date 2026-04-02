/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {
    // Accordion para la página de Unidades (anteriormente Shop)
    var allPanels = $('.templatemo-accordion > li > ul').hide();
    $('.templatemo-accordion > li > a').click(function() {
        var target = $(this).next();
        if (!target.hasClass('active')) {
            allPanels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
        return false;
    });
});