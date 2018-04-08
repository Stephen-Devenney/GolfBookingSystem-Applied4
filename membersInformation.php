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

  //echo 'Welcome ';
  //echo $firstname ;
  //echo ' ';
  //echo  $fullname;
 $_SESSION['name'] = $fullname;
}

?>
<html>
<head>
  <title>TeeTimes | Members Information</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<div id="floating_div3">
<body>
	<h1 id="heading"> Welcome <?php  echo $_SESSION['name'] ?> </h1>
<div id="demo">	


<button class= "infoBtns" style="float: right;"><a href="logout.php"> Logout </a></button>

<button class= "infoBtns" style="float: right;"><a href ="memberAccount.html">My Account</a></button>
<button class= "infoBtns" style="float: right;"><a href ="membersLogin.php">Return</a></button>
<h4>Your Active Bookings</h4>

<?php
//session_start();
require('connect.php');
$name = $_SESSION['name'];
$query = "SELECT * FROM `bookings` WHERE (player1 = '$name') OR (player2 = '$name') OR (player3 = '$name') OR (player4 ='$name') ";
$result = mysqli_query($connection,$query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);

echo "<table border = '1'>"; 

if ($count > 0)
  {
 
  echo "<tr><td nowrap>" . "Date" . "</td><td nowrap>" . "Time" . "</td><td nowrap>" . "Player 1" . "</td><td nowrap>" . "Player 2" . "</td><td nowrap>" . "Player 3" . "</td><td nowrap>" . "Player 4" . "</td></tr>";
  while($row = mysqli_fetch_array($result)){   
    echo "<tr><td>" . $row['bookingDate'] . "</td><td>" . $row['bookingTime'] . "</td><td>" . $row['player1'] . "</td><td>" . $row['player2'] . "</td><td>" . $row['player3'] . "</td><td>" . $row['player4'] . "</td></tr>";  
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
