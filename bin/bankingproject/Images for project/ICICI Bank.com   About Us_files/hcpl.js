$(document).ready(function (){
		
	$.reject({
		reject : {"msie7":true},
		imagePath: "/assets/img/reject/",
		closeCookie: true, 
		cookieSettings: {path: "/", expires: 0}
	});

	
	
	$("ul.menu li img.lazy").lazyload({
		event : "eager"
	});
	
	/** Banner **/
	$(".BigBanner img.lazy").lazyload({
		threshold : 1500 
	});
	
	/** Cross sell **/
	$(".page-aside-article img.lazy").lazyload({
		skip_invisible  : false
	});
	
	/** Grid **/
	$("ul.fourNav li").find("img.lazy").lazyload({
		skip_invisible  : false
	});
	$("#fourNav-info").find("img.lazy").lazyload({
		event : "eager"
	});
	
	/** Wealth Home Page Carousel **/
	if ($(".rs-carousel").length > 0) {
		$(".rs-carousel").find("img.lazy").lazyload();
	}
	
	/** Wealth Insight Landing Carousel **/
	if ($(".rs-carousel").length > 0) {
		$(".rs-carousel").find("li.lazy").lazyload();
	}
	$(".carousel-pad").find("img.lazy").lazyload({
		skip_invisible : false
	});
	
	/** Wealth Insight Profile **/
	$(".profile").find("img.lazy").lazyload({
		skip_invisible : false
	});
	$(".carousel-pad").find("li.lazy").lazyload({
		skip_invisible : false
	});
	
	
	if($.browser.msie && typeof String.prototype.trim !== 'function') {
		String.prototype.trim = function() {
			return this.replace(/^\s+|\s+$/g, ''); 
		}
	}
	
	
	if ($(".bodyclass").length > 0){
	    $("body").addClass($(".bodyclass").text()); 
	}	
	
	if ($(".wm .Logo").length > 0 && $(".wm .nav-header").length > 0){
		$("head link[rel='stylesheet']").last().after("<style type=\"text/css\">@media only screen and (max-width: 980px){.wm .nav-header {"+ $(".wm .Logo").attr("style") +"}}</style>");
	}
	
	$( ".nav-header .menu li" ).each(function() {
		if (!$(this).hasClass("selected")){
		var name = $(this).find("a").html();
		var normaliseName = normaliseString(name);
			$("ul.mobile-segments").append("<li class='subnav-header hover mobile-show' id=nav-"+normaliseName+">"+$(this).html()+"</li>");
		}
	});
	
	if ($(".Other-Bank-Website").length > 0){
		var eq = 1;
		for(eq = 1; eq < $(".Other-Bank-Website option").length; eq ++){
			$("ul.mobile-other-websites").append("<li><a href=\""+$(".Other-Bank-Website option").eq(eq).val()+"\">"+$(".Other-Bank-Website option").eq(eq).html()+"</a></li>");
		}
	}
	
	if ($(".Country-Specific-Bank-Website").length > 0){
		var eq = 1;
		for(eq = 1; eq < $(".Country-Specific-Bank-Website option").length; eq ++){
			$("ul.mobile-country-websites").append("<li><a href=\""+$(".Country-Specific-Bank-Website option").eq(eq).val()+"\">"+$(".Country-Specific-Bank-Website option").eq(eq).html()+"</a></li>");
		}
	}
	/** New RHS  for mobile start **/
	
	if($(".rhs-mobile-show").length > 0){
		var eq = 0;
		for (eq = 0 ; eq < $(".LeftPanel .sub-container .rhs-mobile-show").length ; eq ++){
			var child = $(".LeftPanel .sub-container a.flyoutspan").eq(eq).attr("child");
             var mobile = $(child).children(".rhs-mobile-show");
             $(".LeftPanel .sub-container a.flyoutspan").eq(eq).after(mobile);
			 if(eq === 0){
			  $(".LeftPanel .sub-container a.flyoutspan").eq(eq).after("<div class='arrowdiv'><a class='rhs-arrow-click' href='javascript:void(0);' ><span class='icon-angle-up rhs-arrow'></span></a></div>");
			 }
			 else{
			  $(".LeftPanel .sub-container a.flyoutspan").eq(eq).after("<div class='arrowdiv'><a class='rhs-arrow-click' href='javascript:void(0);' ><span class='icon-angle-down rhs-arrow'></span></a></div>");
			  }
             $(".rhs-mobile-show").eq(eq).removeAttr("style");
				}	
			}

			$(".arrowdiv").on("click","a.rhs-arrow-click",function  () {
             var indexvalue = $("a.rhs-arrow-click").index(this);
			 RhsMobile(indexvalue);
			});
     
			$(".LeftPanel .sub-container  a.flyoutspan").on("click",function(){
			var indexvalue = $(".LeftPanel .sub-container  a.flyoutspan").index(this);
			RhsMobile(indexvalue);
			});
	
  /** New RHS  for mobile end **/
	
	if ($("div.leftColumnContainer ul:first-child").length > 0){
		var $leftColumnUL = $("div.leftColumnContainer ul");
		$leftColumnUL.parent().attr("data-content",$leftColumnUL.attr("data-content"));
	}
	
	$.ajaxSetup({
		cache: false,
		beforeSend: function(jqXHR, settings){
			var send = false;
			try {
				if (typeof settings.url === "string" && settings.url.trim() !== ""){
					var a = $("<a>", {href:settings.url.trim()})[0];
					send = (window.location.href !== a.href);
				}
			} catch(e) {
				consoleLog(e);
			}
			return send;
		}
	});
	
	/** Pratish : Please Put All Code After This Comment **/
	
	
	if($(".middleContainer.clearfix ul.menu li.selected a").html() !== "NRI"){
		if ($("body").hasClass("product-overview")){	
			$(".leftColumnContainer").parent().addClass('bggrey');
		}
	}
	
	/** Close first accordian of faq start**/
if	($(".answers-article.accordian.grey-box.clearfix").length > 0){
$(".answers-article.accordian.grey-box.clearfix").first().addClass("close");
}	
/** Close first accordian of faq end **/


/** Close first accordian of product start**/
if	($(".answers-article.accordian.clearfix").length > 0){
$(".answers-article.accordian.clearfix").first().addClass("close");
}	
/** Close first accordian of product end **/

	/*if($(".rows.links.bottom-link.clearfix").length > 0){
		var linkdata = $(".rows.links.bottom-link.clearfix").html();
		$(".leftColumnContainer ul:last").append("<li class=\"cta\">" +linkdata+ "</li>");
	}*/
	
	/** close button menu nav start**/
	if($(".menu .nav-child").length > 0){
	$(".menu .nav-child").append("<a rel='.nav-child' href='javascript:void(0);' class='close menu-nav-close'>&nbsp;</a>");
	}
	
	$('.menu-nav-close').click(function(){
		$(this).closest('.nav-child').hide();
	});
	/** close button menu nav end**/
	
	/** expert decription length start**/ 
	if($(".expert-desc").length > 0){

		var eq;
		for(eq = 0; eq <= $(".expert-desc").length; eq ++){
			var title = $(".expert-desc").eq(eq).html();
			
				if (typeof title === "string" && title !== ""){
			if(title.length > 250){
				title = title.substring(0,250);
				title = title + "...";
		
				$(".expert-desc").eq(eq).html(title);
			}
		}}
	} 
		/** expert decription length start**/ 
	
	if ($("footer div .copyrightclass").length > 0) {
		var currentYear = new Date().getFullYear();
		$("footer div .copyrightclass").append("ICICI Bank © "+currentYear+"  |  ");
	}
	
	
  
	if ($("*").hasClass("breadCrumbsContainer-megaNav")) {
		var nodeLabel = $(".breadCrumbsContainer .last").html();
		var html = $(".flyoutInnerContent").html();
		$(".breadCrumbsContainer .flyoutLastNode").append("<a class=\"last\" href=\"#\"></a>"+html);
		$(".leftColumnContainer li a span").first().remove();
		$(".leftColumnContainer li div").addClass("megaNav").append("<a  href=\"#\"></a>"+html);
	}
    
	
	if ($("*").hasClass("reviewCount")) {
		var count = $(".reviewCount").val();
		$(".getCount").append(count);
    }
	
	if ($(".blog-top-name").length > 0) {
		var heading = $(".blog-top-name").html();
		$(".blog-heading").append(heading);
    }
		
	$("footer select.Other").on("change", function (e) {
    var optionSelected = $("option:selected", this);
    var url = this.value;
		window.open(url,"_blank");
	});
	
	/** currency dropdown **/
	if ($(".selectSearch #dropDown").length > 0) {
		if(!$(".selectSearch #dropDown").hasClass("selectbox_modal")){
			$(".selectSearch select#dropDown").on("change", function (e) {
				var optionSelected = $("option:selected", this);
				var url = this.value;
				window.open(url,"_blank");
			});
		}
	}
	
	if ($(".selectSearch #selfOpen").length > 0) {
		if(!$(".selectSearch #selfOpen").hasClass("selectbox_modal")){
			$(".selectSearch select#selfOpen").on("change", function (e) {
				var optionSelected = $("option:selected", this);
				var url = this.value;
				window.open(url,"_parent");
			});
		}
	}
	
	$(".accordian h2").on("click", function(){
		var $this = $(this);
		$this.parent().toggleClass("close");
	}); 
	
	if ($(".accordian").length > 0){
		$(".accordian").each(function (index,element){
			if (index > 0){
				$(element).addClass("close");
			}
		});
	}
		
	if ($(".review-container").length > 0){
		$("#reviewstar").raty({
			scoreName: "score",
			starOff: $("input[name='staroff']").val(),
			starOn : $("input[name='staron']").val()
		});
	}
	
	if ($(".review-list").length > 0){
	    var staron = $("input[name='readonlystaron']").val();
		var staroff = $("input[name='readonlystaroff']").val();
		$(".review-rating").each(function (index,element){
			$(element).raty({
			    readOnly : true,
				starOff : staroff,
				starOn  : staron,
				score: function() {
					return $(element).attr("data-source");
				}
			});
		});
	}

	if ($(".reviewContainer").length > 0){
		facebookPanelData();
	}
	
	if ($(".reviewComparisonContainer").length > 0){
		facebookPanelData();
	}
	
	$( ".rows:last" ).css({  border: "none" });
	
	/** modal : start */
	$(".selectbox_modal").on("change",function (){
		var target = $(this).val();
		var url_prefix = window.location.protocol+"//"+window.location.host;
		if (target !== "null" && target !== ""){
			$("#modal-content .modalContent").load(url_prefix+target, function (){
				$("#modal-background").fadeIn("400");
				$("#modal-content").fadeIn("600");
				$("#modal-content,#modal-background").toggleClass("active");
			});
		}
		return false;
	});
	
		
	if($("body").hasClass("m2i")){
	$("head").append(" <!--Google Analytics Script Starts --><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new  Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');   ga('create', 'UA-17882001-2', 'icicibank.com');   ga('require', 'displayfeatures');   ga('send', 'pageview');</script><!--Google Analytics Script Ends -->");
	}
		
	       if ($("body").hasClass("nri"))
	       {		
		   /** nri ga code**/
		   $("head").append("<!--Google Analytics Script Starts --><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');   ga('create', 'UA-17881065-1', 'icicibank.com');   ga('require', 'displayfeatures');   ga('send', 'pageview');</script><!--Google Analytics Script Ends -->");
		   /** nri ga code ends**/
					//if($(document).width() > 980){
						leadform();
						//}
					}
	
	if ($(document).width() > 990){
		$("a.modal-launcher,a.banner-modal").click(function (){
			var target = $(this).attr("href");
			if (target !== "null" && target !== ""){
				$("#modal-content .modalContent").load(target, function (){
					$("#modal-background").fadeIn("400");
					$("#modal-content").fadeIn("600");
					$("#modal-content,#modal-background").toggleClass("active");
					if ($("body").hasClass("nri")){
					leadform();
					}
					if ($("body").hasClass("m2i")){
					leadform();
					}
				});
			}
			return false;
		});
	} 
	
		if ($(document).width() < 990){
		console.log("inside 990");
		$("a.modal-launcher,a.banner-modal").click(function (){
		var target = $(this).attr("href");
		//window.location.href = "disc-page.html";
		window.location.replace("/html/en/cust-disclaimer/disc-page.html?url="+target);
		console.log("clocked modal");
			
			//console.log("target : " +target);
			//if (target !== "null" && target !== ""){
			//	$(".disc-modal-content").load(target, function (){
			//	console.log("content-loaded successfully");
			//	});
//}         

                var parent = $(".disc-modal-content");
				var ajaxurl = getParameterByName("url");
				console.log("ajaxurl="+ajaxurl);
				$.ajax({
					url : ajaxurl,
					success : function (data){
							parent.html(data);
			}
		})
			console.log("done outside");
			return false;
		});
	}
	
	
	$("a.static-modal-launcher").click(function (){
		var target = $(this).attr("href");
		if (target !== "null" && target !== "") {
			$("#modal-content .modalContent").html($(target).html());
			$("#modal-background").fadeIn("400");
			$("#modal-content").fadeIn("600");
			$("#modal-content,#modal-background").toggleClass("active");
		}
		return false;
	});	
	
	$("#modal-close").click(function (){
		$("#modal-background").fadeOut("600");
		$("#modal-content").fadeOut("400");
		$("#modal-content,#modal-background").toggleClass("active");
	});
	
	if($("#moreInsightsCarousel").length > 0){
		$("#moreInsightsCarousel").cycle().cycle('pause');
	};
	
	$(".drop-down-show-hide").hide();
	$("#dropDownTable").change(function(){
		$(this).find("option").each(function(){
			$("#" + this.value).hide();
		});
		$("#" + this.value).show();
	});
	
	/** msr partner **/
	if($("a#msr-partners-more-btn").length >0){ 
        var size_li = $("#msr-partners-box li").size();
        var x = 5;
		$("#msr-partners-box li:lt(" + x + ")").show();
		$("#msr-partners-more-box").on("click","a#msr-partners-more-btn",function() {
		    x = (x + 5 < size_li) ? x + 5 : size_li; 
            $("#msr-partners-box li:lt(" + x + ")").show();
            $("#showLess").show();
            if (x == size_li) {
			    $("#msr-partners-more-box").hide();
                $("a#msr-partners-more-btn").hide();
            }
        });
    }
	
	
	
	/** Hashing Select Box**/
	$("select.hashingSelect").change(function (e) {
	    var optionSelected = $("option:selected", this);
	    var url = this.value;
			window.open(url,"_self");
	});
			
			
	/** mobile Video Modal **/
	
	$(".mobVideo").on("click",function() { 
		$("#modal-content").width(500);
		$("#modal-content").css({marginLeft:"6%"});
	});
	  /** seach image box start**/
		if($(".box.clearfix").length > 0){
	  $(".box.clearfix").eq(1).css("background", "none");
		$(".box.clearfix").eq(1).css("border", "none");
		$(".box.clearfix").eq(1).css("padding-bottom", "0");
		}
		/** seach image box end**/
	  /** review flag tool tip start**/
		if($(".review-flag").length > 0 ){
		$(".review-flag").attr("class", "review-flag tooltipPop");
		$(".review-flag").attr("title", "Please flag this post if you find it inappropriate.");
		}
		 /** review flag tool tip end**/
		 
		if ($("body").hasClass("sitemap")){
		var param = getParameterByName("tabname");
		if(param == "personal"){
		$(".answers-article.accordian.clearfix h2").eq(0).parent().removeClass('close');
			}
		if(param == "privilege"){
		$(".answers-article.accordian.clearfix h2").eq(1).parent().removeClass('close');
			}
		if(param == "wealth"){
		$(".answers-article.accordian.clearfix h2").eq(2).parent().removeClass('close');
			}
		if(param == "nri"){
		$(".answers-article.accordian.clearfix h2").eq(3).parent().removeClass('close');
			}
		if(param == "corporate"){
		$(".answers-article.accordian.clearfix h2").eq(4).parent().removeClass('close');
			}
		if(param == "business"){
		$(".answers-article.accordian.clearfix h2").eq(5).parent().removeClass('close');
			}
		}
		
	/** premium calcultor **/
	if($("#chkPremiumLink").length > 0){
	$("#premiumCalc").hide();
	$("#chkPremiumLink").click(function() {
		$("#chkPremium").hide();
		$("#premiumCalc").show();
	});
	}
	 		
			
	/** accordian with radio : start **/
	$('.radioHide').hide();
	$("input[name$='radioBullet']").click(function() {
		var test = $(this).val();
		$("div.desc").hide();
		$("#radioBullet" + test).show();
	});
		
	$("input:radio[name='co']").change(function() {
		var target = $('#'+this.value);
		$('select').attr('disabled','disabled');
		if($(this).is(":checked")) {
			target.removeAttr('disabled');
		}     
	});
		 
	$(".children").change(function(){
		$("#subscriptionsSubmit").attr("href",$(this).val());
	})
	/** accordian with radio : end **/
	//$(document).on("click", "a.mymoto", function(){ alert("I am the greatest!"); });
	/** review : start **/
	$(document).on("click","a.votes-increment",function(event){
	event.preventDefault();
		var parent = $(this).parent(".review-vote");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
				//$('.votes-increment').bind('click', false);
				alert("thank you for voting");
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}
		});
		return false;
	});
	
	$(document).on("click","a.votes-decrement",function(event){
	event.preventDefault();
		var parent = $(this).parent(".review-vote");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
			//$('.votes-decrement').bind('click', false);
				alert("thank you for voting");
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}
		});
		return false;
	});
	
	$(document).on("click",".review-moderation a", function(){
		var parent = $(this).parent(".review-moderation");
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
				parent.html(data);
			}
		})
		return false;
	});
	
	$(".close-btn").click(function(){
		$(".comment-article").slideUp();
	});
	
	$("a.discuss-write-review").click(function(){
		$(".comment-article").slideDown();
	});
	
	$("#review-submit").click(function(){
		$(".comment-article").hide();
	});
	
	$("#allreview").click(function(){
		$("#allReviewTab").show();
		$("#mostHelpfulTab").hide();
		$("#helpfulbutton").hide();
		$("#allreviewbutton").show();
		$("#helpfulflag").hide();
	});
	
	$("#helpful").click(function(){
		$("#allReviewTab").hide();
		$("#allreviewbutton").hide();
		$("#mostHelpfulTab").show();
		$("#helpfulbutton").show();
		$("#helpfulflag").show();
	});
	
	$("#allcomment").click(function(){
		$("#allCommentTab").show();
		$("#mostHelpfulTab").hide();
	});
	
	$("#helpfulcomment").click(function(){
		$("#allCommentTab").hide();
		$("#mostHelpfulTab").show();
	});
	
	$("#allReviewTab").on("click","a.review-load", function (){
		$(this).remove();
		$("#load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-review").append(data);
				raty();
				addthis.toolbox('.addthis_toolbox');
				
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	

	
	$("#mostHelpfulTab").on("click","a.helpful-load", function (){
		$(this).remove();
		$("#helpful-box ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-helpful").append(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$("#allCommentTab").on("click","a.comment-load", function (){
		$(this).remove();
		$("#comment-load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-comment").append(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$("#mostHelpfulCommentTab").on("click","a.comment-helpful-load", function (){
		$(this).remove();
		$("#comment-helpful-box ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".load-helpful").append(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$(".review-dropdown, .compliment").on("click","a.city-filter ,a.channel-filter", function (){
		var name=$(this).html();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {	
				$(".compliment").html(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	}); 
	
	$("#review-submit").click(function (){
		$(".comment-article .close-btn").trigger("click");
	});
	/** review : end **/
	
	/** facebook : start **/
	$(".facebooklogin .init").click(function (event, redirect){
		var parent = $(this).parent();
		$.ajax({
			url : parent.attr("ajax"),
			data : parent.attr("data"),
			success : function (data) {
				$("#FacebookContainer").html(data);
				facebookLogin($("#FacebookContainer"),typeof redirect !== "undefined"? redirect : true);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
				facebookLoginError("unknown");
			}			
		});
	});
	
	$(".logged-in .logout").click(function(){
		var logoutUrl=$(this).attr("href");
		$.ajax({
			url : logoutUrl,
			dataType: "json",
			success : function (data) {
				if (data.response.status === "logout.complete"){
					var target = data.response.target;
					if (typeof target === "string" && target !== ""){
						window.location.replace(target);
					}
				}
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}
		});
		return false;
	});
	
	$(".review-login .init,.cards-login").click(function (){
		$(".facebooklogin .init").trigger("click",[false]);
	});
	/** facebook : end **/
	
	/** dashboard : start **/
	$(".dashboard-login .init").click(function (){
		$(".facebooklogin .init").trigger("click");
	});
	
	$("a.social-filter").click(function(){
		if (!$(this).hasClass("selected")){
			$($("a.social-filter.selected").attr("ref")).hide();
			$("a.social-filter.selected").removeClass("selected");
			$(this).addClass("selected");
			$($(this).attr("ref")).show();
		}
	});
	
	$("#allTab, #friendsTab").on("click","a.social-load-db", function (){
		var parent = $(this).parent();
		$(this).remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				parent.append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** dashboard : end **/
	
	/** compliment : start **/
	$(".compliment").on("click","a.compliment-load", function (){
		$(this).remove();
		$(".answers-see-all ").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".feedback-list").append(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** compliment : end **/
	

	/** viewcount : start **/
	if ($(".viewCount").length > 0){
	    var identifier = $("input[name='identifier']").val();
		var contentType = $("input[name='contentType']").val();
		var url = $("input[name='url']").val();
		var ajaxUrl = $("input[name='ajaxUrl']").val();
		$.ajax({
			url : ajaxUrl,
			data : "identifier="+identifier+"&contentType="+contentType+"&url="+url,
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
	}
	/** viewcount : end **/
	
	/** blog : start **/	
	
	if($("#RelatedBlogTag").length >0){
		var tag = $("#RelatedBlogTag").val();
		var blogid = $("#BlogId").val();
		var ajaxpage = $("#RelatedBlogAjax").val();
		$.ajax({
			url : ajaxpage,
			data : "tag="+tag+"&blogid="+blogid,
			success : function (data){
				$(".related-posts").append(data);
			},
			error : function (jqXHR, statusText, errorThrown){
					consoleLog(errorThrown);
			}
		});
	}
	
	$(".all-blog").on("click","a.blog-load", function (){
		$(this).remove();
		$("#blog-load-more-box").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$("#blog-list").append(data);
				addthis.toolbox('.addthis_toolbox');	
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	/** blog : end **/	
	
	/**wealth white color on product page**/
	if ($("body").hasClass("white-wealth")){
	//$(".BigBanner").after("<div class='white-wealth-bg'>");
	//$(".nav_down").after("</div>");
	$( ".middleContainer.clearfix:eq( 2 )" ).wrap( "<div class='white-wealth-bg'></div>" );
	}	
	/**wealth white color on product page**/
	
	/** mobile view left navigation : start **/
	if ($(document).width() < 600){
	
		if($(".leftColumnContainer").length > 0 && $(".leftColumnContainer").is(':empty')== false){
			var leftcontent = $(".leftColumnContainer").html();
			if($(".product-overview-content").length > 0){
				$(".middleContainer.clearfix.bggrey" ).after("<div class='leftColumnContainer open lhs-see-more' data-content='See Also'>"+leftcontent+"</div>");
			} else if($(".offer-right").length > 0){
			$(".offer-content" ).after("<div class='leftColumnContainer open lhs-see-more' data-content='See Also'>"+leftcontent+"</div>");
			}
			else {
				$(".rightColumnContainer" ).after("<div class='leftColumnContainer open lhs-see-more' data-content='See Also'>"+leftcontent+"</div>");
			}
		}
	}
	/** mobile view left navigation : end **/
	
	if ($(document).width() > 600 && $(document).width() <= 980){
		if($(".compare-credit-cards").length > 0 ){
			$(".leftColumnContainer").removeAttr("data-content");
			$(".leftColumnContainer ul").removeAttr("data-content");
		}
	}
	
	/** mobile view left navigation (product) : start **/
	if ($(document).width() > 600 && $(document).width() <= 980){
		$('.savings .middleContainer .leftColumnContainer').attr('data-content','');
		$('.product-overview .breadCrumbsContainer').css('display','block').css('margin','0 0 0 1%').css('left','0');
		$('.product-overview .leftColumnContainer').attr('data-content','');
		$('.product-overview .container #main .middleContainer .leftColumnContainer').attr('data-content','');
		$('.product-overview .container #main .middleContainer .leftColumnContainer').addClass('open').addClass('lhs-see-more');
	} else if ($(document).width() <= 600) {
		//$('.savings .BigBanner').css('height','auto');
		$('.savings .BigBanner.noTop img').css('margin-bottom','30px');
		$('.product-overview .breadCrumbsContainer').css('display','none');
		$('.product-overview .container #main .middleContainer .leftColumnContainer').attr('data-content','');
		$('.product-overview .nobanner .container #main .BigBanner').css('height','0px');
	} 
	/** mobile view left navigation (product) : end **/
	
	/** for nri banner removing style start **/
 if ($("body").hasClass("nri"))
	       {
				if($(document).width() < 600){
					if($(".BigBanner").length > 0){
									 $(".BigBanner").removeAttr( 'style' );	
					}	
				}	
		}	
		 /** for nri banner removing style end **/
	
		/** offer detail terms selected start **/
	if($(document).width() < 980){
	$(".tncs-details").on("click", function(){
	     $(".tncs-details").addClass("selected");
		 $(".tncs-details").css("color","#f5821f");
		 $(".tncs-link").removeClass("selected");
		 });
		 $(".tncs-link").on("click", function(){
		 $(".tncs-details").removeClass("selected");
		  $(".tncs-details").css("color","#454545");
		 $(".tncs-link").addClass("selected");
		});
 }
	/** offer detail terms selected end **/
	
	
	
	/** Service charge accordians : starts **/
		if($(".accordianid .accordian h2").length > 0){
				var i;
				var a_id_value
				/** for genertaing the ids to the links at the LHS **/
			   for( i= 0; i <$(".leftColumnContainer li a").length; i ++)
				{
				    $(".leftColumnContainer li a:eq('" + i + "')").attr( 'id', "accordian" + i);
				}
				
				 
				/** for closing the div by default and generating the ids to the accordians **/ 	
				for(i = 0; i <$(".accordianid .answers-content .answers-article").length; i++)
				{
				    $(".accordianid .answers-content .answers-article h2:eq('" + i + "')").attr( 'id', "accordian" + i + "_accor");
					$(".accordianid .answers-content .answers-article h2:eq('" + i + "')").parent().addClass('close');
				}
			
		
				/** for opening the respective accordian when the link clicked at the LHS **/
				
				$(".accordianid .leftColumnContainer li a").click(function(){
		
					a_id_value = $(this).attr("id");
			        a_id_value = a_id_value + "_accor";
				
					for(i = 0; i <$(".accordianid .answers-content .answers-article").length; i++)
					{
						var accordian_h2_id = $(".accordianid h2:eq('" + i + "')").attr( "id");
						if(a_id_value == accordian_h2_id)
						{
					   
							var o_id = accordian_h2_id;
							var ids = '#' + o_id;
                      
							if($(ids).parent("div").hasClass('close'))
							{
							    $(ids).parent().removeClass('close');
								$(this).addClass('selected');
								
							}
							for(i = 0; i <$(".accordianid .answers-content .answers-article").length; i++)
							{
								if(o_id!=$(".accordianid h2:eq('" + i + "')").attr( "id"))
								{
									var accordian_h2_id = $(".accordianid h2:eq('" + i + "')").attr( "id");
									var ids = '#' + accordian_h2_id;
									$(ids).parent().addClass('close');
									$(this).addClass('selected');
								}
							}
					
						}
					
					}
				  
				  
					for( i= 0; i <$(".leftColumnContainer li a").length; i ++)
					{
				        var temp_id = $(".leftColumnContainer li a:eq('" + i + "')").attr( 'id');
						temp_id = temp_id + "_accor";
							if(a_id_value!=temp_id)
							{
								$(".leftColumnContainer li a:eq('" + i + "')").removeClass("selected");
							}
					}
				  
				});
			  
			  
				$(".accordianid .answers-content .answers-article h2").on("click", function(){
		        
					var accor_id = $(this).attr('id');
					for( var i= 0; i <$(".accordianid .leftColumnContainer li a").length; i++)
					{
						
								var a_tem_id = $(".accordianid .leftColumnContainer li a:eq('" + i + "')").attr( 'id');
								a_tem_id = a_tem_id + "_accor";
								if(accor_id==a_tem_id)
								{
									$(".leftColumnContainer li a:eq('" + i + "')").addClass("selected");
								}
								
								if(accor_id!==a_tem_id)
								{
									$(".leftColumnContainer li a:eq('" + i + "')").removeClass("selected");
									$(".accordianid .answers-content .answers-article h2:eq('" + i + "')").parent().addClass('close');
								}
								
								if($(this).hasClass("close"))
								{
								
									$(".leftColumnContainer li a:eq('" + i + "')").removeClass("selected");
								}
					}
				}); 
			   
		
		}
		
	/** Service charge accordians : Ends **/
			
						
 /**  for imobile download **/
 
 if($("body").hasClass("imobile-dowload"))
 {
 $("#form1").attr("action","http://icicibank-imobile.com/leadpush/leadpush.aspx");
  $("#form1").attr("onsubmit","return validation();");
  $("#form1").attr("name","form1");
  $("#txtmobile").attr("onblur","javascript: if(this.value == ''){this.value='Mobile Number'}");
  $("#txtmobile").attr("onfocus","javascript: if(this.value == 'Mobile Number'){this.value='';}");
    
	
	$(".nav ul li a").click(function (e) {
     if ($(this).hasClass("current")) {
         $(this).removeClass("current");
     } else {
         $(".nav ul li a").removeClass("current");
         $(this).addClass("current");
     }     
     $('.tabcontent').hide();
       var index = $('.nav ul li a').index(this);
       $('.tabcontent').eq(index).show();
       return false;
     }); 
 }

 
 /** end  **/
			
 
	/** addthis : start **/ 
	if ( $.browser.msie ) {
		if( $.browser.version == "8.0"){
			addThisForIE();
		} else {
			addThis();
		}
	} else {
		addThis();
	}

	function addThisForIE() {
		if ($("#allReviewTab .answers-content,.feedback-list .answers-article,#blog-list .offer-social").length > 0){
			var addthis = document.createElement("script");
			addthis.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-527c94d91f34afc5";
			addthis.type = "text/javascript";
			var body = document.getElementsByTagName("body")[0];
			body.appendChild(addthis);
		}
	}

	function addThis() {
		if ($("#allReviewTab .answers-content,.feedback-list .answers-article,#blog-list .offer-social").length > 0){
			$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-527c94d91f34afc5");
		}
	}
	/** addthis : end **/ 
	
	/** product : start **/
	$(".hcpl-mnu-tab nav a").click(function headerChange(){
		var totalTab = $(".hcpl-mnu-tab nav a").length-1;
		var count = 0;
		var relativeCount = 1;
		for(count=0;count<=totalTab;count++){
			relativeCount=count+1;
			$(".hcpl-mnu-tab nav a").removeClass("selected");
		}
		var tab = $(this).attr("rel");
		$(this).attr("class","selected");
		var tabPlace = tab-1;
		for(count=0;count<=totalTab;count++){
			relativeCount=count+1;
			$("#customTab"+relativeCount).css("display","none");
		}
		var activeTab = "customTab"+tab;
		$("#"+activeTab).css("display","block");
	});
	/** product : end **/

	/** Search Page : Start **/
	if ($("input[name='searchallstore']").length > 0 && $("a.search-all-link").length > 0 && $(".allproductcount").length > 0){
		var allcount = $(".allproductcount").text();
		$(".displayallcount").html(allcount);
		$("a.search-all-link").attr("href", $("a.search-all-link").attr("href")+$("input[name='searchallstore']").val()+"&start=1&total="+allcount);
	}
	
	if ($("input[name='searchproductstore']").length > 0 && $("a.search-product-link").length > 0 && $("input[name='searchproductcount']").length > 0){
	  var productcount = $("input[name='searchproductcount']").val();
		$(".displayproductcount").html(productcount);
		$("a.search-product-link").attr("href", $("a.search-product-link").attr("href")+$("input[name='searchproductstore']").val()+"&start=1&total="+productcount);
	}
	
	if ($("input[name='searchfaqstore']").length > 0 && $("a.search-faq-link").length > 0 && $("input[name='searchfaqcount']").length > 0){
	  var faqcount = $("input[name='searchfaqcount']").val();
		$(".displayanswerscount").html(faqcount);
		$("a.search-faq-link").attr("href", $("a.search-faq-link").attr("href")+$("input[name='searchfaqstore']").val()+"&start=1&total="+faqcount);
	}
	
	$(".search-list-container").on("click","a.search-load", function (){
		$(this).remove();
		$(".search-list #down-icon").remove();
		$.ajax({
			url : $(this).attr("href"),
			success : function (data) {
				$(".search-list-container").append(data);
				searchRating();
			},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}			
		});
		return false;
	});
	
	$(".leftColumnContainer li a.search-navigation").click(function (){
		if (!$(this).hasClass("selected")){
			$(".search-navigation.selected").removeClass("selected");
			$(this).addClass("selected");
			$(".page-heading").html($(this).text().replace("›","").replace("(","(<span>").replace(")","</span>)"));
			$(".search-list-container .search-list").detach();
			$.ajax({
				url : $(this).attr("href"),
				success : function (data){
					$(".search-list-container").append(data);
					searchRating();
				}
			});
			
		}
		return false;
	});
	
	if ($(".search-navigation").length > 0){
		var show = getParameterByName("show");
		if (show === "faq"){
			$("a.search-faq-link").trigger("click");
		}
	}
	
	$(".SearcContainer").click(function(){
		if ($(document).width() < 980){
			$(".SearcContainer form").toggleClass("mobile-show",1000,"slideDown");
		}
	});
	
	$(".SearcContainer input[type='text']").click(function(event){
		if ($(document).width() < 980){
			event.stopPropagation();
		}
	});
	
	$(".SearcContainer form").submit(function (){
		var value = $(".SearcContainer form input[type='text']").val();
		if (value === null || typeof value === "undefined" || value.trim() === ""){
			return false;
		}
	});
	
	if ($(".search-list .search-results li").length > 0){
		searchRating();		
	}
	
	if ($("#Search").length > 0){
		$("#Search").autocomplete({
			serviceUrl : $(".SearcContainer").attr("ajax") + "segment=" + $("input[name='segment']").val(),
			paramName : "token",
			width: "256px",
			minChars : 3,
			onSelect : function (item){
				$(".SearcContainer form").trigger("submit");
			}
		});
	}
	/** Search Page : End **/
	
	/** Product Landing Page : Start **/
	if ($(".product-overview-content .product-overview-links input.item-identifier").length > 0){
		productRating();
	}
	/** Product Landing Page : End **/
	
	/** FAQ Detail : Start **/
	if ($("body").hasClass("bank-answers-page")){
		var hash = window.location.hash;
		if (hash != ""){
			var $anchor = $("a[name='" + hash.substring(1) + "']");
			if ($anchor != null && $anchor.parent().hasClass("close")){
				$anchor.siblings("h2").trigger("click");
				$("html,body").animate({scrollTop: $anchor.offset().top},"slow");
			}
		}
	}
	/** FAQ Detail : End **/

	/** Expand/Close  start */
	  // respective expand all
			if($(".rightColumnContainer .right #expand-all-overview").length >0){					
				$(".right #expand-all-overview").each(function(i){
					$(this).attr( 'class', "expand-all" + i);			 
					if($(".rightColumnContainer .answers-content ").length>0){					 
					   $(".answers-content").each(function(j){
						   $(this).attr( 'id', "expand-all" + j);				   
						   j++;				   
						})}
					i++;
				})					
				 $(".rightColumnContainer .right #expand-all-overview").click(function(){
				  var className = $(this).attr('class');				 
				  	$(".rightColumnContainer  #"+className+"").children().removeClass('close');							  
				 })				
			}
			// respective close all
				if($(".rightColumnContainer .right #close-all-overview").length >0){						
				 $(".right #close-all-overview").each(function(i){
					$(this).attr( 'class', "close-all" + i);			 
					if($(".rightColumnContainer .answers-content ").length>0){					
					   $(".answers-content").each(function(j){						  
                            $(this).addClass("close-all" + j);						  
						   j++;				   
						})
					}
					i++;
				 })				
				 $(".rightColumnContainer .right #close-all-overview").click(function(){
				  var className = $(this).attr('class');
				  	$(".rightColumnContainer  ."+className+"").children().addClass('close');							  
				 })				
			    }   
	
	/** Expand/Close  end */
	/** wealth insight poll start **/	
	if($('#panel-poll form li .poll').length>0){
		$('#panel-poll form li .poll').uniform();
	}

	/** wealth insight poll start **/
});

function facebookLogin(placeholder,redirect){

	if ($(".error-type").length > 0){
		facebookLoginError($(".error-type").text());
	} else if(checkPopup(placeholder.find("input[name='udevice']").val())){
		
		$(placeholder).find(".user").facebook_login({
			appId : placeholder.find("input[name='fbappid']").val(),
			permissions : placeholder.find("input[name='fbperms']").val(),
			display : "popup",
			initwait : 5,
			onInit : function(status) {
				if (status){
					placeholder.find(".user").trigger("click");
				}
			},
			onLogin : function(response) {
				var token = response.accessToken;
				var meurl = placeholder.find("input[name='fbmeurl']").val();
				var flurl = placeholder.find("input[name='fbflurl']").val().split("?");
				var usurl = placeholder.find("input[name='fbusurl']").val();
				var query = flurl[1].substr(2);
				FB.api(meurl, {access_token : token}, function(user) {
					FB.api(flurl[0] , {access_token : token, q : query}, function(friends) {
						
						var friendlist = "";
						var index = -1;
						for (index = 0; index < friends.data.length ; index++){
							friendlist = (index === 0)? friends.data[index].uid : friendlist + "," + friends.data[index].uid;
						}					
						
						var fblocation = (typeof user.location !== "undefined")?user.location.name.split(",")[0].trim().toLowerCase():"";
						var fbemployer = (typeof user.work !== "undefined" && user.work[0].employer.name.toLowerCase() !== "unemployed");
						var fbeducation = (typeof user.education !== "undefined")?user.education[0].school.name:"";	
						var fbhometown = (typeof user.hometown !== "undefined")?user.hometown.name.split(",")[0].trim().toLowerCase():"";
						var fbuserage = (typeof user.birthday !== "undefined")?getAge(user.birthday):0
						var fbcount = (typeof user.birthday !== "undefined")?birthDayReminder(user.birthday):-1;       					
						var param = {"token"  : token, 
							 "id"           : user.id, 
							 "email"        : (typeof user.email !== "undefined")?user.email:"", 
							 "firstname"    : (typeof user.first_name !== "undefined")? user.first_name:"", 
							 "lastname"     : (typeof user.last_name !== "undefined")? user.last_name:"",
							 "username"     : (typeof user.username !== "undefined")? user.username:"",
							 "gender"       : (typeof user.gender !== "undefined")? user.gender:"", 
							 "friendlist"   : friendlist,
							 "location"     : fblocation,
							 "relationship" : (typeof user.relationship_status !== "undefined")?user.relationship_status:"", 
							 "hometown"     : fbhometown,
							 "birthday"     : (typeof user.birthday !== "undefined")?user.birthday:"", 
							 "religion"     : (typeof user.religion !== "undefined")?user.religion:"", 
							 "timezone"     : (typeof user.timezone !== "undefined")?user.timezone:"",
							 "bdayReminder" : fbcount,
							 "age"	        : fbuserage,
							 "employer"	    : fbemployer,
							 "education"	: fbeducation
						};
						
						consoleLog(param);
						
						$.ajax({
							url : usurl,
							data : param,
							success : function (data) {
								consoleLog(data);
								if ($(".success-login").length > 0) {
									var url = $(".success-login").attr("href");
									if (url !== "" && redirect){
										window.location.replace(url);
									} else {
										window.location.reload(true);
									}
								} else {
									window.location.reload(true);
								}
							},
							error : function (jqXHR, statusText, errorThrown){
								consoleLog(jqXHR.status + ":" + statusText);
								facebookLoginError("unknown");
							}
						});
					});
				});
			},
			onError : function(type) {
				facebookLoginError(type);
			}
		});
		
	} else {
		facebookLoginError("popup");
	}
}

function facebookLoginError(type){
		
	if ($("a.error-"+type).length > 0){
		var target = $("a.error-"+type).attr("href");
		if (target !== ""){
			// logic for error modal launcher
			if ($("#modal-background").length === 0){
				$("footer").append("<div id=\"modal-background\"></div>");
			}
			if ($("#modal-error-content").length === 0){
				$("footer").append("<div id=\"modal-error-content\"><div class=\"modalContent\"></div><a href=\"javascript:void(0);\" onclick=\"modalErrorClick();\" class=\"btn inline-btn modal-error-close\">OK</a></div>");
			}
			$("#modal-error-content .modalContent").load(target, function (){
				$("#modal-background").fadeIn("400");
				$("#modal-error-content").fadeIn("600");
				$("#modal-error-content,#modal-background").toggleClass("active");
			});
		}
	} else {
		facebookForceLogout();
	}
}

function modalErrorClick(){
	$("#modal-background").fadeOut("600");
	$("#modal-error-content").fadeOut("400");
	$("#modal-error-content,#modal-background").toggleClass("active");
	facebookForceLogout();
}

function facebookForceLogout(){
	var logoutUrl=$("a.force-logout").attr("href");
	$.ajax({
		url : logoutUrl,
		dataType : "text",
		success : function (data) {
			consoleLog(data);
			window.location.reload(true);
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(errorThrown);
		}
	});
}

function facebookPanelData(){
	var dataUrl = $(".reviewContainerAjax").attr("ajax");
	var dataParams = $(".reviewContainerAjax").attr("data");
		
	$.ajax({
		url : dataUrl,
		data : dataParams,
		success : function (data){
		    $(".reviewContainerAjax").html(data);
			$(".panel-review-rating").raty({
				readOnly : true,
				halfShow : false,
				starOff  : $("input[name='readonlystaroff']").val(),
				starOn   : $("input[name='readonlystaron']").val(),
				width    : 160,
				score    : function() {
					return $(".panel-review-rating").attr("data-source");
				}
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(jqXHR.status + ":" + statusText);
		}
	});
}


function consoleLog(message){
	if ($("html").hasClass("no-ie")){
		console.log(message);
	}
}

function checkPopup(device) {
	
	var popupallowed = "false";
	
	if (typeof device === "string" && device !== "desktop"){
		return true;
	}
	
	if (Modernizr.localstorage) {
		popupallowed = localStorage.getItem("popupallowed");
	}

	if (popupallowed === "true"){
		return true; 
	} else {
		var pop = window.open("about:blank", "check_popup", "top=-1000,left=-1000,width=1,height=1,toolbar=0,location=0,status=0,resizable=0");
		
		if(!pop || pop.outerHeight === 0) {
			return false;
		} else {
			pop && pop.close();
			if (Modernizr.localstorage){
				localStorage.setItem("popupallowed","true");
			}
			return true;
		}
	}
}

function getParameterByName(name) {
    var name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	var results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function birthDayReminder(fbbirthdate){
	var birthdate = new Date(fbbirthdate);
	var todate = new Date();
	var today =  new Date(todate.getFullYear(), todate.getMonth(), todate.getDate());
	var birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
	if (birthday < today){
		birthday = new Date(today.getFullYear()+1, birthdate.getMonth(), birthdate.getDate());
	}
	return Math.ceil((birthday-today)/86400000);
}

function getAge(fbBDate) {
    var dateString = fbBDate;
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function rateOffer(){
	var score = $('.offer-rating').raty('score');
	var title = $("#offer_title").html();
	var identifier = $("#offer_identifier").html();
	var reviewtext = $("#offer_text").html();
	var homepagelink = $("#offer_link").html();
	var contenttype = $("#contentType").html();
	var url = $("#ratinAjax").html();
	$.ajax({
		url:url,
		data:"title="+title+"&identifier="+identifier+"&reviewtext="+reviewtext+"&score="+score+"&homepagelink="+homepagelink+"&contenttype="+contenttype,
		success: function(data) {
			console.log(data);
			if(data.firstElementChild.childNodes[1].childNodes[0] != null){
				if(data.firstElementChild.childNodes[1].childNodes[0].data == "review.invalid.command"){
				//var scorenull=document.getElementsByName("score")[1].value;
				//var resetrating = "";
				//document.getElementsByName("score")[1].value = resetrating;
					alert("Login Before Rating");
				}
			}
		}
	});
}

function searchRating(){
	$.ajax({
		dataType: "json",
		url: $("input[name='searchreviewjs']").val(),
		success: function (data){
			$(".search-list:last-child .search-results li .meta-bar input.item-identifier").each(function (index,element){
				var identifier = $(element).val();
				if (identifier !== ""){
					var review = jsonPath(data,"$.reviews[?(@.identifier.indexOf('"+identifier+"') > -1)]");
					if (typeof review === "object"){
						$(this).parent().append("<span class=\"separator\"> | </span>");
						$(this).parent().append("<a class=\"reviews\" href=\"" + review[0].reviewlink + "\">" + review[0].reviews + " Reviews</a>");
						$(this).parent().append("<span class=\"separator\"> | </span>");
						$(this).parent().append("<div data-source=\""+ review[0].avgrating +"\" class=\"search-rating\"></div>");
					}
				}
			});
			
			var staron = $("input[name='readonlystaron']").val();
			var staroff = $("input[name='readonlystaroff']").val();
			
			$(".search-list:last-child .search-results li .meta-bar .search-rating").each(function (index,element){
				$(element).raty({
					readOnly : true,
					starOff : staroff,
					starOn  : staron,
					size    : 32,
					score: function() {
						return $(element).attr("data-source");
					}
				});
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(errorThrown);
		}	
	});
}

function productRating(){
	$.ajax({
		dataType: "json",
		url: $("input[name='productreviewjs']").val(),
		success: function (data){
			$(".product-overview-content .product-overview-card .product-overview-links input.item-identifier").each(function (index,element){
				var identifier = $(element).val();
				if (identifier !== ""){
					var review = jsonPath(data,"$.reviews[?(@.identifier.indexOf('"+identifier+"') > -1)]");
					if (typeof review === "object"){
						$(this).parent().append("<div data-source=\""+ review[0].avgrating +"\" class=\"product-rating\"></div>");
						$(this).parent().append(" | ");
						$(this).parent().append("<a href=\""+ review[0].reviewlink +"\">" + review[0].reviews + " Reviews</a> <i class=\"icon-angle-right\"></i>");
					}
				}
			});
			
			var staron = $("input[name='readonlystaron']").val();
			var staroff = $("input[name='readonlystaroff']").val();
			
			$(".product-overview-content .product-overview-card .product-overview-links .product-rating").each(function (index,element){
				$(element).raty({
					readOnly : true,
					starOff : staroff,
					starOn  : staron,
					size    : 16,
					score: function() {
						return $(element).attr("data-source");
					}
				});
			});
		},
		error : function (jqXHR, statusText, errorThrown){
			consoleLog(errorThrown);
		}	
	});
}
/** Tooltip**/

function normaliseString(instring) {
	var outstring = instring.replace(/\&/g, "and");
	outstring = outstring.replace(/(\.xml)$/g, "");
	outstring = outstring.replace(/[^a-zA-Z0-9\s]/g, "");
	outstring = outstring.replace(/\s+/g, "-");
	return outstring.toLowerCase();
 }
 

 /** for faq question start **/
$('.bank-answers-page .answers-article h2 span').on('click', function(){
	var $this = $(this);
	$this.parent().toggleClass('close');
});
 /** for faq question ends **/
 /** for by default personal as selected starts**/
  if($(".middleContainer.clearfix ul.menu li.selected").length == 0){
 $(".middleContainer.clearfix ul.menu li").first().addClass("selected");
 }
  /** for by default personal as selected ends **/
 
 /** for header navigation fixed start **/
 if ($(document).width() > 990){
 if($(".middleContainer.clearfix ul.menu li.selected").length == 0){
 $(".middleContainer.clearfix ul.menu li").first().addClass("selected");
 }
	if($(".middleContainer.clearfix ul.menu li.selected a").html() == "Personal"){
		var eq;
		for(eq = 0;eq <=$(".nav-child .sub-container").length;eq++ ){
			$('.nav-child').attr('style', "height:480px;");
			$('.nav-child .sub-container').attr('style', "height:480px;");
				
		}
		for(eq = 0;eq <=$(".middleContainer.secondNav ul.menu.clearfix li.shorter").length;eq++ ){
			$(".middleContainer.secondNav ul.menu.clearfix li.shorter").attr('style', "text-align:center;width:112px;");
		}	
	}
}
if ($(document).width() < 980){

if($(".middleContainer.clearfix ul.menu li.selected a").html() == "Personal"){
		var eq;
		for(eq = 0;eq <=$(".middleContainer.secondNav ul.menu.clearfix li.shorter").length;eq++ ){
			$(".middleContainer.secondNav ul.menu.clearfix li.shorter").attr('style', "text-align:left;width:auto;");
		}	
	}
}
 /** for header navigation fixed end **/
 


 
  /** nri ga code start **/
  	if($(".middleContainer.clearfix ul.menu li.selected a").html() == "NRI"){
	$("body").append("<!-- Google Tag Manager --><noscript><iframe src='//www.googletagmanager.com/ns.html?id=GTM-N9PG2F' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N9PG2F');</script><!-- End Google Tag Manager -->");
	
	}

    /** nri ga code end **/
	
  
 /** for wealth breadcrumb fix start **/
if($(".breadCrumbsContainer a").first().html() == "Wealth"){
$(".breadCrumbsContainer a").first().html("Wealth Management");
}
/** for wealth breadcrumb fixend **/

/** for scroll position start **/
/*if($("#main").length >0){
$("#main").append("<div class='nav_down' id='nav_down'></div>");
}*/


/** for scroll position start **/ 
function raty(){
if ($(".review-list").length > 0){
	    var staron = $("input[name='readonlystaron']").val();
		var staroff = $("input[name='readonlystaroff']").val();
		$(".review-rating").each(function (index,element){
			$(element).raty({
			    readOnly : true,
				starOff : staroff,
				starOn  : staron,
				score: function() {
					return $(element).attr("data-source");
				}
			});
		});
	}
	}
	
	/** New RHS  for mobile start **/	
	function RhsMobile (indexvalue) {
				if ($(".LeftPanel .sub-container a").attr("child") !== 'undefined' && $(".LeftPanel .sub-container a").attr("child") !== false) {
             //var indexvalue = $("a.rhs-arrow-click").index(this);
             if ($(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).hasClass("icon-angle-up")) {
                 $(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).removeClass("icon-angle-up");
                 $(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).addClass("icon-angle-down");
             } else if ($(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).hasClass("icon-angle-down")) {
                 $(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).removeClass("icon-angle-down");
                 $(".LeftPanel .sub-container a  .rhs-arrow").eq(indexvalue).addClass("icon-angle-up");
             }

             if ($(".rhs-mobile-show").eq(indexvalue).hasClass("rhs-show")) {
                 $(".rhs-mobile-show").eq(indexvalue).removeClass("rhs-show");
                 $(".rhs-mobile-show").eq(indexvalue).addClass("rhs-hide");
             } else if ($(".rhs-mobile-show").eq(indexvalue).hasClass("rhs-hide")) {
                 $(".rhs-mobile-show").eq(indexvalue).removeClass("rhs-hide");
                 $(".rhs-mobile-show").eq(indexvalue).addClass("rhs-show");
					}
			}
         }
		 
	/** New RHS  for mobile end **/
	
		

	
 