	var xmlhttp;
	var timeSelected;



	$("document").ready(function() {
	  getTimes();
	  //getBookings();
	  //getUserBooking();



		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output = day + '/' +
		    ((''+month).length<2 ? '0' : '') + month + '/' +
		    ((''+day).length<2 ? '0' : '') +  d.getFullYear();
		alert(output);

	    //         $("button").click(function(){
	    // console.log("Button clicked");
	    // console.log($("button").val());
	});
	// add your solution here
		function getTimes() {

		$.ajax({
			url: "getTimes.php",
			cache: false,
			type: "GET",
			dataType: "json",       // text, json, xml
			success: successFunc,
			error: errorFunc
		});
	  
		function successFunc(data) {	
			console.log(data);

			//selectOption += `<option value=-1>ALL</option>`
			var output ="";

			output +="<table border = 1><tr><th>Time</th><th>Player 1</th><th>Player 2</th><th>Player 3</th><th>Player 4</th><th></th></tr>";
		  	
		  	$.each(data.bookingTimes, function(index, value) {
	        output += '<tr>'
							output += `<td>${value.time}</td>`;
							output += '<td></td>';
							output += '<td></td>';
							output += '<td></td>';
							output += '<td></td>';
							output += `<td><button id=${value.time} value=${value.time}>${value.time}</button></td>`;
							output += '</tr>';

	        });
	        $("#results").append(output);
	    $("button").click(function(){
	    console.log("Button clicked");
	    timeSelected = this.id;
	    alert(timeSelected);
		window.open("visitorBookingForm.php");
	});


		}

		function errorFunc(xhr,status,strError) {
			$("#results").text("There was an error!");
		}
	}




