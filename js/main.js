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
});