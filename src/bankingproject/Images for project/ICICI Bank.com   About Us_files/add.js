$(document).ready(function(){

	site.init();
});


var site = {
	
	init: function(){
		site.UI.init();
		site.modal.init();
		
	},
	
	UI: {
		init: function(){
			site.UI.equiHeight($('.box'));
			
			// Card Comparison Page Select Box
			$('#selectCard, #selectSortBy').uniform();
            
			// Scroll to Top
			$('.back-to-top').click(function(){
				$.scrollTo('#top', 400);
				return false;
			});
			
			// Add wmode to youtube
			$('iframe').each(function() {
			    $(this).attr("src", $(this).attr("src") + '?wmode=transparent')
			});

			// Blog Landing Sidebar tab nav
			$('.box-nav-wrap .tab-nav a').click(function(){
				var target = $(this).attr('href');
				$('.box-nav-wrap ul.tab').removeClass('active');
				$('.box-nav-wrap ul' + target).addClass('active');
				$('.box-nav-wrap .tab-nav a').removeClass('active');
				$(this).addClass('active');
				return false;
			});
			
			// Comment Filter
			$('.comment-nav a').click(function(){
				$('.comment-nav a').removeClass('active');
				$(this).addClass('active');
				return false;
			});
		},
		
		equiHeight: function(el){
			"use strict";
			
			var h = 0,
				thisH = 0;
				
			el.each(function(){
				thisH = $(this).height();
				if (h < thisH) h = thisH;
			});
			
			el.height(h);
		}
	},
	
	modal: {
		
		init: function(){
            "use strict";
            
			site.modal.position();
			$(window).resize(function(){
				site.modal.position();
			});
			
			$('.open-modal').click(function(){
				site.modal.open($(this).attr('href'));
				return false;
			});
			
			$('#modalOverlay').click(function(){
				site.modal.close();
			});
			
			$('.close-modal').click(function(){
				site.modal.close();
				return false;
			});
		},
		
		open: function(target){
			"use strict";
			
			$('#modalContentWrap').html($(target).html());
			$('#modalOverlay').fadeIn(400, function(){
				$('#modal').fadeIn(500);
			});
		},
		
		close: function(){
			"use strict";

			$('#modal').fadeOut(400, function(){
				$('#modalContentWrap').html('');
				$('#modalOverlay').fadeOut(500);	
			});
		},
		
		position: function(){
			"use strict";
			
			var winH = $(window).height(), // top: 50px / bottom: 50px
				winW = $(window).width(),
				modal = $('.modal'),
				modalW = parseInt(modal.width(),10),
				modalH = parseInt(modal.height(), 10);	
				
			modal.css({
					top: ((winH - modalH)/2),
					left: ((winW - modalW)/2)
					});

		}
		
	}
}