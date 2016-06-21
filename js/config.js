// Ticker

$(document).ready(function(){
		$('#fade').list_ticker({
			speed:4000,
			effect:'fade'
		});
		$('#slide').list_ticker({
			speed:2000,
			effect:'slide'
		});	
		$(".video-fit").fitVids();

})


// Scroll Page

var scrollElement = 'html, body',
        $scrollElement;

    $(function() {
    "use strict";  
        $('html, body').each(function () {
            var initScrollLeft = $(this).attr('scrollLeft');
      
            $(this).attr('scrollLeft', initScrollLeft + 1);
            if ($(this).attr('scrollLeft') == initScrollLeft + 1) {
                scrollElement = this.nodeName.toLowerCase();
                $(this).attr('scrollLeft', initScrollLeft);
                return false;
            }    
        });
        $scrollElement = $(scrollElement);
    });

    $(function() {
	"use strict";  
        var $sections = $('section.section');

        $sections.each(function() {
            var $section = $(this);
            var hash = '#' + this.id;

            $('a[href="' + hash + '"]').click(function(event) {
                $scrollElement.stop().animate({
                    scrollLeft: $section.offset().left
                }, 1200, 'easeOutCubic', function() {
                    window.location.hash = hash;
                });
				
				$('.cbp-vimenu a').removeClass('active');
                if($(this).hasClass('active-links')) {
                    var link = $(this).attr('href');
                    $('a[href="' + hash + '"]').addClass('active');
                } else {
                    $(this).addClass('active');
                }

                event.preventDefault();
            });
        });

    });

// Set Sections
$(document).ready(function() {

    function setSections() {
        var sections = $("section"),
            wWidth = $(window).width(),
            wCounter = 0;
        $.each(sections, function(eq) {
            if(eq > 0) {
                $(this).css({'left': wCounter});
            }
            wCounter = wCounter + $(this).width();            
        });        
    }

    function forcePosition() {
        var hash = window.location.hash,
        $panels = $('section');
        $panels.each(function(eq) {
            var panelId = $(this).attr('id');
            if( '#' + panelId == hash ) {
                var wWidth = $(window).width(),
                    scrollElement = 'html, body';

                $(scrollElement).stop().animate({
                    scrollLeft: wWidth * eq
                }, 300, 'easeOutCubic');
    
            }
        });
    }

    $(window).resize(function() {
        setSections();
        forcePosition();
    });

    setSections();

    
    function setNavigation() {
        var div = $('#fixed-elements'),
            wWidth = $(window).width();

        div.css({'left': wWidth });
    }

    setNavigation();

    function adjustNavigation() {
        var div = $('#fixed-elements'),
            scroll = $(window).scrollLeft(),
            wWidth = $(window).width();

        if(scroll >= wWidth) {
            div.css({
                'left': 0
            });
        } else {
            div.css({
                'left': wWidth - scroll
            });
        }
    }

    $(document).scroll(function() {
        adjustNavigation();
    });

    $(window).resize(function() {
        adjustNavigation();
    });
   
 });  


//  Hidden Map

