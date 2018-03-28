// setTimeout(function(){
//    window.location.reload(1);
// }, 5000);
var data;
var output;
var xmlhttp;
var year;
var selectedDate;
var date;
window.onload=function() {
	var fullDate = new Date()
	console.log(fullDate); 
	//convert month to 2 digits
	var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
	date = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	console.log(date);
	selectedDate = date;
    getAjaxData();
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
		  output += "<table class=bookingTimes border = 1><tr><td>Time</td><td>Booking Name</td><td>Player 1</td><td>Player 2</td><td>Player 3</td><td>Player 4</td><td></td></tr>"

		  	for(i = 0; i < data.bookingTimes.length; i++)
		  	{	
		  		output += '<tr><td>' + data.bookingTimes[i].bookingTimes + '</td>';
		  		if(data.bookings.length > 0)
		  		{
			  		for(a = 0; a < data.bookings.length; a++)
		  	  		{
		  	    		 if(data.bookingTimes[i].bookingTimes == data.bookings[a].bookingTime)
					  	     {
					  		   if(data.bookings[a].player2 == 0 && data.bookings[a].player3 == 0 && data.bookings[a].player4 == 0)
					  		   	{
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td>' + data.bookings[a].player1 + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player2 value=1> €30.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player3 value=2> €60.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player4 value=3> €90.00</td>';
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }
					  		   else if(data.bookings[a].player3 ==0 && data.bookings[a].player4 == 0)
					  		   {
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td>' + data.bookings[a].player1 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player2 + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player3 value=1> €30.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player4 value=2> €60.00</td>';
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }
					  		   else if(data.bookings[a].player4 == 0)
					  		   {	output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td>' + data.bookings[a].player1 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player2 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player3 + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player4 value=1> €30.00</td>';
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }
					  		   else if (data.bookings[a].player1 == 0 && data.bookings[a].player2 == 0 && data.bookings[a].player3 == 0 && data.bookings[a].player4 != 0)
					  		   {	
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player1 value=1> €30.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player2 value=2> €60.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player3 value=3> €90.00</td>';
					  		   		output += '<td>' + data.bookings[a].player4 + '</td>';
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }
					  		   /*else if (data.bookings[a].player1 == 0 && data.bookings[a].player2 == 0 && data.bookings[a].player3 != 0 && data.bookings[a].player4 != 0)
					  		   {	
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td>' + data.bookings[a].player3 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player4 + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player3 value=1> €30.00</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player4 value=2> €60.00</td>';;
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }
					  		    else if (data.bookings[a].player1 == 0 && data.bookings[a].player2 != 0 && data.bookings[a].player3 != 0 && data.bookings[a].player4 != 0)
					  		   {	
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td><input class=cat type=radio id=players name=player1 value=1> €30.00</td>';
					  		   		output += '<td>' + data.bookings[a].player2 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player3 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player4 + '</td>';
					  		   		output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  		   		output += '</tr>'
					  		   }*/

					  		   else if (data.bookings[a].player1 != null && data.bookings[a].player2 != null && data.bookings[a].player3 != null && data.bookings[a].player4 != null)
					  		   {	
					  		   		output += '<td>' + data.bookings[a].bookingName + '</td>';
					  		   		output += '<td>' + data.bookings[a].player1 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player2 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player3 + '</td>';
					  		   		output += '<td>' + data.bookings[a].player4 + '</td>';
					  		   		output += '<td></td>';
					  		   		output += '</tr>'
					  		   }					  		   
					  	     }
					  	else
					  	{
					  	     output += '<td></td>';
					  		 output += '<td><input class=cat type=radio id=players name=player value=1 > €30.00</td>';
					  		 output += '<td><input class=cat type=radio id=players name=player value=2 > €60.00</td>';
					  		 output += '<td><input class=cat type=radio id=players name=player value=3 > €90.00</td>';
					  		 output += '<td><input class=cat type=radio id=players name=player value=4 > €120.00</td>';
					  		 output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
					  	     output += '</tr>'
					  	 }


		      	}

		  	}
		     else
		     {
		      output += '<td></td>';
		  	  output += '<td><input class=cat type=radio id=players name=player value=1 > €30.00</td>';
		  	  output += '<td><input class=cat type=radio id=players name=player value=2 > €60.00</td>';
		  	  output += '<td><input class=cat type=radio id=players name=player value=3 > €90.00</td>';
		  	  output += '<td><input class=cat type=radio id=players name=player value=4 > €120.00</td>';
		  	  output += '<td><button name="time" type="submit" class="bookNow" id="' + data.bookingTimes[i].bookingTimes+'">Book Now</button></td>';
		  	  output += '</tr>'
		      }  


  			}
  		output += "</table>";
		}
		document.getElementById('results').innerHTML = output;
	
}

$(document).on("click", ".bookNow", function(){
  	    timeSelected = this.id;
  	    var selValue = $('input:checked').val(); 
	    alert(selValue);
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
	    
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(document).on("click", ".close", function(){
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

