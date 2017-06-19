/************************
 Author  : Rajaguru.S 
 Filename : geoip.js 
 Description : getting location and customercare number based on Geo ip
*************************/
$(document).ready(function () {
    getLocation();

    $('#getCity').click(function () {
        $("#modalOverlay").attr("style", "display:block");
        $("#modalGeo").attr("style", "display:block");
    }); 

});

function getLocation() {
    if ($("#contactNo").length > 0) {
        var ajaxUrl = $("#GeoIpAjaxUrl").val();
        if (ajaxUrl != "") {
            $.ajax({
                url: ajaxUrl,
                data: {
                    'city': selectedLocation
                },
                success: function (data) {		                  						
                    var cityName = $(data).find('#city').val();	                  			
                    var phoneNumber = $(data).find('#contact').val();				
                    var cityData = $(data).filter('#cityList').html();
                    if (cityName != '' && phoneNumber != '' && cityName != 'undefined' && phoneNumber != 'undefined') {
                        $("#contactCity").html(cityName);
                        $("#contactNo").html(phoneNumber);
                    }
                    $("body").append("<div id='modalOverlay' style='display:none'>&nbsp;</div><div id='modalGeo' style='display:none'>&nbsp;</div>");
                    $("#modalGeo").html(cityData);

                },
                error: function (jqXHR, statusText, errorThrown) {
                    consoleLog(errorThrown);
                }
				
            });
        }
    }

} 

var selectedLocation = '';

function citySubmit() {
    selectedLocation = document.getElementById("cityDrop").value;   
    if (selectedLocation != 'select') {
        getLocation();
        $("#modalOverlay").attr("style", "display:none");
        $("#modalGeo").attr("style", "display:none");
		$("#modalGeo").html('');
    }else{
	  $('#cityError').html('Please select your location'); 
	  $('#cityError').attr('style','color:red');
	}
	
}

function cityChange(){
  $('#cityError').html('');
  $('#cityError').attr('style','');
}

function cityClose() {    
    $("#modalOverlay").attr("style", "display:none");
    $("#modalGeo").attr("style", "display:none");
	$('#cityError').html('');
}
