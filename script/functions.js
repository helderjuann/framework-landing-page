$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.mobile', function(e) {
            e.stopPropagation();
            $(this).find('ul').slideToggle(100);
        });

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.mobile ul').slideUp(100);
        });
    }

    scrollPage(); 

    function scrollPage() {
        $('nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;
    
            $('html, body').animate({'scrollTop':offSetTop});
            return false;
        });
    }

})
