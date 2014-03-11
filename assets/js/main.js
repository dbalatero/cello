function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 500;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

$('nav .link-2').click(function () {
    event.preventDefault();
    scrollToElement('#about');
});

$('nav .link-3').click(function () {
    event.preventDefault();
    scrollToElement('#value');
});

$('nav .link-4').click(function () {
    event.preventDefault();
    scrollToElement('#location');
});

