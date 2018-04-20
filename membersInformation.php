<?php
session_start();
require('connect.php');
$memberNum = $_SESSION['memberNumber'];
$query = "SELECT * FROM `userdetails` WHERE MemberNo ='$memberNum'";
$result = mysqli_query($connection,$query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count == 1)
{
 // $_SESSION['username'] = '$firstName' ;
  $row = mysqli_fetch_array($result);
  $firstname = $row['firstName'];
  $firstname .= " ";
  $fullname = $firstname .$row['lastName'];
  $email =$row['email'];
  //echo 'Welcome ';
  //echo $firstname ;
  //echo ' ';
  //echo  $fullname;
  $_SESSION['email']=$email;
 $_SESSION['name'] = $fullname;
}

?>
<html>
<head>
  <title>TeeTimes | Members Information</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="jquery-3.3.1.min.js"></script>
  <script type="text/javascript" src="membersInformation.js"></script>
</head>
<div id="floating_div3">
  
<body>
  <div class="popup-overlay">
  <!--Creates the popup content-->
   <div class="popup-content">
  <h2>Edit Details</h2>
      <table id="bookingForm">
        <tr><th>Edit Player Details</th></tr>
         
          <tr><td><label for="player1">Player 1</label></td><td><input type="text" id="player1" class="form-control" placeholder="" ></td></tr>
          <tr><td><label for="player2">Player 2</label></td><td><input type="text" id="player2" class="form-control" placeholder="" ></td></tr>
          <tr><td><label for="player3">Player 3</label></td><td><input type="text" id="player3" class="form-control" placeholder="" ></td></tr>
          <tr><td><label for="player4">Player 4</label></td><td><input type="text" id="player4" class="form-control" placeholder="" ></td></tr>
    </table>
     <!--popup's close button-->
      <button class="editBooking">Edit Booking</button>
      <button class= "deleteBooking">Delete Booking</button>
      <button class="close">Close</button>    
    </div>
    </div>
	<h1 id="heading"> Welcome <?php  echo $_SESSION['name'] ?> </h1>
<div id="demo">	


<button class= "infoBtns" style="float: right;"><a href="logout.php"> Logout </a></button>
<h4>Your Active Bookings</h4>

<?php
//session_start();
require('connect.php');
$name = $_SESSION['name'];
$query = "SELECT * FROM `bookings` WHERE (player1 = '$name') OR (player2 = '$name') OR (player3 = '$name') OR (player4 ='$name') ORDER BY 'bookingDate' ASC";
$result = mysqli_query($connection,$query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);

echo "<table class='bookingTimes' border = '1'>"; 

if ($count > 0)
  {
 
  echo "<tr><td nowrap>" . "Date" . "</td><td nowrap>" . "Time" . "</td><td nowrap>" . "Player 1" . "</td><td nowrap>" . "Player 2" . "</td><td nowrap>" . "Player 3" . "</td><td nowrap>" . "Player 4" . "</td><td></td></tr>";
  while($row = mysqli_fetch_array($result)){   
    echo "<tr><td>" . $row['bookingDate'] . "</td><td>" . $row['bookingTime'] . "</td><td>" . $row['player1'] . "</td><td>" . $row['player2'] . "</td><td>" . $row['player3'] . "</td><td>" . $row['player4'] . "</td><td>"."<button name='".$row['bookingDate']."' type='submit' class='edit' id='".$row['bookingTime']."'>Edit</button></td></tr>";  

  }
}
else
{
  echo "No Bookings Made";
}

echo "</table>";
?>


<p>Click here to book a tee time     <button class = "infoBtns"><a href ="memberBooking.php">Book a time<a></button></p>


</div>
</div>


</body>
</html>
