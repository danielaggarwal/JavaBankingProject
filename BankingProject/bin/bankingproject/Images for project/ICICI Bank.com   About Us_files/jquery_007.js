/*
 * jquery.flogin.js
 * Added functionality to handle init.
 *
 * Pratish Gondalia - 2013
 *
 * Based On :
 * flogin.js
 * stupidly simple facebook login as a jQuery plugin
 *
 * Gary Rafferty - 2013
 *
 */
 (function($) {
  $.fn.facebook_login = function(options) {
    var defaults = {
	  display     : "popup",
	  permissions : "email",
	  initwait    : 3,
	  onInit      : function(status) {if (status){console.log([200,'OK']);} else {console.log([500,'Error']);}},
      onLogin     : function(response) {console.log(response)},
	  onError     : function(status) {console.log([500,status]);}
    };

    var settings = $.extend({}, defaults, options);

    if(settings.appId === "undefined") {
      settings.onError("config");
      return false;
    }

	$.getScript('/assets/js/lib/all.js', function(){
		if (FB){
			FB.init({
				appId : settings.appId
			});
		}
	});

	
	var initLoop = 0;
	
	setTimeout(initDone,3000);
	
	function initDone() {
		if (typeof FB === "object"){
			settings.onInit(true);
		} else if (initLoop > settings.initwait){
			settings.onError("timeout");
		} else {
			initLoop = initLoop + 1;
			setTimeout(initDone,3000);
		}
	}

    this.bind("click", function() {
      FB.login(function(response) {
		if(response.status === "connected") {
			settings.onLogin(response.authResponse);
		} else if (response.status === "not_authorized") {
			settings.onError("authorize");
        } else {
			settings.onError("cancelled");
        }
      }, {scope: settings.permissions, display : settings.display});
    });
  }
})(jQuery);

