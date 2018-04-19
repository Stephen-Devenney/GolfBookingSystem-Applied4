<?php

/*$date = $_POST ["date"];
$time = $_POST ["time"];
$name = $_POST ["bookingName"];
$email = $_POST ["email"];
*/
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"golf");


// for team details
//$result = mysqli_query($connection,"SELECT * FROM bookings WHERE bookingDate = '$date' AND bookingTime = '$time'");
/*$result = mysqli_query($connection,"SELECT * FROM bookings WHERE 
  (bookingDate = '$date' AND bookingTime = '$time') OR 
  (bookingDate = '$date'  AND email = '$email') OR 
  (bookingDate = '$date'  AND bookingName = '$name') OR
  (bookingTime = '$time' AND bookingName = '$name')");*/

$result = mysqli_query($connection, "SELECT * FROM bookings ORDER BY bookingRef DESC LIMIT 1");
$rs = array();
$i=0;
while($rs[] = mysqli_fetch_assoc($result)) {
// do nothing ;-)
}


mysqli_close($connection);

unset($rs[count($rs)-1]);

print("{ \"booking\":" . json_encode($rs). "}");
?>