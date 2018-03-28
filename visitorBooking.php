<DOCTYPE html>
<head>
<title>Applied Team 4 | Golf Booking System</title>
<script src="jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.leanModal.min.js"></script>
<script type="text/javascript" src="visitorBookings.js"></script>
<script type="text/javascript" src="clock.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <script>
  $( function() {
    $( "#datepicker" ).datepicker({minDate:0});
    $( "#datepicker" ).datepicker("option", "dateFormat", "DD, d MM, yy");
  } );
  </script>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
		<div id="floating_div2">
			<h2> Book A Tee Time </h2>
			<h4 id="txt"></h4>
		<h4 id="date"></h4><input type="button" id="datepicker" value="cal"><span class="glyphicon glyphicon-calendar"></span> Calendar</input>
    <hr>
    <!--Creates the popup body-->
<div class="popup-overlay">
  <!--Creates the popup content-->
   <div class="popup-content">
      <h2>Booking Details</h2>
      <table id="bookingForm">
        <tr><th>Booking Details</th></tr>
          <tr><td>Date:</td><td><input type="text" id="dateSelected" class="form-control" placeholder="" readonly></td></tr>
          <tr><td>Time:</td><td><input type="text" id="timeSelected" class="form-control" placeholder="" readonly></td></tr>
          <tr><td>Booking Name:</td><td><input type="text" id="bookingName" class="form-control" placeholder="" required></td>
          <tr><td>Email:</td><td><input type="text" id="email" class="form-control" placeholder="" required></td>
          <tr><td><label for="player1">Player 1</label></td><td><input type="text" id="player1" class="form-control" placeholder="" ></td>
          <tr><td><label for="player2">Player 2</label></td><td><input type="text" id="player2" class="form-control" placeholder="" ></td>
          <tr><td><label for="player3">Player 3</label</td><td><input type="text" id="player3" class="form-control" placeholder="" ></td>
          <tr><td><label for="player4">Player 4</label></td><td><input type="text" id="player4" class="form-control" placeholder="" ></td>
    </table>
     <!--popup's close button-->
      <button id="confirmBooking">Confirm Booking</button>
      <button class="close">Close</button>    
    </div>
    </div>
    <div id="results">
    </div>


</div>
</div>
</body>
</html>