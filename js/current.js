"use strict";
/*!
 * Custom Theme JavaScript
 */

function sectionHeight() {
    if (jQuery(window).width() > 768) {
        jQuery('.section-wrap').each(function(){
           var height = $(this).innerHeight();  
           //$(this).css({'height': height + 'px'});
           $(this).find('.col_cont').css({'min-height': height + 'px'});
        });
    }else {
        jQuery('.section-wrap').each(function(){
           //$(this).css({'height': 'auto'});
           $(this).find('.col_cont').css({'min-height': 'auto'});
        });
    };
};

//full-width slider
function fullwidthslider() {
	"use strict";
	var full_slider_w = jQuery(window).width();
	var full_slider_h = jQuery(window).height();

	jQuery('.full_slider .flexslider, .full_slider .flexslider .slides li').css({'width': full_slider_w, 'height': full_slider_h});	
	jQuery('.full_slider, .full_slider .flexslider .slides li img.slide_bg').attr('style', 'height: '+full_slider_h + 'px');		
	jQuery('.full_slider').css({'min-height': full_slider_h + 'px'});
};

jQuery(document).ready(function() {
    "use strict";
    
    sectionHeight();
    fullwidthslider();
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 40)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 40
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 45
        }
    })
    
    // OWL slider
    if (jQuery('.owl-carousel').size() > 0) {
        $("#owl-journal, #owl-intro").owlCarousel({
            autoPlay : 5000,
            stopOnHover : true,
            navigation : false,
            paginationSpeed : 1000,
            goToFirstSpeed : 2000,
            singleItem : true,
            autoHeight : true,
            navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            transitionStyle:"fade"
        });
    }

    jQuery('.full_slider .flexslider li img.slide_bg').each(function(){
		jQuery(this).parents('li').attr('style', 'background-image:url('+$(this).attr('src')+');');		
	});
    
    // flexslider
    if (jQuery('.flexslider').size() > 0) {
        $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            animationSpeed: 1500,
            pauseOnHover: true,
            controlNav: true, 
            directionNav: false,
            start: function( slider ) {
                $('.full_slider').removeClass( 'loading' );
            }
        });
    }
        
    // Magnific Popup
	if (jQuery('.photozoom').size() > 0) {
		jQuery('.photozoom').each(function() {
			if (jQuery(this).parents('.block_grid-gallery ').hasClass('block_grid-gallery')) {
				jQuery('.block_grid-gallery ').each(function() {
					jQuery(this).magnificPopup({
						delegate: 'a.photozoom',
						type: 'image',
						gallery: {
							enabled: true
						}
					});
				});
			} else {
				jQuery(this).magnificPopup({
					type: 'image'
				});
			}
		});
	}
    
    jQuery(window).resize(function(){
		sectionHeight();
        fullwidthslider();
	});

});

jQuery(window).load(function(){
	"use strict";
	
    sectionHeight();
    fullwidthslider();
});


jQuery(window).resize(function() {
	"use strict";
	
    sectionHeight();
	setTimeout(function(){ sectionHeight();}, 1000);
    fullwidthslider();
});
