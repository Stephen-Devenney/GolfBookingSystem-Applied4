<?php
  $connection = mysqli_connect('localhost','root','', 'golf');

  $bookingDate = $_POST['bookingDate'];
  $bookingTime = $_POST['bookingTime'];
  $bookingName = $_POST['bookingName'];
  $bookingEmail = $_POST['bookingEmail'];
  $player1 = $_POST['player1'];
  $player2 = $_POST['player2'];
  $player3 =  $_POST['player3'];
  $player4 =  $_POST['player4'];



// Check connection
if($connection === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Update Bookings Info
$sql = "UPDATE bookings SET player1='$player1' , player2='$player2' , player3='$player3', player4='$player4' WHERE bookingDate = '$bookingDate' and bookingTime = '$bookingTime'";  

if(mysqli_query($connection, $sql)){
    echo "Records were updated successfully.";
} else {
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($connection);
}

// Close connection
mysqli_close($connection);
?>