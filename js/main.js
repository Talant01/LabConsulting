$(function(){
    // Popup

    $('.call-btn').click(function(e) {
        e.preventDefault();
        $('#popup1').arcticmodal();
    });

    // Hamburger

    $('.menu-open').click(function(){
        $('.menu-show').toggleClass('d-none order-menu');
        $('.menu').toggleClass('menu-collapse');
    });

    $('.menu-collapse li a').click(function(){
        $('.menu-show').toggleClass('d-none order-menu');
        $('.menu').toggleClass('menu-collapse');
    });

    // SCROLL TO NEXT SECTION

    $('.scroll').click(function(e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body, html').animate({scrollTop: destination}, 800);
    });

    // Parallax

    $('[data-type="background"]').each(function(){
        var $bgobj = $(this); // создаем объект
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
            // Присваиваем значение background-position
            var coords = 'center '+ yPos + 'px';
            // Создаем эффект Parallax Scrolling
            $bgobj.css({ backgroundPosition: coords });
        });
    });
    
});