/* SORTING */

jQuery(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        var $container = jQuery('.block_grid-isotope');
    } else {
    }

    $container.isotope({
        itemSelector: '.element'
    });

    var $optionSets = jQuery('.isotope_filter'),
        $optionLinks = $optionSets.find('a'),
        $showAll = jQuery('.show_all');

    jQuery('.filter_close').on('click', function (e) {
        e.preventDefault();
        $showAll.click();
        $optionSet.find('.selected').removeClass('selected');
        $showAll.parent('li').addClass('selected');

        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $showAll.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
    
    $optionLinks.on('click', function () {
        var $this = jQuery(this);
        // don't proceed if already selected
        if ($this.parent('li').hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.gallery_filter');
        $optionSet.find('.selected').removeClass('selected');
        $this.parent('li').addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });

    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').find('img').load(function () {
            $container.isotope('reLayout');
        });
    } else {
    }
});

jQuery(window).load(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 500);
    } else {
    }
    jQuery('.gallery_filter a').on('click', function () {
        jQuery('.block_grid-isotope').isotope('reLayout');
        setTimeout("jQuery('.block_grid-isotope').isotope('reLayout')", 800);
    });
});
jQuery(window).resize(function () {
    "use strict";
    if (jQuery('.block_grid-isotope').size() > 0) {
        jQuery('.block_grid-isotope').isotope('reLayout');
    } else {
    }
});

jQuery.fn.portfolio_addon = function(addon_options) {
	"use strict";
	//Set Variables
	var addon_el = jQuery(this),
		addon_base = this,
		img_count = addon_options.items.length,
		img_per_load = addon_options.load_count,
		$newEls = '',
		loaded_object = '',
		$container = jQuery('.image-grid');
	
	jQuery('.load_more_works').on( 'click', function(){
		$newEls = '';
		loaded_object = '';									   
		var loaded_images = $container.find('.added').size();
		if ((img_count - loaded_images) > img_per_load) {
			var now_load = img_per_load;
		} else {
			var now_load = img_count - loaded_images;
		}
		
		if ((loaded_images + now_load) == img_count) jQuery(this).fadeOut();

		if (loaded_images < 1) {
			var i_start = 1;
		} else {
			var i_start = loaded_images+1;
		}

        if (now_load > 0) {			
			if (addon_options.type == 1) {
				//Wide Portfolio
				for (var i = i_start-1; i < i_start+now_load-1; i++) {
					loaded_object = loaded_object + '<div class="block_grid-item element added"><div class="item_wrapper"><div class="block_img"><a class="photozoom" href="'+ addon_options.items[i].url +'"></a><div class="caption"><div class="info">'+ addon_options.items[i].title +'</div></div><img src="'+ addon_options.items[i].src +'" alt="" /></div></div></div>';
				}
				
			} else {}
			  
			$newEls = jQuery(loaded_object);
			$container.isotope('insert', $newEls, function() {
				$container.isotope('reLayout');							
			});			
		}
	});
} 