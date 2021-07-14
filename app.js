const menuLinkClick = () => {
    $('.navbar__logo-wrapper,.menu__link').on('click', function () {

        $('body, html').animate({
            scrollTop: $('[data-section=' + $(this).attr('id') + ']').offset().top
        }, 1000);

    });
}

const app = () => {
    menuLinkClick();
}

app();


new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    gap: 0,
    animationDuration: 800,
}).mount();