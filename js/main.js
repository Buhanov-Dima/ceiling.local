$(document).ready(function(){
	$(".slaider").owlCarousel({
		loop:true,
    	margin: 10,
        responsive:{
            320:{
                items:3
            },
            576:{
                items:5
            },
            993:{
                items:8
            },
            1200:{
                items:13
            }
        }  
	});

    $(".slaider-2").owlCarousel({
        loop:true,
        margin: 10,
        items: 1
    });

    $(".slaider-main").owlCarousel({
        loop:true,
        margin: 10,
        items: 1
    });

    $('.tab_box3 a').click(function(e) {
        e.preventDefault();
        $('.tab_box3 .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab_content3').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });

    $('.tab_box2 a').click(function(e) {
        e.preventDefault();
        $('.tab_box2 .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab_content-2').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });

    $('.tab_box a').click(function(e) {
        e.preventDefault();
        $('.tab_box .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab_content').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });

    $(".top-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });


    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       40,          // default
        mobile:       false,       // default
        live:         true        // default
      });
      wow.init();


    $('form').on('submit', sendEmail);



    function sendEmail (e) {
        e.preventDefault();
        var $form = $(this);
        var hasError = false;

        var $nameInput = $form.find('input[name="name"]');
        var $phoneInput = $form.find('input[name="phone"]');

        var valPhone = $phoneInput.length > 0 ? $phoneInput.val() : '';
        var valName = $nameInput.length > 0 ? $nameInput.val() : '';

        if (valPhone == '' || valPhone == "+7 (999) 999-99-99") {
            $phoneInput.addClass('invalid_text_field');
            hasError = true;
        }
        setTimeout(function(){
            $form.find('.invalid_text_field').removeClass('invalid_text_field');
        }, 3000);
        if (hasError) {
            return false;
        }
        var obj = {
            name: valName,
            phone: valPhone,
        };
        $.ajax({
            type: "POST",
            url: "/mailpost.php",
            data: obj,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            beforeSend: function(){
            },
            success: function(html){
                $.fancybox.close(true);
                $.fancybox.open({src  : '#popup-modal-2', type : 'inline',});
                setTimeout(function(){
                    $.fancybox.close(true);
                }, 2000);
                $nameInput.val("");
                $phoneInput.val("");
            },
        });
    }


});

if ($(window).width()>768) {
    $(window).scroll(function(){
        if ($(window).scrollTop() > $("#b2").offset().top) {
            $('.top-menu').addClass('fixed');
        }
        else {
            $('.top-menu').removeClass('fixed');
        };
    });
}


