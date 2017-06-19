$(document).ready(function (){
/** poll : start **/
	$(".poll-view").on("click", "a.vote-link" , function(){
		$(".poll-result").html("");
		$(".poll-form").show();
		$(".view-result").show();
		$(".vote-link").hide();
	});
	
	$(".poll-view").on("click", "a" , function(){
		$.ajax({
			url : $(this).attr("href"),
			success : function (data){
				$(".poll-result").html(data);
				$(".vote-link").show();
				$(".view-result").hide();
				$(".poll-form").hide();
			}
		});
		return false;
	});
	
	$(".close-modal").click(function(){
		$("#modalOverlay").fadeOut(500);
		$("#modal").fadeOut(400);
	});
  	/** poll : end **/
	
	/** Survey Start **/
	$("#viewResult").on("click", function(){
		 document.getElementById("poll-result").style.display = "block";
	});
	/** Survey End **/
});

/** for poll popup window start **/
$(".poll-window").on("click",function(){
$("footer").append("<div id='modalOverlay' style='display:none'>&nbsp;</div><div id='modal' style='display:none'>&nbsp;</div>");
	$.ajax({
		url : $(this).attr("href"),
		success : function (data){
		$("#modalOverlay").attr("style","display:block");
			$("#modal").attr("style","display:block");
			$("#modal").html(data);
		},
			error : function (jqXHR, statusText, errorThrown){
				consoleLog(errorThrown);
			}
	});
	return false;
});	

$("#pollForm").on("submit", function(){
	var assetId = $("input[name='asset_id']").val();
	var form_name = $("input[name='form_name']").val();
	//consoleLog("form_name = "+form_name);
	var pollValue = $("input[name='poll_value']:radio:checked").val();
	if (pollValue == '' || typeof(pollValue) == 'undefined') {
		$('#pollMsg').attr("style","color:red;");
		$('#pollMsg').html("Please select an answer.");
	}
	if (pollValue != '' && typeof(pollValue) != 'undefined') {
		if (Modernizr.localstorage) {
			var currentTime = new Date();
			var ansTime = Date.parse(localStorage.getItem("ansTime"));
			var pollFormName = localStorage.getItem("pollFormName");
			//consoleLog("pollFormName in local storage = "+pollFormName);
			var diffHours = (currentTime-ansTime)/216000;
			if (pollFormName == form_name && diffHours < 5){
				(function($) {
					$(function() {
						$('#poll_pop_up').bPopup();
					});
				})(jQuery);
				//alert("You have already registered your vote, Thank you for your interest");
			} else {
				if (Modernizr.localstorage) {
					if (form_name != '' && typeof(form_name) != 'undefined' && form_name == 'wealthPollForm') {
						localStorage.setItem("pollFormName","wealthPollForm");
						localStorage.setItem("ansTime",(new Date()).toGMTString());
					} else {
						localStorage.setItem("pollFormName","pollForm");
						localStorage.setItem("ansTime",(new Date()).toGMTString());
					}
				}
				$.ajax({
					url : $(this).attr("action"),
					data : "asset_id="+assetId+"&poll_value="+pollValue,
					success : function (data){
						$('#pollMsg').attr("style","color:#F5821F;");
						$('#pollMsg').html("Thank you for voting.");
						$('input#poll_value').attr('disabled','disabled');
					}
				});
			}
		}
	}
	return false;
});
$('.opinionClose').click(function(){
  window.location.reload(true); 
});
/** for poll popup window end **/

/** survey **/
$("#surveySubmit").on("click", function(){
  var names = [];
	var flag = true;
    $('input[type="radio"]').each(function() {       
      names[$(this).attr('name')] = true;
    });   
    for (name in names) {
      var radio_buttons = $("input[name='" + name + "']");
      if (radio_buttons.filter(':checked').length == 0) {
      flag = false;
      } 
    }
	if(!flag){
	 $('#errorMsg').attr("style","color:red;");
	 $('#errorMsg').html("Please answer all the questions");
	}
	if(flag){
		if (Modernizr.localstorage) {
			var currentTime = new Date();
			var ansTime = Date.parse(localStorage.getItem("ansTime"));
			var formName = localStorage.getItem("formName");
			//consoleLog("formName = "+formName);
			var diffHours = (currentTime-ansTime)/216000;
			if (formName == "surveyForm" && diffHours < 5){
				(function($) {
					$(function() {
						$('#survey_pop_up').bPopup();
					});
				})(jQuery);
				//alert("You have already registered your vote, Thank you for your interest");
			} else {
				if (Modernizr.localstorage) {
					localStorage.setItem("formName","surveyForm");
					localStorage.setItem("ansTime",(new Date()).toGMTString());
				}
				$('#errorMsg').html("");
				$("#surveyForm").submit();
			}
		}
	}
}); 