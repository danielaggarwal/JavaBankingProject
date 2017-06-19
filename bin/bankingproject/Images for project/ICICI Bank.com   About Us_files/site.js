$(document).ready(function(){
	if (Modernizr.localstorage) {
		var currentTime = new Date();
		var lvTime = Date.parse(localStorage.getItem("lvTime"))
		var diffHours = (currentTime-lvTime)/216000;
		if (diffHours > 2){
			var lvUrl = localStorage.getItem("lvUrl");
			var lvTitle = localStorage.getItem("lvTitle");
			$(".lastVisit").html("<p> You Last visited : </p> <a href=\""+lvUrl+"\"> "+lvTitle+" </a> <a class=\"closeVisit\"> X </a>");
			$(".lastVisit").delay(1000).fadeIn(1000);
			$( "a.closeVisit" ).click(function() {
				$( ".lastVisit" ).fadeOut(400);
			});
		}
	}
});

$(window).on("beforeunload",function(){
	if (Modernizr.localstorage) {
		var thisPage = window.location.href;
		var homePage = window.location.protocol+"//"+window.location.host+$(".Logo").attr("href");
		if (thisPage != homePage){
			localStorage.setItem("lvUrl",thisPage);
			localStorage.setItem("lvTime",(new Date()).toGMTString());
			localStorage.setItem("lvTitle",$(document).find("title").html());
		}
	}
});