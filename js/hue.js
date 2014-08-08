var lights = {};
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

var switchOn = function () {
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

var switchOff = function () {
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

$(document).ready(function(){

	getAllLights();

	$("#on").on( "click", function() {
		switchOn(); 
	});

	$("#off").on( "click", function() {
		switchOff(); 
	});

});

