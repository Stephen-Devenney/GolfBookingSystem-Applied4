<html>
<head>
<title>Confirmation Page of Web Form</title>
<script src="jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="bookingConfirmation.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<?php
require('connect.php');

$date = $_POST ["date"];
$time = $_POST ["time"];
$name = $_POST ["bookingName"];
$email = $_POST ["email"];

    echo " <span type='hidden' id='date' value= '" . $date ."' />";
   	echo " <span type='hidden' id='time' value= '" . $time ."' />";
   	echo " <span type='hidden' id='bookingName' value= '" . $name . "' />";
   	echo " <span type='hidden' id='email' value= '" . $name . "' />";
?>
<div id="floating_div">
<div id="bookingConfirmation">	
	<h4  align="center"> Your booking has been made!</h4>
	<div id="booking">
	</div>
	<center><button class="back"><a href ="teetimes.html">Return</a></button></center>
</div>
</div>

</body>