<?php include('process.php'); ?>
<html>
<head>
<title>Applied Team 4 | Golf Booking System</title>
  <!-- scripts -->
<script src="jquery-3.3.1.min.js"></script>
<script src="cancelBooking.js"></script>
  <link rel="stylesheet" href="css/cancelStyle.css">
</head>
<body>
 <form id="cancel_form">
      <h1>Cancel Booking</h1>
      <div align="center"><p>Please enter your booking details below.</p></div>
      <div id="error_msg"></div>
	  <div>
	 	<input type="text" name="bookingRef" placeholder="Booking Ref. Number" id="bookingRef" >
	    <span align="center"></span>
	  </div>
	  <div>
	    <input type="date" name="bookingDate" placeholder="Date" id="bookingDate">
		<span align="center"></span>
	  </div>
	  <div>
	   <input type="text" name="bookingTime" placeholder="Booking Time" id="bookingTime">
	   <span align="center"></span>
	  </div>
	  	  <div>
	   <input type="text" name="bookingName" placeholder="Booking Name" id="bookingName">
	   <span align="center"></span>
	  </div>
	  <div>
	 	<button type="button" name="cancel" id="cancel_btn">Cancel</button>
	 	<button type="button" name="back" id="back_btn">Back</button>
	  </div>
	</form>
</body>
</html>