(function($){
	
	var $window = $(window);
	$window.on('scroll', function(){
	
		var $floatingSidebar;
		var magicNumber;

		if ($('.LeftPanel.lp3').length > 0){
			$floatingSidebar = $('.LeftPanel.lp3');
			magicNumber = 48;
		} else if ($('.LeftPanel.lp4').length > 0){
			$floatingSidebar = $('.LeftPanel.lp4');
			magicNumber = 40;
		} else {
			$floatingSidebar = $('.LeftPanel');
			magicNumber = 30;
		}
		
		var sidebarHeight = $floatingSidebar.height();
		
		if($(document).width() > 980){
			var scrollTop = $(this).scrollTop();
			var top = scrollTop + magicNumber;
			if(scrollTop<=100){
				top = 130;
			};
			/*if(scrollTop>=1060){
				top = 1060;
			};*/
			
			var bodyHeight = $('body').height();
			
			if (top >= (bodyHeight - (404 + sidebarHeight + 60))) {
				top = bodyHeight - 404 - sidebarHeight - 60;
			} 

			if(scrollTop<=100 || top >= (bodyHeight - (404 + sidebarHeight + 60))){	
				
				$floatingSidebar.css({
					position: 'absolute',
					top: top
				})
				
			}else{
				$floatingSidebar.css({
					position: 'fixed',
					top: 92
				})
			}
		}
	});
	

	
	/* $('.menu li').hover(function(){
	$(this).find('.arrow-up').css('display', 'block');
		$(this).find('.nav-child').show();
		$(this).find("img.lazy").trigger("eager");
	}, function(){
		$(this).find('.arrow-up').hide();
		$(this).find('.nav-child').hide();
		
	}); */
	
	$('.menu li').on({
		    'hoverinit' : function(ev, hover) {
		
		         var delay = "500",
		            distance = "500",
		            leave = "300";
		        if(delay) {
		            hover.delay(delay);
		        }
		        if(distance) {
		            hover.distance(distance);
		        }
		        if(leave) {
		            hover.leave(leave);
		        }
				
	
		    },
		    'hoverenter' : function(ev) {
		        $(this).addClass('highlight');
				$(this).find('.arrow-up').css('display', 'block');
		        $(this).find('.nav-child').show();
				$(this).find("img.lazy").trigger("eager");
		    },
		    'hoverleave' : function(ev) {
		        $(this).removeClass('highlight');
				$(this).find('.arrow-up').hide();
		      $(this).find('.nav-child').hide();
		    }
		});

	
	

	$('ul.fourNav li').on('mouseover', function(){
		$('.info-container').hide();
		var con = $(this).attr('rel');
		$(this).addClass('active');
		
		$(con).show();
		/**image lazy load start**/
		$("#fourNav-info").find("img.lazy").trigger("eager");			
		/**image lazy load start**/
		/*if(con){
			if($(this).hasClass('active')){
				$('ul.fourNav li').removeClass('active');
				$(con).hide();
			}else{
				$('ul.fourNav li').removeClass('active');
				$(this).addClass('active');
				$(con).show();
			}
		}*/
	}).on('mouseout', function(){
		var con = $(this).attr('rel');
		$(this).removeClass('active');
		$(con).hide();
	});

	$('.info-container').on('mouseover', function(){
		var id = $(this).attr('id');
		$('ul.fourNav li[rel=#' + id + ']').addClass('active');
		$(this).show();
		/**image lazy load start**/
		$("#fourNav-info").find("img.lazy").trigger("eager");
		/**image lazy load start**/
	}).on('mouseout', function(){
		var id = $(this).attr('id');
		$('ul.fourNav li[rel=#' + id + ']').removeClass('active');
		$(this).hide();
	});

	$('a.close').click(function(){
		var con = '';
		$(this).closest('.info-container').hide();
		con = $(this).attr('rel');
		$(con).removeClass('active');
	});

	$('.LeftPanel .buttons').on('mouseover', function(){
		name = $(this).attr('child');
		var displayvalue = $(name).css('display');
		$('.right-nav-child').hide();
		 
	if($(this).hasClass('flyoutspan')){ 
		$(this).append('<span></span>');
		}
		$(name).show();

	
		//return false;
	}).on('mouseout', function(){
		name = $(this).attr('child');
		var displayvalue = $(name).css('display');
		$('.LeftPanel .buttons').children('span').remove();
		$('.right-nav-child').hide();
	});

	$('.right-nav-child').on('mouseover', function(){
		name = $(this).attr('id');
		$(this).show(); 
		$('.LeftPanel .buttons[child="#'+name+'"]').append('<span></span>');

	}).on('mouseout', function(){
		$(this).hide();
		$('.LeftPanel .buttons[child="#' + name + '"]').children('span').remove();
	});

    $(window).load(function(){
		if($(".ResultContainer").length>0){
        	$(".ResultContainer").customScrollbar();
		}
		if($(".DirectionsContainer").length>0){
			$('.DirectionsContainer').customScrollbar();
		}
	});

	$(".check-box").uniform();
	$(".radio-box").uniform();
	$(".select-box").uniform();
	$("footer .containers li select").uniform();
	$('.fullContainer .ButtonAlignment li.Services ul.checkboxes li .checkboxContainer input').uniform();
	$('.fullContainer .ButtonAlignment li.Services ul.checkboxes').hide();
		
		var imgsrc = $('.fullContainer .ButtonAlignment li.Services img').attr('src');
		var imgreplace = $('.fullContainer .ButtonAlignment li.Services img').attr('src');
	
	$('.fullContainer .ButtonAlignment li.Services').hover(function(){
		$('.fullContainer .ButtonAlignment li.Services img').attr('src',imgreplace.replace('DisplayImage_DropdownArrow','DisplayImage_DropdownArrowUp'));
		$('.fullContainer .ButtonAlignment li.Services ul.checkboxes').show();
	}, function(){
		$('.fullContainer .ButtonAlignment li.Services img').attr('src',imgsrc);
		$('.fullContainer .ButtonAlignment li.Services ul.checkboxes').hide();
	});
	
	if($('.fullContainer .ButtonAlignment li.ATM').length>0){
		$('.fullContainer .ButtonAlignment li.ATM').click(function(e) {
            if($(this).hasClass('selected')){
				$(this).removeClass('selected');
			}else{
				$(this).addClass('selected');
			}
        });
	}
	
	if($('.fullContainer .ButtonAlignment li.Branch').length>0){
		$('.fullContainer .ButtonAlignment li.Branch').click(function(e) {
            if($(this).hasClass('selected')){
				$(this).removeClass('selected');
			}else{
				$(this).addClass('selected');
			}
        });
	}
	if($('.BigBanner').length>0){
		$('.BigBanner .banner li').css('width',$('.BigBanner').width()+'px');
	}
	
	if($('.BigBanner').length>0){
		$('.BigBanner .banner').cycle({
			fx:	'scrollLeft',
 				before: function(){
       				$(this).parent().find("li.current").removeClass("current");
					$(this).parent().siblings("ul.pagination").find("li.selected").removeClass("selected");
					var $img = $(this).find("img.lazy");
					var original = $img.attr("data-original");
					var imagesrc = $img.attr("src");
					if (imagesrc === "" && typeof original === "string" && original !== ""){
						$img.attr("src",original);
					}
				},
				after: function(){								
       				$(this).addClass("current");
					var id = $(this).parent().find("li.current").attr('id').replace("image","pointer");
					$(this).parent().siblings("ul.pagination").find("#"+id).addClass("selected");
				},
				containerResize: false,
				slideResize: false,
				fit: 1
		});
		
		$('ul.pagination').css('left',(($('.BigBanner').width()-960)/2)+'px');
		
		$('.pointers').click(function(){
			var pointerId = $(this).attr('id').replace('pointer','')*1; 
			$('.BigBanner .banner').cycle(pointerId-1); 
			return false; 
		}); 
	}
	
	
	if($('.breadCrumbsContainer').length>0){
		//$('.breadCrumbsContainer').css('left',(($('.BigBanner').width()-960)/2)+'px');
		$('.reviewContainer').css('left',(($('.BigBanner').width()-960)/2)+'px');
	}

	$('.LeftPanel').on('click', function(){
		if($(document).width() < 980){
		//if($('.open-right').length == 0){
			$('body').toggleClass('open-right').removeClass('open-left');
		//};
		}
	});

	$('.LeftPanel > div').on('click', function(e){
		e.stopImmediatePropagation();
	});

	$('.LeftPanel a').on('click', function(e){
		
	});

	$('.nav-header .menu').on('click', function(){
		if($(document).width() < 980){
		//if($('.open-right').length == 0){
			$('body').toggleClass('open-left').removeClass('open-right');
		//};
		}
	});

	$('.leftColumnContainer').on('click', function(){
		if($(document).width() < 980 && !$(this).parents('body').hasClass('social')){
			var $this = $(this);
			$this.toggleClass('open');
			if($this.hasClass('open')){
				$this.find('li').show('fast');
			}else{
				$this.find('li').hide('fast', function(){
					$(this).attr('style','');
				});
			};
		}
	});

	$('.leftColumnContainer li').on('click', function(e){
		if (!$(body).hasClass("search")){
			e.stopImmediatePropagation();
		}
	})

	$('.leftColumnContainer li a').on('click', function(e){
		if($(document).width() < 980){
			//e.preventDefault();
			var $this = $(this);
			if(!$this.parent().hasClass('left-nav-year')){
				$this.addClass('selected').parent().siblings().find('a').removeClass('selected').parents('.leftColumnContainer').attr('data-content', $.trim($this.text().replace('›', ''))).toggleClass('open').find('li').hide('fast');
			}
		};
	})

	$('.left-nav-year > a').on('click', function(e){
		if($(document).width() < 980){
			e.preventDefault();
			var $this = $(this);

			$this.siblings('div').toggleClass('mobile-show');
			$this.addClass('selected').parent().siblings().find('a').removeClass('selected')
		}
	});

	/*$('.social-filter nav').on('click', function(){
		if($(document).width() < 980){
			var $this = $(this);
			$this.parent().toggleClass('open');
			if($this.parent().hasClass('open')){
				$this.find('a').show('fast').css('display', 'block');
			}else{
				$this.find('a').hide('fast');
			};
		}
	});*/

	/*$('.social-filter a').on('click', function(e){
		if($(document).width() < 980){
			e.stopImmediatePropagation();
			e.preventDefault();

			var $this = $(this);
			$this.addClass('selected').siblings().removeClass('selected').parent().attr('data-content', $.trim($this.text().replace('›', ''))).parent().toggleClass('open').find('a').hide('fast');
		};
	})*/

	$('.result-boxes .box ul').on('click', function(){
		var $this = $(this);
		$this.toggleClass('open');
		if($this.hasClass('open')){
			$this.find('li:gt(5)').show('fast');
			$this.attr('data-content', 'Less');
		}else{
			$this.find('li:gt(5)').hide('fast');
			$this.attr('data-content', 'More');
		};
	});

	$('.result-boxes .box li').on('click', function(e){
		e.stopImmediatePropagation();
	});

	$('.visa-video').on('click', function(e){
		if($(document).width() < 980){
			e.stopImmediatePropagation();
			e.stopPropagation();
			if($(this).find('iframe').length == 0){
				$(this).append('<iframe width="100%" height="100%" src="//www.youtube.com/embed/X-49VAwHBx4?autoplay=1" frameborder="0" allowfullscreen></iframe>');
			};
		}
	});

	$('.checkbox').on('click', function(){
		var $this = $(this);
		if($this.find('span').find('.icon-ok').length > 0){
			$this.find('span').find('.icon-ok').remove();
			$this.find('input').removeAttr('checked');
		}else{
			$this.find('span').append('<i class="icon-ok"></i>')
			$this.find('input').attr('checked','checked');
		}
	});

	$('.locationButton').on('click', function(e){
		if($(document).width() < 980){
			$('#directiontext').hide();
			$('#drivingdirections').addClass('hidden');
		};
	});

	$('.toggle').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var $drawer = $($this.attr('gumby-trigger'));
		if($drawer.is(':visible')){
			$drawer.hide('fast');
		}else{
			$drawer.show('fast');
		}
		
	});

	$('#dirget .toggle').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var $drawer = $($this.attr('gumby-trigger'));
		$('#findatm').addClass('hidden');
		$('#drivedetails').hide();
		if($drawer.is(':visible')){
			$drawer.addClass('hidden');
			$this.parents('#directiontext').show();
		}else{
			$drawer.removeClass('hidden');
			$this.parents('#directiontext').hide();
		}
		
	});

	$('#directions .toggle').on('click', function(e){
		if($('#findatm .filterContainer').hasClass('open') || !$('#drivingdirections').hasClass('hidden') ){
			$('#findatm .filterContainer').removeClass('open');
			$('#findatm').removeClass('hidden');
			$('#drivingdirections').addClass('hidden');
		};

	});

	$('.bank-answers-page .answers-article h2').on('click', function(){
		var $this = $(this);
		$this.parent().toggleClass('close');
	});

	$('.filter-dropdown select').on('change', function(){
		var $this = $(this);
		$this.siblings('span').find('.filter-dropdown-value').text($this.val());
	});

	$('.discuss-write-review').on('click', function(e){
		e.preventDefault();
		var $this = $(this);

		$('.comment-article').parents('.answers-content').show('fast');
	})

	$('.comment-article .close-btn').on('click', function(e){
		e.preventDefault();
		var $this = $(this);

		$this.parents('.answers-content').hide('fast');
	}).trigger('click');

	$('.discuss-nav span').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		if($(document).width() < 980){
			$this.parent().toggleClass('open');
		}
	});

	$('.discuss-nav a:not(.discuss-write-review)').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.addClass('selected').siblings().removeClass('selected').parent().removeClass('open').find('span').html($this.html());
	}).filter('.selected').trigger('click');

	$('.review-dropdown > a').on('click', function(e){
		e.preventDefault();
	});

	$('.open-modal').on('click', function(e){
		var $this = $(this);
		if($this.parents('offer-zone') && $(document).width() > 980){
			$('#modal').css('top', $(window).scrollTop() + 40)
		}else{
			e.stopImmediatePropagation();
			window.location = $this.data('url');
		};
	});

	$('body').on('click', '.tncs-details', function(e){
		e.preventDefault();
		$(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
		$(this).parents('.offer-wrapper').find('.offer-terms').hide().siblings('.offer-right').show();
	});

	$('body').on('click', '.tncs-link', function(e){
		e.preventDefault();
		$(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
		$(this).parents('.offer-wrapper').find('.offer-right').hide().siblings('.offer-terms').show();
	});

	if($('.offer-subnav-wrapper').length){
		var wrapperWidth = 0;
		$.each($('.offer-subnav-wrapper').find('li'), function(){
			wrapperWidth+=$(this).outerWidth(true);
		})
		$('.offer-subnav-wrapper ul').css('width', wrapperWidth);
	};
	

	$('.offer-subnav-prev, .offer-subnav-next').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var movePos = $this.siblings('.offer-subnav-wrapper').width();
		var $ul = $this.siblings('.offer-subnav-wrapper').find('ul');

		if($ul.width() > movePos){
			if($this.hasClass('offer-subnav-prev')){

				if($ul.position().left + movePos - 46 >= 0){
					movePos = -$ul.position().left + 46;
				}

				$ul.stop(true, true).animate({
					left: '+=' + movePos
				}, 300)
			}else{

				if(($ul.position().left - movePos*2 - 46)*-1 >= $this.siblings('.offer-subnav-wrapper').find('ul').width()){
					movePos = $this.siblings('.offer-subnav-wrapper').find('ul').width() - $this.siblings('.offer-subnav-wrapper').width() + $ul.position().left - 46;
				}

				$ul.stop(true, true).animate({
					left: '-=' + movePos
				}, 300)
			}
		}
	});

	if($(".question .slider").length > 0){
		$( ".question .slider" ).slider({
			value: 80,
			slide: function(event, ui){
				
				var leftPos = ui.value;
				if ($(window).width() > 980) leftPos -= 10;
				else {
					if (ui.value > 90) leftPos -= 25;
					else leftPos -= 10;
				}
				
				$('.question.active .perc-indicator')
					.css({left: leftPos + '%'})
					.find('span').html(ui.value);
			}
		});
	}else if($('.slider').length > 0){
		$(".slider").slider({
			value:20,
			min: 0,
			max: 100,
			step: 10,
			slide: function( event, ui ) {
					$(".slider a").html('<div class="slider-hover"><input type="text" class="amount"/><span>%</span></div>');
					$( ".amount" ).val( ui.value);
				}
		});
		$(".slider a").html('<div class="slider-hover"><input type="text" class="amount"/><span>%</span></div>');
		$(".amount").val( $(".slider").slider("value"));
	};

 	$('#expand-all').on('click', function(e){	 
		e.preventDefault();
		$('.answers-article').removeClass('close');
	});
	$('#close-all').on('click', function(e){
		e.preventDefault();
		$('.answers-article').removeClass('close');
		$('.answers-article').addClass('close');
	});  

	$('.logged-out a').on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		$this.parents('.ImageContainer').removeClass('logged-out').addClass('loading');

		setTimeout(function(){
			$this.parents('.ImageContainer').removeClass('loading').addClass('logged-in');
		}, 1500);
	})

	var scrollWidth = 0;
	var newsTicker = $(".news-ticker");
	var newsTickerUl = newsTicker.find('ul');
	var newsTickerWrap = newsTicker.find(".news-ticker-content");
	var move = 1;
	var moveTimeout;

	$.each(newsTicker.find('li'), function(){
		scrollWidth += $(this).outerWidth(true);
	});

	newsTickerUl.css('width', scrollWidth);

	setTimeout(function(){ scroll(); }, 1000);

	function scroll() {
		if(move){
			var newsTickerMargin = parseFloat(newsTickerUl.css('margin-left'));
			var firstChild = newsTicker.find('li:first-child');

			if(parseFloat(newsTickerMargin) == -firstChild.outerWidth()){			
				//newsTickerUl.css('margin-left', newsTickerMargin + firstChild.outerWidth() );
				newsTickerUl.css('margin-left', 0)
				newsTickerUl.append(firstChild);
			}
			newsTickerUl.animate({'margin-left': '-=1' }, 30, 'linear', scroll);
		};
	};

	$('.news-ticker-next').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var newsTickerMargin = parseFloat(newsTickerUl.css('margin-left'));
		var firstChild = newsTicker.find('li:first-child');

		newsTickerUl.stop(true);
		clearTimeout(moveTimeout);

		newsTickerUl.animate({'margin-left': -firstChild.outerWidth()}, 1000, function(){
			newsTickerUl.append(firstChild);
			newsTickerUl.css('margin-left', 0);
			moveTimeout = setTimeout(function(){ scroll(); }, 1000)
		});
	});

	$('.news-ticker-prev').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var newsTickerMargin = parseFloat(newsTickerUl.css('margin-left'));
		var lastChild = newsTicker.find('li:last-child');

		newsTickerUl.stop(true);
		clearTimeout(moveTimeout);

		newsTickerUl.prepend(lastChild).css('margin-left', newsTickerMargin-lastChild.outerWidth());
		
		newsTickerUl.animate({'margin-left': 0}, 1000, function(){
			moveTimeout = setTimeout(function(){ scroll(); }, 1000)
		});

	});

	$('#resultlist a').on('click', function(e){
		e.preventDefault();
		$(this).parents('#findatm').addClass('hidden').siblings('#drivingdirections').removeClass('hidden');
	});

	$('#driveheading a').on('click', function(e){
		e.preventDefault();
		$(this).parents('#drivingdirections').addClass('hidden').siblings('#findatm').removeClass('hidden');
	});

	$('.locationButton').on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		$this.parents('.filterContainer').toggleClass('open');

	});

	$('#filteritems li').on('click', function(){
		$(this).toggleClass('selected');
	});

	$('.leftpanel-btn').on('click', function(e){
	  
		e.preventDefault();
        
		$(this).parent().toggleClass('hide');
		storeRPState($(this).parent().hasClass("hide"));
			if ($(document).width() < 1300 && $(document).width() > 990){
				//alert($(document).width());
		if($(".LeftPanel.hide").length > 0){
		//$(".rs-carousel").css({'z-index' : '9999'});
	$(".rs-carousel").attr('style',"z-index : 9999");
		$(".LeftPanel .sub-container").attr('style' , "z-index : -1");
		//$(".LeftPanel .sub-container").css({'z-index' : '-1'});
		}
		else{
			$(".rs-carousel").attr('style',"z-index : -1");
		$(".LeftPanel .sub-container").attr('style' , "z-index : 9999");
	//	$(".rs-carousel").css({'z-index' : '-1'});
		//$(".LeftPanel .sub-container").css({'z-index' : '9999'});
		}
		}
	});
	
	if(isRPHidden()){
		$(".leftpanel-btn").trigger("click");
	}
	
	$('.subnav-header').on('click', function(){
		$(this).parent().toggleClass('menu-close');
	});

	$('.friendsContainer .more, .friends-overlay-close, .friends-overlay, .social a.more-link').on('click', function(e){
		e.preventDefault();

		$('.friends-overlay, .friends-overlay-content').toggleClass('hidden');
	});

})(jQuery);

function storeRPState(hidden){
	if (Modernizr.localstorage) {
		localStorage.setItem("rpState",hidden);
	}
}

function isRPHidden(){
	var visible = false;
	if (Modernizr.localstorage) {
		visible = (localStorage.getItem("rpState") === "true");
	}
	return visible;
}