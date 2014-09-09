// set global object
var lights = {};
// define URL of Hue Bridge
var bridgeURL = 'http://192.168.0.2/api'

// gets info of all lights
var getAllLights = function() {
	$.ajax({
			url: bridgeURL + '/newdeveloper/lights',
			type: 'get',
		success: function(response) {
			lights.all = response;
			lights.count = Object.keys(lights.all)
			// console.log(lights.count)
		}
	});
};
//  switch on function
var switchOn = function () {
	// runs a loop with -2 length so the last two lights added do not turn on
	for (var i = 0; i < ((lights.count.length)-2); i++) {
		lights.count[i]
		$.ajax({
				url: bridgeURL + '/newdeveloper/lights/'+ lights.count[i]+ '/state',
				type: 'put',
				contentType: "text/plain;charset={UTF-8}",
				dataType: 'json',		
				data: JSON.stringify({ "on": true }),
			success: function(response) {
				// console.log('state true: ');
				// console.log(response);
			}
		});
	};
};

// switch off function
var switchOff = function () {
	// runs loops with full length so all lights are turned off
	for (var i = 0; i < lights.count.length ; i++) {
		lights.count[i]
		$.ajax({
				url: bridgeURL + '/newdeveloper/lights/'+ lights.count[i]+ '/state',
				type: 'put',
				contentType: "text/plain;charset={UTF-8}",
				dataType: 'json',		
				data: JSON.stringify({ "on": false }),
			success: function(response) {
				// console.log('state true: ');
				// console.log(response);
			}
		});
	};
};

// when page is ready, get all lights info and set up click events
$(document).ready(function(){

	getAllLights();

	$("#on").on( "click", function() {
		switchOn(); 
	});

	$("#off").on( "click", function() {
		switchOff(); 
	});

});