function loadHiddenMap() {

	// change this coordinates latitude,longitude - use this tool to get coordinates http://itouchmap.com/latlong.html

	//var point = new google.maps.LatLng(40.60789273511395,-74.15870189666748);

 var point = new google.maps.LatLng(30.056610,31.330108);

	var myMapOptions = {

		scrollwheel:false,

		zoom: 15,

		center: point,

		mapTypeControl: true,

		mapTypeControlOptions: {

			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,

        	position: google.maps.ControlPosition.RIGHT_CENTER },

		navigationControl: true,

		navigationControlOptions: {

			style: google.maps.NavigationControlStyle.SMALL,

        	position: google.maps.ControlPosition.LEFT_CENTER},

		mapTypeId: google.maps.MapTypeId.ROADMAP

	};

	var map = new google.maps.Map(document.getElementById('hidden_map'),myMapOptions);
	var image = new google.maps.MarkerImage(
	  'img/marker-images/image.png',
	  new google.maps.Size(188,68),
	  new google.maps.Point(0,0),
	  new google.maps.Point(0,68)

	);

var shadow = new google.maps.MarkerImage(

	  'img/marker-images/shadow.png',

	  new google.maps.Size(217,68),

	  new google.maps.Point(0,0),

	  new google.maps.Point(0,68)

	);

	var shape = {

	  coord: [69,0,80,1,84,2,87,3,90,4,93,5,96,6,98,7,100,8,102,9,104,10,105,11,107,12,108,13,110,14,111,15,112,16,113,17,115,18,115,19,117,20,118,21,119,22,120,23,121,24,122,25,123,26,124,27,124,28,125,29,126,30,127,31,127,32,128,33,129,34,129,35,130,36,130,37,131,38,131,39,132,40,132,41,133,42,133,43,133,44,134,45,134,46,135,47,135,48,135,49,136,50,136,51,136,52,136,53,136,54,137,55,137,56,137,57,137,58,137,59,138,60,138,61,138,62,138,63,138,64,138,65,138,66,138,67,138,68,138,69,138,70,138,71,138,72,139,73,139,74,138,75,139,76,139,77,139,78,139,79,138,80,138,81,138,82,138,83,137,84,137,85,137,86,137,87,137,88,136,89,136,90,136,91,135,92,135,93,135,94,134,95,134,96,133,97,133,98,132,99,132,100,131,101,131,102,130,103,130,104,129,105,128,106,128,107,127,108,127,109,126,110,125,111,124,112,124,113,123,114,122,115,122,116,121,117,120,118,119,119,118,120,117,121,116,122,115,123,114,124,113,125,112,126,110,127,109,128,107,129,106,130,103,131,102,132,100,133,99,134,96,135,93,136,89,137,86,138,83,139,79,140,78,141,77,142,76,143,75,144,75,145,74,146,73,147,72,148,71,149,70,150,70,151,70,152,68,152,67,151,67,150,66,149,65,148,64,147,64,146,63,145,62,144,61,143,60,142,60,141,59,140,56,139,52,138,47,137,45,136,43,135,41,134,39,133,37,132,35,131,33,130,32,129,30,128,29,127,28,126,26,125,26,124,24,123,23,122,22,121,21,120,20,119,18,118,18,117,17,116,16,115,15,114,14,113,13,112,13,111,12,110,11,109,11,108,10,107,10,106,9,105,8,104,8,103,7,102,7,101,7,100,6,99,6,98,5,97,5,96,5,95,4,94,4,93,4,92,3,91,3,90,3,89,2,88,2,87,2,86,2,85,2,84,2,83,1,82,1,81,1,80,0,79,0,78,0,77,0,76,0,75,0,74,0,73,0,72,0,71,0,70,0,69,0,68,0,67,0,66,0,65,0,64,0,63,0,62,1,61,1,60,1,59,1,58,1,57,2,56,2,55,2,54,3,53,3,52,3,51,3,50,4,49,4,48,4,47,5,46,5,45,6,44,6,43,7,42,7,41,8,40,8,39,9,38,9,37,10,36,10,35,11,34,11,33,12,32,13,31,14,30,14,29,15,28,16,27,17,26,17,25,18,24,19,23,20,22,21,21,21,20,22,19,24,18,25,17,26,16,27,15,29,14,30,13,31,12,33,11,35,10,36,9,39,8,41,7,43,6,45,5,49,4,53,3,56,2,65,1,69,0,69,0],

	  type: 'poly'

	};

	

	var marker = new google.maps.Marker({

		draggable:true,

		raiseOnDrag: false,

		icon: image,

		shadow: shadow,

		shape: shape,

		map: map,

		position: point

		

	});
}


//  Portfolio

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
	
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	
	// Google Map
	loadHiddenMap();

});



// Slide Show 

$(function() {
		"use strict";  
		cbpBGSlideshow.init();
});


// Gird
$(function() {
		Grid.init();
});

// Testimonials 
$( function() {
	     
		/*
		- how to call the plugin:
		$( selector ).cbpQTRotator( [options] );
		- options:
		{
			// default transition speed (ms)
			speed : 700,
			// default transition easing
			easing : 'ease',
			// rotator interval (ms)
			interval : 8000
		}
		- destroy:
		$( selector ).cbpQTRotator( 'destroy' );
		*/

		$( '#cbp-qtrotator' ).cbpQTRotator();

} );

//FancyBox

