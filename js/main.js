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

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top-130}, 500);
        return false;
    });
});
