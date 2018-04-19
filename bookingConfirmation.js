var output = "";

window.onload=function() {

/*var date = $('#date').text();
var time = $("#time").val();
var name = $("#bookingName").val();
var email = $("#email").val();
console.log(date);
console.log(time);
console.log(name);
console.log(email);*/
getAjaxData();
}

function getAjaxData() {

	year = new Date();
	currentYear = year.getFullYear();

  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function (){
    showAjaxData();
  };

  //xmlhttp.open("GET","getBookingData.php" ,true);
  xmlhttp.open("GET","getBookingConfirmation.php",true);
  xmlhttp.send();
}
//setInterval(getAjaxData, 5000);

function showAjaxData(){
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	  data = JSON.parse(xmlhttp.responseText);


	  console.log(data);
	  output += "<table class=bookingConfirmation border = 1>";
	  output += "<tr><th colspan=2>Booking Details</th></tr>";

	  	for(i = 0; i < data.booking.length; i++)
		  	{
		  		if(data.booking[i].player2 == "")
		  		{
		  			output += '<tr><td>Reference</td><td>' + data.booking[i].bookingRef + '</td></tr>';
	    			output += '<tr><td>Date</td><td>' + data.booking[i].bookingDate + '</td></tr>';
	    			output += '<tr><td>Time</td><td>' + data.booking[i].bookingTime + '</td></tr>';
	    			output += '<tr><td>Name</td><td>' + data.booking[i].bookingName + '</td></tr>';
	    			output += '<tr><td>Player 1</td><td>' + data.booking[i].player1 + '</td></tr>';	
		  		}
		  		else if(data.booking[i].player2 == "" && data.booking[i].player3 == "")
		  		{
		  			output += '<tr><td>Reference</td><td>' + data.booking[i].bookingRef + '</td></tr>';
	    			output += '<tr><td>Date</td><td>' + data.booking[i].bookingDate + '</td></tr>';
	    			output += '<tr><td>Time</td><td>' + data.booking[i].bookingTime + '</td></tr>';
	    			output += '<tr><td>Name</td><td>' + data.booking[i].bookingName + '</td></tr>';
	    			output += '<tr><td>Player 1</td><td>' + data.booking[i].player1 + '</td></tr>';
	    			output += '<tr><td>Player 2</td><td>' + data.booking[i].player2 + '</td></tr>';
		  		}
		  		else
		  		{
	    			output += '<tr><td>Reference</td><td>' + data.booking[i].bookingRef + '</td></tr>';
	    			output += '<tr><td>Date</td><td>' + data.booking[i].bookingDate + '</td></tr>';
	    			output += '<tr><td>Time</td><td>' + data.booking[i].bookingTime + '</td></tr>';
	    			output += '<tr><td>Name</td><td>' + data.booking[i].bookingName + '</td></tr>';
	    			output += '<tr><td>Player 1</td><td>' + data.booking[i].player1 + '</td></tr>';
	    			output += '<tr><td>Player 2</td><td>' + data.booking[i].player2 + '</td></tr>';
	    			output += '<tr><td>Player 3</td><td>' + data.booking[i].player3 + '</td></tr>';
	    			output += '<tr><td>Player 4</td><td>' + data.booking[i].player4 + '</td></tr>';
	    		}

			}
		output += "</table>";
		
		document.getElementById('booking').innerHTML = output;
		}
}




