const menuLinkClick = () => {
    $('.logo,.menu__link').on('click', function () {

        $('body, html').animate({
            scrollTop: $('[data-section=' + $(this).attr('id') + ']').offset().top
        }, 1000);

    });
}

const app = () => {
    menuLinkClick();
}

app();