// setTimeout(function(){
//    window.location.reload(1);
// }, 5000);
var data;
var output;
var xmlhttp;
var year;
var selectedDate;
var date;
var number =-2;
var currentTime;
var today;
window.onload=function() {
	var fullDate = new Date()
	//console.log(fullDate); 
	//convert month to 2 digits
	var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
	date = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	today = date;
	//console.log(date);
	selectedDate = date;
    getAjaxData();
    var now = new Date(Date.now());
    if (now.getHours() < 10 && now.getMinutes() < 10)
    {
		currentTime = "0"+now.getHours() + ":0" + now.getMinutes();
    }
  	else if(now.getHours() < 10)
  	{
  		currentTime = "0"+now.getHours() + ":" + now.getMinutes();
  	}
  	else if(now.getMinutes() < 10)
  	{
  	currentTime = now.getHours() + ":0" + now.getMinutes();
  	}
	else
	{
	currentTime = now.getHours() + ":" + now.getMinutes();
	}
	console.log(currentTime);
    startTime();



 var dateFormat = $.datepicker.formatDate('DD, d MM, yy', new Date(fullDate));
 //alert(dateFormat);
 $( "#date" ).html(dateFormat);


    $( "#datepicker" ).change(function() {
    	selectedDate = $("#datepicker").val();
    	$("#date").html(selectedDate);
		var newDate = new Date(selectedDate);
		if(newDate.getDate() < 10)
		{
		var newTwoDigitDay = ((newDate.getDate().length) === 1)? (newDate.getDate()) : '0' + (newDate.getDate());
		var newTwoDigitMonth = ((newDate.getMonth().length+1) === 1)? (newDate.getMonth()+1) : '0' + (newDate.getMonth()+1);
		selectedDate = newTwoDigitDay+ '/'+newTwoDigitMonth + '/' + newDate.getFullYear();
		}
		else
		{
		var newTwoDigitMonth = ((newDate.getMonth().length+1) === 1)? (newDate.getMonth()+1) : '0' + (newDate.getMonth()+1);
		selectedDate = newDate.getDate()+ '/'+newTwoDigitMonth + '/' + newDate.getFullYear();
		}

		console.log(selectedDate);
		$( "#datepicker" ).val("");
		date = selectedDate;
		getAjaxData();

});

}

var currentYear;

function getAjaxData() {

	year = new Date();
	currentYear = year.getFullYear();

  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function (){
    showAjaxData();
  };

  //xmlhttp.open("GET","getBookingData.php" ,true);
  xmlhttp.open("GET","getBookingData.php?date="+date ,true);
  xmlhttp.send();
}
//setInterval(getAjaxData, 5000);