$(document).ready(function() {
	
		$('.fancybox').fancybox();
	
		$(".fancybox-effects-a").fancybox({
			helpers: {
				title : {
					type : 'outside'
				},
				overlay : {
					speedOut : 0
				}
			}
		});
	
		// Disable opening and closing animations, change title type
		$(".fancybox-effects-b").fancybox({
			openEffect  : 'none',
			closeEffect	: 'none',
	
			helpers : {
				title : {
					type : 'over'
				}
			}
		});
	
		// Set custom style, close if clicked, change title type and overlay color
		$(".fancybox-effects-c").fancybox({
			wrapCSS    : 'fancybox-custom',
			closeClick : true,
	
			openEffect : 'none',
	
			helpers : {
				title : {
					type : 'inside'
				},
				overlay : {
					css : {
						'background' : 'rgba(238,238,238,0.85)'
					}
				}
			}
		});
	
		// Remove padding, set opening and closing animations, close if clicked and disable overlay
		$(".fancybox-effects-d").fancybox({
			padding: 0,
	
			openEffect : 'elastic',
			openSpeed  : 150,
	
			closeEffect : 'elastic',
			closeSpeed  : 150,
	
			closeClick : true,
	
			helpers : {
				overlay : null
			}
		});
	
		/*
		 *  Button helper. Disable animations, hide close button, change title type and content
		 */
	
		$('.fancybox-buttons').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
	
			prevEffect : 'none',
			nextEffect : 'none',
	
			closeBtn  : false,
	
			helpers : {
				title : {
					type : 'inside'
				},
				buttons	: {}
			},
	
			afterLoad : function() {
				this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			}
		});
	
	
		/*
		 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
		 */
	
		$('.fancybox-thumbs').fancybox({
			prevEffect : 'none',
			nextEffect : 'none',
	
			closeBtn  : false,
			arrows    : false,
			nextClick : true,
	
			helpers : {
				thumbs : {
					width  : 50,
					height : 50
				}
			}
		});
	
		/*
		 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
		*/
		$('.fancybox-media')
			.attr('rel', 'media-gallery')
			.fancybox({
				openEffect : 'none',
				closeEffect : 'none',
				prevEffect : 'none',
				nextEffect : 'none',
	
				arrows : false,
				helpers : {
					media : {},
					buttons : {}
				}
			});
	
		/*
		 *  Open manually
		 */
	
		$("#fancybox-manual-a").click(function() {
			$.fancybox.open('1_b.jpg');
		});
	
		$("#fancybox-manual-b").click(function() {
			$.fancybox.open({
				href : 'iframe.html',
				type : 'iframe',
				padding : 5
			});
		});
	
		$("#fancybox-manual-c").click(function() {
			$.fancybox.open([
				{
					href : 'img/portfolio/3.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/5.jpg',
					title : 'Project Name'
				}, {
					href : 'img/portfolio/7.jpg',
					title : 'Project Name'
				}
			], {
				helpers : {
					thumbs : {
						width: 75,
						height: 50
					}
				}
			});
		});
	
	
	});

	//if submit button is clicked
	$('#submit').click(function () {		
		
	//Get the data from all the fields
	var name = $('input[name=name]');
	var email = $('input[name=email]');
	var website = $('input[name=website]');
	var comment = $('textarea[name=comment]');
	var returnError = false;
	
	//Simple validation to make sure user entered something
	//Add your own error checking here with JS, but also do some error checking with PHP.
	//If error found, add hightlight class to the text field
	if (name.val()=='') {
		name.addClass('error');
		returnError = true;
	} else name.removeClass('error');
	
	if (email.val()=='') {
		email.addClass('error');
		returnError = true;
	} else email.removeClass('error');
	
	if (comment.val()=='') {
		comment.addClass('error');
		returnError = true;
	} else comment.removeClass('error');
	
	// Highlight all error fields, then quit.
	if(returnError == true){
		return false;	
	}
	
	//organize the data
	var data = 'name=' + name.val() + '&email=' + email.val() + '&website=' + 
	website.val() + '&comment='  + encodeURIComponent(comment.val());
	
	//disabled all the text fields
	$('.text').attr('disabled','true');
	
	//show the loading sign
	$('.loading').show();
	
	//start the ajax
	$.ajax({
		//this is the php file that processes the data and sends email
		url: "process.php",	
		
		//GET method is used
		type: "GET",

		//pass the data			
		data: data,		
		
		//Do not cache the page
		cache: false,
		
		//success
		success: function (html) {				
			//if process.php returned 1/true (send mail success)
			if (html==1) {					
				//hide the form
				$('.form').fadeOut('slow');					
				
				//show the success message
				$('.done').fadeIn('slow');
				
			//if process.php returned 0/false (send mail failed)
			} else alert('Sorry, unexpected error. Please try again later.');				
		}		
	});
	
	//cancel the submit button default behaviours
	return false;
});	



//PlaceHolder for IE 
if(!Modernizr.input.placeholder){

        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
}

// Superfish

(function($){ //create closure so we can safely use $ as alias for jQuery

	$(document).ready(function(){
		// initialise plugin
		var example = $('#example','#example2').superfish({
			//add options here if required
		});
	});

})(jQuery);


