<html>
<head>
<title>Applied Team 4 | Golf Booking System</title>
<script src="jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<div id="floating_div">
    <h2> Cancel Tee Booking </h2>
          <table class=bookingConfirmation>
            <tr>  
            <td><label>Booking Reference No.:</label></td>
            <td><input type="text"/></td>
            </tr>
            <tr>  
            <td><label>Date:</label></td>
            <td><input id="date" type="text"></td>
            </tr>
            <tr>  
            <td><label>Time:</label></td>
            <td><input id="time" type="text"></td>
            </tr>
            <tr>  
            <td><label>Booking Name:</label></td>
            <td><input id="bookingName" type="text"></td>
            </tr>
            <tr>
            <td><button class="backButton"><a href="visitors.php">Back</a></td>
            <td><button class="confirmButton"><a href="cancelConfirmation.php">Cancel Booking</a></td>
            </tr>
          </table>
          </form>
</div>
</body>
</html>