function showAjaxData(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	  data = JSON.parse(xmlhttp.responseText);
	  output = "";
	  /*if (data.live[0].rnd == 0) 
	  {
	  	output = "No live data";
	  }


	  	else
	 	{*/
		  output += "<table id=bookingsTable class=bookingTimes border = 1><tr><td>Time</td><td>Booking Name</td><td>Player 1</td><td>Player 2</td><td>Player 3</td><td>Player 4</td><td></td></tr>"

		  	for(i = 0; i < data.bookingTimes.length; i++)
		  	{	
		  	  output += '<tr><td>' + data.bookingTimes[i].bookingTimes + '</td>';
		      output+= '<td></td>';
		  	  
		  	  if(selectedDate == today && data.bookingTimes[i].bookingTimes <= currentTime)
		  	  {
		  	  output += '<td></td>';
		  	  output += '<td></td>';
		  	  output += '<td></td>';
		  	  output += '<td></td>';
		  	  output += '<td>Time has passed</td>';
		  	  output += '</tr>'

		  	  }
		  	  else
		  	  {
		  	  output += '<td><input id=players name=players class=cat type=radio value=1 > €30.00</td>';
		  	  output += '<td><input id=players name=players class=cat type=radio value=2 > €60.00</td>';
		  	  output += '<td><input id=players name=players class=cat type=radio value=3 > €90.00</td>';
		  	  output += '<td><input id=players name=players class=cat type=radio value=4 > €120.00</td>'
		  	  output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
		  	  output += '</tr>'
		  	}
		  	}
		      
  		output += "</table>";

		document.getElementById('results').innerHTML = output;



		 		
		  for(i = 0; i < data.bookingTimes.length; i++)
		  	{	
		  		for(var a = 0; a < data.bookings.length; a++)
		  	  		{
		  				if(data.bookingTimes[i].bookingTimes == data.bookings[a].bookingTime)
					  	    {

					  	    	if(data.bookings[a].player2 == 0 && data.bookings[a].player3 == 0 && data.bookings[a].player4 == 0)
					  		   	{
					  		    //alert(document.getElementById("bookingsTable").rows[(i+1)].cells[2].innerHTML);
					  		    //alert(document.getElementById("bookingsTable").rows[(i+1)].cells[3].innerHTML);
					  		    //alert(document.getElementById("bookingsTable").rows[(i+1)].cells[4].innerHTML);
					  		   	var x = document.getElementById("bookingsTable").rows[(i+1)].cells;
					  	    	x[1].innerHTML = data.bookings[a].bookingName;
					  	    	x[2].innerHTML = data.bookings[a].player1;
					  	    	x[3].innerHTML = "";
					  	    	x[4].innerHTML = "";
					  	    	x[5].innerHTML = "";

		  	  					if(selectedDate == today && data.bookingTimes[i].bookingTimes <= currentTime)
							  	  {
							  	  		output += '<td>Time has passed</td>';
							  	  }
							  	  else

		  	  					x[6].innerHTML = "Tee Reserved";
					  		}
					  		   	else if(data.bookings[a].player3 == 0 && data.bookings[a].player4 == 0)
					  		   	{
					  		   	var x = document.getElementById("bookingsTable").rows[(i+1)].cells;
					  	    	x[1].innerHTML = data.bookings[a].bookingName;
					  	    	x[2].innerHTML = data.bookings[a].player1;
					  	    	x[3].innerHTML = data.bookings[a].player2;
					  	    	x[4].innerHTML = "";
					  	    	x[5].innerHTML = "";
		  	  					if(selectedDate == today && data.bookingTimes[i].bookingTimes <= currentTime)
							  	  {
							  	  		output += '<td>Time has passed</td>';
							  	  }
							  	  else
		  	  					x[6].innerHTML = "Tee Reserved";
					  		   	}
					  		   	else if(data.bookings[a].player4 == 0)
					  		   	{

					  		   		var x = document.getElementById("bookingsTable").rows[(i+1)].cells;
					  	    		x[1].innerHTML = data.bookings[a].bookingName;
					  	    		x[2].innerHTML = data.bookings[a].player1;
					  	    		x[3].innerHTML = data.bookings[a].player2;
					  	    		x[4].innerHTML = data.bookings[a].player3;
					  	    		x[5].innerHTML = "";
					  		   
		  	  						if(selectedDate == today && data.bookingTimes[i].bookingTimes <= currentTime)
							  	  	{
							  	  		output += '<td>Time has passed</td>';
							  	  	}
							  	  	else
		  	  						x[6].innerHTML = "Tee Reserved";
					  		   	}
					  		   	else
					  		   	{
					  	    	//alert(document.getElementById("bookingsTable").rows[(i+1)].cells[0].innerHTML);
					  	    	var x = document.getElementById("bookingsTable").rows[(i+1)].cells;
					  	    	x[1].innerHTML = data.bookings[a].bookingName;
					  	    	x[2].innerHTML = data.bookings[a].player1;
					  	    	x[3].innerHTML = data.bookings[a].player2;
					  	    	x[4].innerHTML = data.bookings[a].player3;
					  	    	x[5].innerHTML = data.bookings[a].player4;
					  	    	if(selectedDate == today && data.bookingTimes[i].bookingTimes <= currentTime)
							  	  {
							  	  		output += '<td>Time has passed</td>';
							  	  }
							  	  else
					  	    	x[6].innerHTML = "Tee Reserved";
					  	    	}
					  	    	

					  	    }
					}

		  		
		      } 
		   } 
	
	
}

$(document).on("click", ".bookNow", function(){
  	    timeSelected = this.id;
  	     if(jQuery('input[id=players]').is(':checked')){
 
  	    var selValue = $('input:checked').val(); 
	    //alert(selValue);
	    //alert(timeSelected);
	    $(".popup-overlay, .popup-content").addClass("active");
	    if(selValue == 1)
	    {
	    $("#bookingForm").find('input[id="player2"]').each(function(){
                    $(this).parents("tr").remove();
                });
	    $("#bookingForm").find('input[id="player3"]').each(function(){
                    $(this).parents("tr").remove();
                });
	    $("#bookingForm").find('input[id="player4"]').each(function(){
                    $(this).parents("tr").remove();
                });
	    }
	    if(selValue == 2)
	    {
	     $("#bookingForm").find('input[id="player3"]').each(function(){
                    $(this).parents("tr").remove();
                });	
	   	 $("#bookingForm").find('input[id="player4"]').each(function(){
                    $(this).parents("tr").remove();
                });
    	}
	    if(selValue == 3)
	    {
	   	 $("#bookingForm").find('input[id="player4"]').each(function(){
                    $(this).parents("tr").remove();
                });
    	}
	    $("#dateSelected").val(selectedDate);
	    $("#timeSelected").val(timeSelected);
	}
	else
	{
		alert("Please select how your preferred amount of players!")
	}
	    
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(document).on("click", "#close", function(){
  $(".popup-overlay, .popup-content").removeClass("active");
  timeSelected = "";
});


$(document).on("click", "#confirmBooking", function(){
  //alert("Booking Confirmed");
  //alert(selectedDate);
  //alert(timeSelected);
  var bookingName;
  bookingName = $("#bookingName").val();
  //alert(bookingName);
  var bookingEmail;
  bookingEmail = $("#email").val();
  //alert(bookingEmail);
  var player1;
  player1 = $("#player1").val();
  //alert(player1);
  var player2;
  player2 = $("#player2").val();
  //alert(player2);
  var player3;
  player3 = $("#player3").val();
  //alert(player3);
  var player4;
  player4 = $("#player4").val();
  //alert(player4);


  	          $.ajax({
	            type: 'POST',
	            data: {bookingDate: selectedDate, bookingTime: timeSelected, bookingEmail: bookingEmail,
	             bookingName: bookingName, player1: player1,  player2: player2,  player3: player3,  player4: player4},
	            url: "makeBooking.php",
	            success: function(result){
	            	  alert("Booking Confirmed");
	            }
	          });
});

